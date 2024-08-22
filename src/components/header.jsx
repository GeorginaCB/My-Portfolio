import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { List } from "@phosphor-icons/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-rose-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-bold px-4 hover:text-rose-100 transition-colors">
            Portfólio
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" label="Sobre-mim" />
          <NavLink to="/contact" label="Contacto" />
          <NavLink to="/project" label="Projetos" />
          <NavLink to="/resume" label="Resumo" />
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none hover:text-rose-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <List size={32} />
          </button>
        </div>
      </div>
      <motion.div
        className={`md:hidden bg-rose-700 text-white py-4 px-6 ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-2">
          <NavLink to="/" label="Sobre-mim" onClick={toggleMenu} />
          <NavLink to="/contact" label="Contacto" onClick={toggleMenu} />
          <NavLink to="/project" label="Projetos" onClick={toggleMenu} />
          <NavLink to="/resume" label="Resumo" onClick={toggleMenu} />
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ to, label, onClick }) => (
  <Link
    to={to}
    className="text-lg md:text-base block py-2 px-4 hover:text-rose-100 transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);
