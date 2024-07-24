import React, { useState } from "react";
import { GraduationCap, Globe} from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Resume = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <section className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Resumo do Portfólio</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sou um profissional apaixonado por tecnologia, com experiência em desenvolvimento web e móvel. Minhas habilidades incluem HTML, CSS, JavaScript, React, Node.js e React Native. Busco sempre aprender novas tecnologias e aplicar meus conhecimentos para criar soluções eficientes e inovadoras.
          </p>
        </section>
      <div className="flex-grow bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-center sm:text-left"> Formação</h2>
            <ul className="list-disc pl-4">
              <li>Licenciatura em Agricultura Comercial <GraduationCap size={22} /></li>
              <li>Universidade Eduardo Mondlane</li>
              <li>Mar 2019 - Nov 2023</li>
              <li>Gaza Chibuto</li>
            </ul>
          </div>
          <div className="mb-8">
            <ul className="list-disc pl-4">
            <li>Junior Fullstack <GraduationCap size={22}/></li>
              <li>Byttes4Future Programa BOOTCAMP</li>
              <li>Abr-Jun 2024</li>
              <li>Maputo</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-center sm:text-left">Habilidades Profissionais</h2>
            <ul className="list-disc pl-4">
              <li>Design</li>
              <li>Frontend</li>
              <li>Backend</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center sm:text-left">Idiomas <Globe size={32} /></h2>
            <ul className="list-disc pl-4">
              <li>Português Fluente</li>
              <li>Changana Fluente</li>
              <li>Inglês Básico</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

