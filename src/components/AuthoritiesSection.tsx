import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Loader2, CalendarDays, Briefcase } from "lucide-react";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";

type Authority = {
  id: string;
  name: string;
  role: string;
  photo_url: string | null;
  display_order: number;
  joined_date: string | null;
  positions: string | null;
};

const formatJoined = (d: string | null) => {
  if (!d) return null;
  try {
    return format(parseISO(d), "d 'de' MMMM 'de' yyyy", { locale: es });
  } catch {
    return d;
  }
};

const splitPositions = (txt: string | null) =>
  (txt ?? "")
    .split(/\r?\n|,/)
    .map((s) => s.trim())
    .filter(Boolean);

const AuthoritiesSection = () => {
  const [authorities, setAuthorities] = useState<Authority[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await (supabase as any)
        .from("authorities")
        .select("id, name, role, photo_url, display_order, joined_date, positions")
        .order("display_order", { ascending: true });
      setAuthorities((data ?? []) as Authority[]);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-lg">
            Nuestro Equipo
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Autoridades Institucionales
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conoce al equipo directivo y de coordinación que guía la formación de nuestros estudiantes.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : (
          (() => {
            const isGerencia = (r: string) => /gerente\s+general/i.test(r);
            const gerentes = authorities.filter((a) => isGerencia(a.role));
            const resto = authorities.filter((a) => !isGerencia(a.role));

            const renderCard = (a: Authority, i: number, highlight = false) => {
              const joined = formatJoined(a.joined_date);
              const positions = splitPositions(a.positions);
              const hasExtra = Boolean(joined || positions.length);

              return (
                <motion.article
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.4) }}
                  // className={
                  //   highlight
                  //     ? "group bg-card border-2 border-accent rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col ring-1 ring-accent/30"
                  //     : "group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                  // }
                  className={
                    (
                      highlight
                        ? "group relative bg-card border-2 border-accent rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ring-1 ring-accent/30"
                        : "group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    ) + " h-[240px]"
                  }
                >
                  <div
                    className={
                      (highlight
                        ? "w-32 h-32 md:w-36 md:h-36 "
                        : "w-24 h-24 md:w-28 md:h-28 ") +
                      "mt-4 mx-auto rounded-full bg-muted flex items-center justify-center overflow-hidden ring-2 ring-border relative"
                    }
                  >
                    {a.photo_url ? (
                      <img
                        src={a.photo_url}
                        alt={a.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <User className="w-10 h-10 text-muted-foreground/40" />
                    )}
                    {hasExtra && (
                      <div className="absolute inset-0 rounded-full bg-primary/85 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <span className="text-[10px] uppercase tracking-wider font-semibold">Info</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center flex-1 flex flex-col justify-center">
                    <p className={highlight ? "font-display font-bold text-foreground leading-tight text-base" : "font-display font-bold text-foreground leading-tight text-sm"}>
                      {a.name}
                    </p>
                    <p className={(highlight ? "text-accent text-xs font-bold" : "text-accent text-[11px] font-semibold") + " uppercase tracking-wider mt-2"}>
                      {a.role}
                    </p>
                  </div>

                  {hasExtra && (
                    <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out max-h-[200px] overflow-y-auto">
                      {joined && (
                        <div className="flex items-start gap-2 text-xs text-muted-foreground mb-2">
                          <CalendarDays className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground/80 uppercase tracking-wider text-[10px]">Ingreso</p>
                            <p>{joined}</p>
                          </div>
                        </div>
                      )}
                      {positions.length > 0 && (
                        <div className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Briefcase className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground/80 uppercase tracking-wider text-[10px] mb-1">
                              Cargos desempeñados
                            </p>
                            <ul className="space-y-0.5 list-disc list-inside text-left">
                              {positions.map((p, idx) => (
                                <li key={idx}>{p}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.article>
              );
            };

            return (
              <div className="max-w-6xl mx-auto space-y-8">
                {gerentes.length > 0 && (
                  <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                    {gerentes.map((a, i) => renderCard(a, i, true))}
                  </div>
                )}
                {resto.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto items-start">
                    {resto.map((a, i) => renderCard(a, i + gerentes.length))}
                  </div>
                )}
              </div>
            );
          })()
        )}
      </div>
    </section>
  );
};

export default AuthoritiesSection;
