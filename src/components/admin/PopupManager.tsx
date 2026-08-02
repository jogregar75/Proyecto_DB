import { useCallback, useEffect, useState } from "react";
import { Loader2, Upload, Trash2, Save } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { compressImage } from "@/lib/image-compress";

const BUCKET = "popup-media";

const sanitize = (name: string) => name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);

type Settings = {
  id: string;
  enabled: boolean;
  media_url: string | null;
  media_type: "image" | "video";
  title: string | null;
};

const PopupManager = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileKey, setFileKey] = useState(0);
  const [title, setTitle] = useState("");
  const [enabled, setEnabled] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await (supabase as any)
      .from("popup_settings")
      .select("id, enabled, media_url, media_type, title")
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (data) {
      setSettings(data as Settings);
      setEnabled(!!data.enabled);
      setTitle(data.title ?? "");
      if (data.media_url) {
        const { data: signed } = await supabase.storage.from(BUCKET).createSignedUrl(data.media_url, 3600);
        setPreviewUrl(signed?.signedUrl ?? null);
      } else {
        setPreviewUrl(null);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => { void load(); }, [load]);

  const save = async () => {
    setSaving(true);
    try {
      let mediaPath = settings?.media_url ?? null;
      let mediaType = settings?.media_type ?? "image";

      if (file) {
        const isImage = file.type.startsWith("image/");
        const isVideo = file.type.startsWith("video/");
        if (!isImage && !isVideo) throw new Error("tipo");

        const toUpload = isImage
          ? await compressImage(file, { maxSize: 1600, quality: 0.85 }).catch(() => file)
          : file;

        // const path = `${Date.now()}-${crypto.randomUUID()}-${sanitize(toUpload.name)}`;
        const path = `${Date.now()}-${Math.random().toString(36).substring(2, 10)}-${sanitize(toUpload.name)}`;
        const { error: upErr } = await supabase.storage
          .from(BUCKET)
          .upload(path, toUpload, { upsert: false, contentType: toUpload.type });
        if (upErr) throw upErr;

        if (mediaPath) await supabase.storage.from(BUCKET).remove([mediaPath]);
        mediaPath = path;
        mediaType = isImage ? "image" : "video";
      }

      const payload = {
        enabled,
        title: title.trim() || null,
        media_url: mediaPath,
        media_type: mediaType,
      };

      if (settings) {
        const { error } = await (supabase as any).from("popup_settings").update(payload).eq("id", settings.id);
        if (error) throw error;
      } else {
        const { error } = await (supabase as any).from("popup_settings").insert(payload);
        if (error) throw error;
      }

      setFile(null);
      setFileKey((k) => k + 1);
      toast({ title: "Ventana emergente actualizada" });
      await load();
    } catch {
      toast({ title: "Error", description: "No se pudo guardar la configuración.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const removeMedia = async () => {
    if (!settings?.media_url) return;
    if (!confirm("¿Eliminar el archivo actual?")) return;
    try {
      await supabase.storage.from(BUCKET).remove([settings.media_url]);
      const { error } = await (supabase as any)
        .from("popup_settings")
        .update({ media_url: null, enabled: false })
        .eq("id", settings.id);
      if (error) throw error;
      toast({ title: "Archivo eliminado" });
      await load();
    } catch {
      toast({ title: "Error", description: "No se pudo eliminar.", variant: "destructive" });
    }
  };

  return (
    <section className="bg-card rounded-xl p-6 border border-border shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-accent font-semibold uppercase tracking-wider">Ventana emergente</p>
        <h2 className="font-display text-2xl font-bold text-foreground mt-2">Aviso en la página principal</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Suba una imagen o un video que se mostrará en una ventana emergente al entrar a la página principal.
          La ventana se adapta al tamaño del archivo, hasta el alto de la pantalla.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-7 h-7 animate-spin text-accent" /></div>
      ) : (
        <div className="space-y-5">
          <div className="flex items-center justify-between rounded-lg border border-border p-4">
            <div>
              <Label className="text-base">Mostrar ventana emergente</Label>
              <p className="text-xs text-muted-foreground mt-1">
                {enabled ? "Activada: los visitantes la verán al entrar." : "Desactivada: nadie la verá."}
              </p>
            </div>
            <Switch checked={enabled} onCheckedChange={setEnabled} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-title">Título (opcional)</Label>
            <Input id="popup-title" value={title} maxLength={120} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="popup-file">Imagen o video</Label>
            <Input key={fileKey} id="popup-file" type="file" accept="image/*,video/*"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            {file && <p className="text-xs text-muted-foreground">{file.name}</p>}
          </div>

          {previewUrl && (
            <div className="space-y-2">
              <Label>Archivo actual</Label>
              <div className="rounded-lg border border-border bg-muted p-3 inline-block max-w-full">
                {settings?.media_type === "video" ? (
                  <video src={previewUrl} controls className="max-h-64 rounded bg-black" />
                ) : (
                  <img src={previewUrl} alt="Vista previa" className="max-h-64 rounded object-contain" />
                )}
              </div>
              <div>
                <Button type="button" variant="ghost" className="text-destructive gap-2" onClick={() => void removeMedia()}>
                  <Trash2 className="w-4 h-4" /> Eliminar archivo
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button type="button" onClick={() => void save()} disabled={saving} className="gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : file ? <Upload className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              Guardar cambios
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopupManager;