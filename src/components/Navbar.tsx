import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LogoCDB from "@/assets/LogoCDB.png";

const INSTAGRAM_URL = "https://www.instagram.com/colegio.donbosco/?hl=es-la";
const ARCADAT_URL = "https://uedonbosco.com/#about";

const navLinks = [
  { label: "Inicio", href: "/" },
  {
    label: "Nosotros",
    submenu: [
      { label: "Institución", href: "/nosotros" },
      { label: "Organigrama", href: "/nosotros/organigrama" },
      { label: "Autoridades", href: "/nosotros/autoridades" },
      { label: "Nuestra Historia", href: "/nosotros/resena" },
      { label: "Fundadores", href: "/nosotros/fundadores" },
      { label: "Promociones", href: "/actividades/promos" },
      { label: "Himno y Símbolos", href: "/nosotros/himno" },
      { label: "Nuestro Patrono", href: "/nosotros/patrono" },
    ],
  },
  // { label: "Niveles", href: "/niveles" },
  { label: "Niveles", href: "/niveles"
      // submenu: [
      //   { label: "Vista general", href: "/niveles" },
      //   { label: "Inicial", href: "/niveles/inicial" },
      //   { label: "Primaria — Primera Etapa", href: "/niveles/primaria/primera-etapa" },
      //   { label: "Primaria — Segunda Etapa", href: "/niveles/primaria/segunda-etapa" },
      //   { label: "Bachillerato 1er Año", href: "/niveles/secundaria/1" },
      //   { label: "Bachillerato 2do Año", href: "/niveles/secundaria/2" },
      //   { label: "Bachillerato 3er Año", href: "/niveles/secundaria/3" },
      //   { label: "Bachillerato 4to Año", href: "/niveles/secundaria/4" },
      //   { label: "Bachillerato 5to Año", href: "/niveles/secundaria/5" },
      // ],
  },
  { label: "Actividades", 
    submenu: [
    { label: "Inicial", href: "/actividades/inicial" },
    { label: "Primaria", href: "/actividades/primaria" },
    ],
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Comunicados", href: "/comunicados" },
  { label: "Contacto", href: "/contacto", disabled: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f4b00] backdrop-blur-md border-b border-white/10">
      
      <div className="container mx-auto flex items-center justify-between h-24 px-4">

        {/* LOGO + TITULO */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white"
        >
          <img
            src={LogoCDB}
            alt="Logo del colegio"
            className="w-[55px] object-contain"
          />

          <span className="font-display font-bold tracking-tight leading-tight text-center">
            <span className="block text-lg">
              U. E. Colegio Los Pirineos Don Bosco
            </span>
            <span className="block text-sm">
              Amistad - Estudio - Alegría
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        {/* <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-white/80 hover:text-accent transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}

        {/* <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.disabled ? (
                <span className="text-white/40 cursor-not-allowed text-sm font-medium tracking-wide uppercase">
                  {link.label}
                </span>
              ) : (
                <Link
                  to={link.href}
                  className="text-white/80 hover:text-accent transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul> */}
      
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {/* SUBMENU */}
              {link.submenu ? (
                <>
                  <span className="cursor-pointer text-white/80 hover:text-accent transition-colors text-sm font-medium uppercase">
                    {link.label}
                  </span>

                  <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          to={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : link.disabled ? (
                // 🔒 CONTACTO DESACTIVADO
                <span className="text-white/40 cursor-not-allowed text-sm font-medium uppercase">
                  {link.label}
                </span>
              ) : (
                <Link
                  to={link.href}
                  className="text-white/80 hover:text-accent transition-colors text-sm font-medium uppercase"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="w-full">
            <div className="flex justify-center gap-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
                aria-label="Instagram" title="Instagram"
              >
                {/* <Instagram className="w-6 h-6" /> */}
                <FaInstagram className="w-8 h-8" />
              </a>

              <a
                href={ARCADAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
                aria-label="Arcadat" title="Arcadat"
              >
                <GraduationCap className="w-8 h-8" />
              </a>
            </div>
          </li>
        </ul>
        
        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0f4b00] overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-4 gap-2 items-center">
              {navLinks.map((link) => (
                <li key={link.label} className="text-center">
                  {link.submenu ? (
                    <>
                      <span className="block py-2 text-white font-medium uppercase">
                        {link.label}
                      </span>

                      <ul className="space-y-1">
                        {link.submenu.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-sm text-white/70 hover:text-accent"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : link.disabled ? (
                    <span className="block py-2 text-white/40 cursor-not-allowed text-sm uppercase">
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-white/80 hover:text-accent text-sm uppercase"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="w-full">
            <div className="flex justify-center gap-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
                aria-label="Instagram" title="Instagram"
              >
                {/* <Instagram className="w-6 h-6" /> */}
                <FaInstagram className="w-6 h-6" />

              </a>

              <a
                href={ARCADAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-accent transition-colors"
                aria-label="Arcadat" title="Arcadat"
              >
                <GraduationCap className="w-6 h-6" />
              </a>
            </div>
          </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;