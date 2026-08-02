import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BUCKET = "popup-media";

const HomePopup = () => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [type, setType] = useState<"image" | "video">("image");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const { data } = await (supabase as any)
        .from("popup_settings")
        .select("enabled, media_url, media_type, title")
        .order("updated_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (cancelled || !data?.enabled || !data.media_url) return;

      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(data.media_url, 60 * 60);
      if (cancelled || !signed?.signedUrl) return;

      setUrl(signed.signedUrl);
      setType(data.media_type === "video" ? "video" : "image");
      setTitle(data.title ?? "");
      setOpen(true);
    };
    void load();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open || !url) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 animate-in fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative inline-block max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-10 rounded-full bg-background text-foreground border border-border shadow-lg p-2 hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {type === "image" ? (
          <img
            src={url}
            alt={title || "Aviso institucional"}
            className="block max-h-[90vh] max-w-[92vw] w-auto h-auto rounded-lg shadow-2xl object-contain"
          />
        ) : (
          <video
            src={url}
            controls
            autoPlay
            playsInline
            className="block max-h-[90vh] max-w-[92vw] w-auto h-auto rounded-lg shadow-2xl bg-black"
          />
        )}

        {title && (
          <p className="mt-3 text-center text-sm font-semibold text-white">{title}</p>
        )}
      </div>
    </div>
  );
};

export default HomePopup;