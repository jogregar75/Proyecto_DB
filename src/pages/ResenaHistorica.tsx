import { motion } from "framer-motion";
import terreno from "@/assets/historia/Historia1.jpg";
import inauguracion from "@/assets/historia/Historia2.jpg";
// import year25 from "@/assets/historia/Historia3.jpg";
import year25 from "@/assets/historia-terreno-1984.jpg.asset.json";
import ciencias from "@/assets/historia/Historia4.jpg";
import logo40 from "@/assets/historia/Historia5.jpg";

const ResenaHistorica = () => (
  <div className="pt-24 md:pt-28 pb-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <span className="text-accent font-semibold uppercase tracking-widest text-lg">Un legado educativo</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">Nuestra Historia</h1>
      </motion.div>

      <div className="prose prose-lg max-w-none text-foreground/90 space-y-6 text-justify">
        <p>La Unidad Educativa Colegio los Pirineos Don Bosco nace el año académico 1984 – 1985 como una respuesta a las exigencias educativas y pedagógicas del Táchira que durante muchos años había disfrutado de las enseñanzas del gran educador del Siglo XIX, San Juan Bosco.</p>
        <p>Los padres y artífices de esta experiencia educativa fueron los hermanos Enzo y Guerrino Guariento y el Sr. Renato Marcuzzi, quienes llenos de ilusiones y sueños aceptan el reto de fundar un colegio inspirado en las pautas pedagógicas de Don Bosco.</p>
        <p>Por ser el Sr. Marcuzzi un empresario del área de la construcción el edificio fue ejecutado de forma rápida de manera que el 12 de octubre de 1984 se realizaba la bendición del edificio y el inicio del año escolar con los primeros alumnos.</p>

        <figure className="my-8">
          <img src={terreno} alt="Terreno antes de la construcción - Archivo 1984" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg" />
          <figcaption className="text-sm text-muted-foreground text-center mt-2">Fuente: Archivo 1984. Terreno antes de la construcción.</figcaption>
        </figure>

        <p>Hay que dar constancia de que desde sus comienzos el colegio inició actividades desde Primer Nivel de Preescolar hasta el Quinto Año de Diversificado en las menciones de ciencias y humanidades de manera que la primera promoción de bachilleres egresa ese mismo año escolar con una sección de más de 30 alumnos y listos para graduarse el siguiente año escolar dos secciones de bachilleres en ciencias y una sección de bachilleres en humanidades.</p>
        <p>Las autoridades con las que se iniciaron las actividades académicas fueron: Lcdo. Enzo Guariento (Director), Lcdo. Guerrino Guariento (Subdirector) y Lcda. María Elena Marcuzzi (Administradora).</p>
        <p>El profesorado con el que se inicia la carrera académica del primer año escolar en el Colegio Los Pirineos Don Bosco se caracteriza por su juventud y entusiasmo; gran parte de ellos son maestros y docentes que están iniciándose en su profesión de educadores con lo que el fruto de esta primera experiencia iba a estar garantizado por la ilusión y ganas de realizar los sueños que por tanto tiempo fueron el estímulo de su estudio durante su estancia en la universidad. Un buen número de los fundadores se han conservado en el colegio y han asumido el relevo en la dirección del colegio.</p>

        <figure className="my-8">
          <img src={inauguracion} alt="Inauguración del Colegio 1984" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg" />
          <figcaption className="text-sm text-muted-foreground text-center mt-2">Fuente: Archivo 1984. Inauguración del Colegio.</figcaption>
        </figure>

        <p>En el año escolar 1991 – 1992 el colegio se enriquece con la presencia de la Pedagoga Mirna Herrera de Guariento, esposa del Director Lcdo. Enzo Guariento, y la organización directiva académica y disciplinar se estructura en cuatro seccionales: Preescolar, Primaria, Ciclo Básico y Diversificado con sus respectivos Coordinadores.</p>
        <p>En el año 1992 – 1993 se conforma un nuevo tren directivo y disciplinario con la presencia de un personal altamente calificado, la Pedagoga Mirna de Guariento como Directora y la Lcda. Zoraida León como Subdirectora. También se renueva el departamento de Orientación y la unidad de Evaluación.</p>
        <p>Para el año escolar 1998 – 1999 la Pedagoga Mirna deja el colegio por motivos familiares y se hace cargo de la misma el Lcdo. Trino Camacho, quien ejercía como Subdirector del Colegio Metropolitano. Se sienten los aires de renovación, pero manteniendo la filosofía original, pues el Lcdo. Trino es seguidor y admirador de la metodología del Lcdo. Enzo.</p>
        <p>En el año académico 2006 – 2007 se renueva el personal directivo, el Lcdo. Trino abandona el colegio para disfrutar del descanso merecido y asume la Dirección la Lcda. Carmen de Peña quien se había desempeñado desde el año 1999 como Subdirectora y en la Subdirección el Lcdo. Fernando Franco quien ejercía como Coordinador Académico de Educación Media General. El Consejo Técnico Directivo es organizado con los siguientes cargos: Gerencias Generales Académica y Administrativa, Director Académico, Subdirección Académica, Coordinación de Preescolar, Coordinaciones de Primaria (I Y II Etapa), Coordinaciones de Bachillerato para cada año, Departamento de Orientación con los servicios: Orientación, Psicología y Formación Humana y Cristiana. </p>
        <p>En el transcurso de los primeros 25 años, el colegio ha egresado varios miles de Bachilleres en Ciencias, Humanidades y Administración Procesamiento de Datos. En la actualidad sólo se imparte el Bachillerato en Ciencias.</p>
        <p>Para el año escolar 2008 – 2009 celebramos las <strong>BODAS DE PLATA DEL COLEGIO</strong>. Muchos eventos, reencuentros, actividades especiales y sobre todo muchos momentos de reflexión para darnos un espacio a la proyección renovada hacia el futuro y colocar al colegio en el sitial que se merece y para el cual fue creado: La Excelencia. La Lcda. Carmen de Peña cierra su ciclo apostólico en el colegio que lo había iniciado con la fundación y deja el paso a los jóvenes que se estrenaron como educadores con el nacimiento del colegio.</p>
        
        <figure className="my-8">
          <img src={year25.url} alt="25 Años - Bodas de Plata" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg" />
          <figcaption className="text-sm text-muted-foreground text-center mt-2">Fuente: Archivo 2008. 25 Años.</figcaption>
        </figure>

        <p>El año escolar 2009 – 2010 con una reestructuración general: Director Académico: Lcdo. Fernando Franco, Subdirector: Lcdo. José M. Ortiz. Se crean las Subdirecciones de Educación Inicial: Lcda. Marvelia Mora y de Primaria: Docente Flor Pérez. Además de las nuevas Subdirecciones, siguen las Coordinaciones de Primera y Segunda Etapa de Básica y las de los diferentes años de Tercera Etapa y Diversificado. A estos cargos se les agregan las dos Tutorías de Primaria y otras dos de Bachillerato. El propósito de estas tutorías es reforzar la disciplina con una atención más directa a los alumnos y el refuerzo pedagógico de los que presentan algún problema de seguimiento académico.</p>
        <p>Para el año escolar 2010 – 2011 se reestructura el Consejo Técnico con la incorporación a la Subdirección de Primaria de la Lcda. Erlyn Sierra, así como las áreas de secretaría, evaluación y la creación de la Coordinación de Tecnología, Informática y Comunicación con el propósito de potenciar las relaciones internas de todos los miembros de la comunidad educativa a través de los recursos informáticos como lo exigen las corrientes pedagógicas y de la comunicación modernas.</p>
        <p>En el año escolar 2014-2015 regresa a nuestra institución la Licenciada Yesenia Ocando quien fuera docente de aula entre los años 2002-2005, retornando con el fin de asumir la Subdirección Administrativa, y ya para el periodo 2015-2016 asume la Dirección del Colegio, igualmente se renueva la Subdirección ahora a cargo del Licenciado Ivanosky Quevedo. De este periodo destaca la incorporación del Modelos de las Naciones Unidas (DBMUN), con el objetivo de expandir ideas, encaminando jóvenes emprendedores que en el futuro defenderán sus ideales y pensamientos. Nuestra institución demuestra sus bases sólidas, al mantenerse con el estándar de calidad a pesar de los momentos duros vividos en los años 2014 y 2017, que llevaron a su personal a diversificar su quehacer pedagógico y así garantizar la educación y formación de sus estudiantes. Cierra su periodo en la dirección la Lcda. Yesenia Ocando quien se retira en busca de nuevas oportunidades fuera del país.</p>
        <p>En el Año Escolar 2018 - 2019 la, asume la dirección el Lcdo. Ivanosky Quevedo acompañado en la Subdirección del Lcdo. Francisco Chacón, se mantiene en la Subdirección de Inicial la Lcda. Marvelia Mora de Duque y se estrena en la Subdirección de Primaria la Lcda. María Alejandra Salas. En el periodo 2019-2020 se inauguró el Centro de Ciencias “Luis Arraiz” Este nuevo equipo tiene la tarea de mantener firme la excelencia y continuidad en la enseñanza de nuestros estudiantes, enfrentando en el 2020 la Pandemia Mundial por el Covid-19, que distanció de las aulas a nuestros estudiantes por casi dos años.</p>

        <figure className="my-8">
          <img src={ciencias} alt="Inauguración del Centro de Ciencias 2019" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg" />
          <figcaption className="text-sm text-muted-foreground text-center mt-2">Fuente: Archivo 2019. Inauguración del Centro de Ciencias.</figcaption>
        </figure>

        <p>Para el Año Escolar 2024-2025, el colegio alcanza sus 40 años al servicio del Táchira. Destaca de este periodo la labor de la Subdirección Académica al impulsar la incorporación de la <strong>Robótica</strong>, a través de una alianza estratégica con KURIOS EDUCATION, transformando la formación académica bajo la metodología STEM con clases más dinámicas y sistemas de armados junto con ejercicios de programación, esta decisión permitió que nuestro colegio comenzara a participar en el Torneo Nacional de Robótica, lo que le ha permitido a nuestros estudiantes compartir experiencias con los de otros colegios alrededor del país. Sumado a esto, tenemos la creación de la sala de audio visuales que permite la ejecución de clases más interactivas. Es necesario destacar que este año nuestro colegio pasó a la historia al concretarse la instalación de los paneles solares, siendo el pionero en este sistema que le permite tener autonomía en la iluminación de las áreas más importantes de las instalaciones. También se modernizan los laboratorios con la incorporación de televisores que apoyan las clases de las prácticas de biología, química y física</p>

        <figure className="my-8">
          <img src={logo40} alt="40 años Forjando el futuro" className="w-full max-w-2xl mx-auto rounded-xl shadow-lg" />
        </figure>

        <p>Actualmente, en el Año Escolar 2025-2026, asume la Dirección del Colegio el Lcdo. Francisco Chacón acompañado en la Subdirección General por la Lcda. María Alejandra Salas y en la Subdirección de Inicial por la Lcda. Marvelia Mora de Duque.  En este periodo se han logrado consolidar los lazos con DAWERE INTERNACIONAL para brindar la doble titulación de los estudiantes de Media General, así como con las universidades de Bucaramanga (Colombia) y ANÁHUAC (México).  En marzo de 2026, nuestro Colegio participa por segunda vez en el Torneo Nacional de Robótica, consolidando así este proyecto. Ya nuestro colegio llega a sus 42 años, marcando la pauta en la educación de jóvenes tachirenses que siempre dejan en alto el nombre de nuestro estado y del país.</p>
      </div>
    </div>
  </div>
);

export default ResenaHistorica;
