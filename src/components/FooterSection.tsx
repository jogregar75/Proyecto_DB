import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import LogoCDB from "@/assets/LogoCDB.png"

const FooterSection = () => (
  <footer id="contacto" className="bg-[#0f4b00] text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <GraduationCap className="w-7 h-7 text-accent" /> */}
            <img
            src={LogoCDB}
            alt="Logo del colegio"
            className="w-[35px] object-contain"
            />
            <span className="font-display text-xl font-bold">U.E. Colegio Los Pirineos Don Bosco</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Más de 40 años formando líderes con valores, conocimiento y compromiso social.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Av. Principal de Pirineos, esquina con Avda. 19 de Abril. San Cristóbal, Edo. Táchira</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> (0276) 3534033 – 3534133 – 3567622 – 3579080</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> info@colegiopirineosdonbosco.com.ve</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-lg mb-4">Horarios de atención</h4>
          <h4 className="font-display font-bold text-sm ml-2">Caja - Administración - Evaluación</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70 mb-4">
            <li className="ml-4">Lunes a Viernes de 7:15 am a 1:00 pm y 2:00 pm a 4:00 pm</li>
          </ul>
          <h4 className="font-display font-bold text-sm ml-2">Coordinaciones Académicas</h4>
          <ul className="">
            <li className="ml-4 text-sm"><p className="font-bold" >Inicial:</p><p className="text-sm text-primary-foreground/70 ml-4">Lunes a Viernes de 08:00 am a 12:00 pm</p></li>
            <li className="ml-4 text-sm"><p className="font-bold" >Primaria:</p><p className="text-sm text-primary-foreground/70 ml-4">Lunes a Viernes de 07:40 am a 12:15 pm</p></li>
            <li className="ml-4 text-sm"><p className="font-bold" >E.M.G.:</p><p className="text-sm text-primary-foreground/70 ml-4">Lunes a Viernes de 07:40 am a 12:50 pm</p></li>
          </ul>
        </div>
        
      </div>
      <div className="border-t border-primary-foreground/10 pt-3 text-center text-sm text-primary-foreground/50">
        © 2026 U.E. Colegio Los Pirineos Don Bosco. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default FooterSection;
