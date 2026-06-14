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
    <section className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">
            Nuestro equipo
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Autoridades
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conoce al equipo directivo y de coordinación que guía la formación de nuestros estudiantes.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2 italic">
            Pasa el cursor sobre cada foto para ver más información
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
                  className={
                    (
                      highlight
                        ? "group relative bg-card border-2 border-accent rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ring-1 ring-accent/30"
                        : "group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    ) + " h-[260px]"
                  }
                >
                  {/* CONTENIDO NORMAL */}
                  <div className="absolute inset-0 flex flex-col">
                    <div
                      className={
                        (highlight
                          ? "w-32 h-32 md:w-36 md:h-36 "
                          : "w-24 h-24 md:w-28 md:h-28 ") +
                        "mt-4 mx-auto rounded-full bg-muted flex items-center justify-center overflow-hidden ring-2 ring-border"
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
                    </div>

                    <div className="p-4 text-center flex-1 flex flex-col justify-center">
                      <p
                        className={
                          highlight
                            ? "font-display font-bold text-foreground text-base leading-tight"
                            : "font-display font-bold text-foreground text-sm leading-tight"
                        }
                      >
                        {a.name}
                      </p>

                      <p
                        className={
                          (highlight
                            ? "text-accent text-xs font-bold"
                            : "text-accent text-[11px] font-semibold") +
                          " uppercase tracking-wider mt-2"
                        }
                      >
                        {a.role}
                      </p>
                    </div>
                  </div>

                  {/* OVERLAY */}
                  {hasExtra && (
                    <div className="absolute inset-0 bg-primary/95 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 overflow-y-auto">
                      
                      <div className="h-full flex flex-col justify-center">
                        
                        <h3 className="font-bold text-center mb-4">
                          {a.name}
                        </h3>

                        {joined && (
                          <div className="flex items-start gap-2 text-sm mb-4">
                            <CalendarDays className="w-4 h-4 mt-0.5 shrink-0" />
                            <div>
                              <p className="font-semibold">
                                Fecha de ingreso
                              </p>
                              <p>{joined}</p>
                            </div>
                          </div>
                        )}

                        {positions.length > 0 && (
                          <div className="flex items-start gap-2 text-sm">
                            <Briefcase className="w-4 h-4 mt-0.5 shrink-0" />
                            <div>
                              <p className="font-semibold mb-2">
                                Cargos desempeñados
                              </p>

                              <ul className="list-disc list-inside space-y-1">
                                {positions.map((p, idx) => (
                                  <li key={idx}>{p}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                      </div>
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
