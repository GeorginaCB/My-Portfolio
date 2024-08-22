import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-rose-700 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="w-full text-center md:text-left">
          <h3 className="text-lg font-bold">Meu Portfólio</h3>
          <p className="mt-2">GDC © {new Date().getFullYear()} Todos os direitos reservados</p>
          <p><a href="/terms" className="hover:underline">Termos de uso</a></p>
          <p><a href="/privacy" className="hover:underline">Política de privacidade</a></p>
        </div>
        <div className="w-full text-center md:text-left">
          <h3 className="text-lg font-bold">Encontre-nos aqui</h3>
          <p className="mt-2">Endereço: 1 de Maio, Cidade-Matola</p>
          <p>Telefone: (+258) 842945038 / 865565859</p>
          <p><a href="mailto:georginadavidcumbe@gmail.com" className="hover:underline">georginadavidcumbe@gmail.com</a></p>
        </div>
        <div className="w-full text-center">
          <h3 className="text-lg font-bold">Redes Sociais</h3>
          <div className="flex justify-center mt-4 gap-4">
            <motion.a
              href="https://www.facebook.com/georginadavid.cumbe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-rose-950 hover:text-rose-100 transition-colors"
            >
              <FacebookLogo className="mr-2" size={22} />
              Facebook
            </motion.a>
            <motion.a
              href="https://www.instagram.com/georgina_cumbe?igsh=ZDRsOTlnZ3R3Z3I5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-rose-950 hover:text-rose-100 transition-colors"
            >
              <InstagramLogo className="mr-2" size={22} />
              Instagram
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/georginadavidcumbe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-rose-950 hover:text-rose-100 transition-colors"
            >
              <LinkedinLogo className="mr-2" size={22} />
              Linkedin
            </motion.a>
            <motion.a
              href="https://github.com/GeorginaCB/Georgina-Cumbe.git"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-rose-950 hover:text-rose-100 transition-colors"
            >
              <GithubLogo className="mr-2" size={22} />
              Github
            </motion.a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
