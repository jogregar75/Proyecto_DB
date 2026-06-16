import { motion } from "framer-motion";

import bosco1 from "@/assets/patrono/Patrono1.jpg";
import bosco2 from "@/assets/patrono/Patrono2.jpg";
import bosco3 from "@/assets/patrono/Patrono3.jpg";

const Patrono = () => (
  <div className="pt-24 md:pt-28 pb-20">
    <div className="container mx-auto px-4 max-w-6xl">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <span className="text-accent font-semibold uppercase tracking-widest text-lg">
          Nuestro modelo de vida
        </span>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
          San Juan Bosco
        </h1>

        <p className="text-xl text-muted-foreground mt-2">
          Nuestro Patrono
        </p>
      </motion.div>

      <div className="text-justify leading-relaxed text-foreground/90 space-y-4">

        <img
          src={bosco1}
          alt="San Juan Bosco"
          className="float-right w-full md:w-80 ml-0 md:ml-6 mb-4 rounded-xl shadow-lg"
        />

        <p>
          Juan Bosco nació en Italia un 16 de agosto de 1815. De condición
          pobre, su padre murió cuando él tenía solamente tres años. Pasó sus
          primeros años trabajando como pastor de ovejas y recibió su primera
          educación del sacerdote de su parroquia. Con los años su apetito por
          el estudio fue creciendo, pero su pobreza lo obligaba seguido a
          abandonar la escuela.
        </p>

        <p>
          En 1835 entraba en el seminario, y seis años después era ordenado
          sacerdote. Marchó a Turín, donde se abocó con fervor a su trabajo.
          Realizaba muchas visitas a las cárceles de la ciudad, y viendo la
          situación en la que vivían muchos niños que habitaban en la zona,
          expuestos a malas influencias, decidió dedicar su vida al rescate de
          estos pequeños marginados.
        </p>

        <p>
          Don Bosco comenzó a instruir a los chicos de la calle: pronto, sus
          alumnos crecerían en número, atraídos por una bondad que nunca antes
          habían conocido.
        </p>

        <img
          src={bosco2}
          alt="Don Bosco con los niños"
          className="float-left w-full md:w-80 mr-0 md:mr-6 mb-4 mt-2 rounded-xl shadow-lg"
        />

        <p>
          San Juan siempre supo ver, debajo de los harapos y la suciedad de
          estos niños endurecidos por la vida, una chispa que, con un poco de
          esfuerzo, se convertiría en una gran llama de amor.
        </p>

        <p>
          Sabía que no era con fuerza, castigos o gritos como se ganaría a los
          niños, sino con caridad y gentileza. Lograba impulsar al estudio
          inculcando a sus alumnos el sentido del deber, apreciando siempre
          hasta el más mínimo esfuerzo, incentivándolos a fortalecer su
          voluntad y templar su carácter.
        </p>

        <p>
          Desafortunadamente, el éxito de su trabajo en el Oratorio no duró
          mucho. Don Bosco se vio obligado a entregar los cuartos utilizados y
          otros obstáculos se fueron superponiendo. Sin embargo, continuó su
          labor sin rendirse nunca.
        </p>

        <p>
          Las clases fueron aumentando y se fueron agregando dormitorios para
          quienes deseaban vivir en el Oratorio. Así nació el primer Hogar
          Salesiano.
        </p>

        <img
          src={bosco3}
          alt="Obra Salesiana"
          className="float-right w-full md:w-80 ml-0 md:ml-6 mb-4 mt-2 rounded-xl shadow-lg"
        />

        <p>
          En 1854 comunicó a cuatro jóvenes que la Virgen deseaba que él
          comenzara una Sociedad. Decidió que sus integrantes se llamarían
          salesianos, en memoria de San Francisco de Sales, quien sería su
          modelo de bondad en el trato con los jóvenes.
        </p>

        <p>
          Finalmente sometió el proyecto al papa Pío IX, quien lo aprobó en
          1874. Para llegar a esta aprobación Don Bosco tuvo que enfrentarse a
          numerosas complicaciones.
        </p>

        <p>
          Pero todas las dificultades que Don Bosco debió superar se verían más
          que recompensadas por la rápida expansión de su obra. El santo
          falleció en 1888, dejando una huella imborrable en la educación de
          miles de jóvenes.
        </p>

        <p>
          Como testimonio de su obra, quedaban en ese momento 250 casas
          salesianas en todo el mundo, con más de 1200 religiosos trabajando en
          ellas y más de 130.000 niños encargados a su cuidado.
        </p>

        <p>
          San Juan Bosco se presenta para todos como un ideal de perseverancia
          ante las dificultades y nos recuerda que no debemos prejuzgar ni
          condenar a nadie, sino hacer lo posible por ayudar a aquellos que más
          nos necesitan.
        </p>

        <blockquote className="clear-both border-l-4 border-accent pl-6 italic text-foreground/80 mt-10">
          “La instrucción es como un accesorio: el conocimiento nunca hace un
          hombre porque no toca directamente el corazón del hombre. Da más
          poder en el ejercicio del bien y el mal, pero sólo es un arma
          indiferente, buscando guía.”
          <footer className="text-sm mt-2 not-italic text-muted-foreground text-right">
            — San Juan Bosco
          </footer>
        </blockquote>

      </div>
    </div>
  </div>
);

export default Patrono;