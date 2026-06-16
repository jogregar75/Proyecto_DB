import { motion } from "framer-motion";
import bosco from "@/assets/patrono/Patrono1.jpg";

const Patrono = () => (
  <div className="pt-24 md:pt-28 pb-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <span className="text-accent font-semibold uppercase tracking-widest text-lg">Nuestro modelo de vida</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">San Juan Bosco</h1>
        <p className="text-xl text-muted-foreground mt-2">Nuestro Patrono</p>
      </motion.div>

      <figure className="my-8">
        <img src={bosco} alt="San Juan Bosco" className="max-w-md mx-auto rounded-xl shadow-lg" />
      </figure>

      <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-justify">
        <p>Juan Bosco nació en Italia un 16 de agosto de 1815. De condición pobre, su padre murió cuando él tenía solamente tres años. Pasó sus primeros años trabajando como pastor de ovejas y recibió su primera educación del sacerdote de su parroquia. Con los años su apetito por el estudio fue creciendo, pero su pobreza lo obligaba seguido a abandonar la escuela.</p>
        <p>En 1835 entraba en el seminario, y seis años después era ordenado sacerdote. Marchó a Turín, donde se abocó con fervor a su trabajo. Realizaba muchas visitas a las cárceles de la ciudad, y viendo la situación en la que vivían muchos niños que habitaban en la zona, expuestos a malas influencias, decidió dedicar su vida al rescate de estos pequeños marginados. Don Bosco comenzó a instruir a los chicos de la calle: pronto, sus alumnos crecerían en número, atraídos por una bondad que nunca antes habían conocido.</p>
        <p>San Juan siempre supo ver, debajo de los harapos y la suciedad de estos niños endurecidos por la vida, una chispa que, con un poco de esfuerzo, se convertiría en una gran llama de amor. Sabía que no era con fuerza, castigos o gritos como se ganaría a los niños, sino con caridad y gentileza. Lograba impulsar al estudio inculcando a sus alumnos el sentido del deber, apreciando siempre hasta el más mínimo esfuerzo, incentivándolos, no tanto a que desarrollaran su inteligencia, sino a que fortalecieran su voluntad y templaran su carácter. Desafortunadamente, el éxito de su trabajo en el Oratorio (así se llamaba el lugar donde se reunían los niños) no duró mucho. Don Bosco se vio obligado a entregar los cuartos utilizados y otros obstáculos se fueron superponiendo. Sin embargo, el santo se enfrentó a estos problemas sin rendirse nunca. Continuó su labor, mudando el Oratorio a distintos lugares. Su madre se le unió, vendiendo todo lo que tenía: su casa y sus muebles. Las clases fueron aumentando y se fueron agregando dormitorios, para los que desearan vivir en el Oratorio. Así nació el primer Hogar Salesiano.</p>
        <p>En 1854 comunicó a cuatro jóvenes que la Virgen deseaba que él comenzara una Sociedad. Decidió que sus integrantes se llamarían salesianos, en memoria de San Francisco de Sales, quien sería su "modelo de bondad en el trato con los jóvenes". Se informó sobre las reglas de distintas órdenes, pidió consejo y finalmente sometió el proyecto al papa Pío IX, quien la aprobaría en 1874. Para llegar a esta aprobación Don Bosco tuvo otra vez que enfrentarse con numerosas complicaciones.</p>
        <p>Pero todas las dificultades que Don Bosco debió superar se verían más que recompensadas por la rápida expansión de su orden, que se expandiría por todo el mundo. El santo fallecía en 1888. Como testimonio de su obra, quedaban en ese momento 250 casas de los salesianos en todo el mundo, con 1200 religiosos trabajando en ellas y más de 130000 niños encargados a su cuidado. Ejemplo en particular para los educadores, como modelo de paciencia y dulzura, San Juan Bosco se presenta para todos como un ideal de perseverancia ante las dificultades y nos recuerda que no debemos prejuzgar ni condenar a nadie, sino hacer lo posible por ayudar a aquellos que más nos necesitan.</p>
        <blockquote className="border-l-4 border-accent pl-6 italic text-foreground/80">
          “La instrucción es como un accesorio: el conocimiento nunca hace un hombre porque no toca directamente el corazón del hombre. Da más poder en el ejercicio del bien y el mal, pero sólo es un arma indiferente, buscando guía.”
          <footer className="text-sm mt-2 not-italic text-muted-foreground text-right">— San Juan Bosco</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Patrono;
