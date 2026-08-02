// import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { supabase } from "@/integrations/supabase/client";

// type Promo = { id: string; promo_year: number; image_url: string; display_order: number };

// export default function Promos() {
//   const [promos, setPromos] = useState<Promo[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     (async () => {
//       const { data } = await (supabase as any)
//         .from("promo_logos")
//         .select("*")
//         .order("display_order")
//         .order("promo_year");
//       setPromos((data as Promo[]) ?? []);
//       setLoading(false);
//     })();
//   }, []);

//   return (
//     <div className="pt-24 md:pt-28 pb-20">
//       <div className="container mx-auto px-4">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
//           <span className="text-accent font-semibold uppercase tracking-widest text-lg">Nuestros espacios</span>
//           <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">Instalaciones</h1>
//           <p className="text-muted-foreground mt-2 text-lg">Conoce los espacios donde nuestros estudiantes aprenden, crecen y comparten experiencias</p>
//           <p className="text-muted-foreground text-lg">en un ambiente seguro, moderno y diseñado para favorecer su formación integral.</p>
//         </motion.div>

//         {loading ? (
//           <p className="text-center text-muted-foreground">Cargando...</p>
//         ) : promos.length === 0 ? (
//           <p className="text-center text-muted-foreground">Aún no se han cargado imagenes.</p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
//             {promos.map((p) => (
//               <motion.div
//                 key={p.id}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="bg-card border border-border rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <img src={p.image_url} alt={`Promoción ${p.promo_year}`} className="w-full h-40 object-contain mb-3" />
//                 <span className="text-sm font-bold text-foreground">Promoción {p.promo_year}</span>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


const modules = import.meta.glob<string>(
  "../assets/instalaciones/*.{png,jpg,jpeg,webp,avif,gif,svg}",
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
                  className="group overflow-hidden rounded-xl border bg-card shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={`Instalaciones: ${img.nombre}`}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* <figcaption className="px-4 py-3 text-sm capitalize text-muted-foreground">
                    {img.nombre}
                  </figcaption> */}
                </motion.figure>
              ))}
            </div>
          )}
        </div>
      </section>
    // </div>
  );
}
