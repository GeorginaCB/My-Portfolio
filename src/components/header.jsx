import { List } from "@phosphor-icons/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-rose-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" border-2 border-gray-300 rounded-lg px-2 flex items-center ml-3">
          <p className="text-lg px-4 hover:text-rose-950">Geor</p>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/" className="mr-4 hover:text-rose-950">
            <span className="text-lg">Sobre-min</span>
          </Link>
          <Link to="/contact" className="mr-4 hover:text-rose-950">
            <span className="text-lg">Contacto</span>
          </Link>
          <Link to="/projetos" className="mr-4 hover:text-rose-950">
            <span className="text-lg">Projetos</span>
          </Link>
          <Link to="/resumo" className="mr-4 hover:text-rose-950">
            <span className="text-lg">Resumo</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none  hover:text-rose-950" onClick={toggleMenu}>
          <List size={32} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-rose-700 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Sobre-min
            </Link>
            <Link
              to="/project"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Link
              to="/contact"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Projetos
            </Link>
            <Link
              to="/resume"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Resumo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
