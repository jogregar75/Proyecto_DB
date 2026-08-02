import { useEffect, useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";

const modules = import.meta.glob<string>(
  "../assets/instalaciones/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp,avif,gif,svg}",
  { eager: true, import: "default" },
);

const imagenes = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({
    src,
    nombre: path
      .split("/")
      .pop()!
      .replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " "),
  }));

export default function Instalaciones() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    // <div class="pt-16 md:pt-12">
      <section className="pt-24 md:pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-widest text-lg">Nuestros espacios</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">Instalaciones</h1>
              <p className="text-muted-foreground mt-2 text-lg">Conoce los espacios donde nuestros estudiantes aprenden, crecen y comparten experiencias</p>
              <p className="text-muted-foreground text-lg">en un ambiente seguro, moderno y diseñado para favorecer su formación integral.</p>
            </motion.div>
          </div>

          {imagenes.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              Aún no se han cargado imágenes en <code>src/assets/instalaciones</code>.
            </p>
          ) : (
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {imagenes.map((img, i) => (
                <motion.figure
                  key={img.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group cursor-pointer overflow-hidden rounded-xl border bg-card shadow-sm"
                  onClick={() => setSelected(img.src)}
                >
                  <img
                    src={img.src}
                    alt={`Instalaciones: ${img.nombre}`}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.figure>
              ))}
            </div>
          )}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                onClick={() => setSelected(null)}
                aria-label="Cerrar imagen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                src={selected}
                alt="Vista ampliada"
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    // </div>
  );
}
