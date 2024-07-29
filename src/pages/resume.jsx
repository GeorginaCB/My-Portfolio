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
          Georgina Manguana é uma profissional versátil, combinando uma sólida formação em Agronomia com habilidades emergentes como Junior Fullstack. Com sua paixão pela agronomia e desenvolvimento de software, ela se destaca na aplicação de conhecimentos agrícolas avançados e na criação de soluções inovadoras para desafios contemporâneos.
          </p>
        </section>
      <div className="flex-grow bg-gray-100 p-6">
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
          <h2 className="text-2xl font-bold mb-2 text-center sm:text-left">Habilidades Técnicas</h2>
            <ul className="list-disc pl-4">
            <li>Design</li>
            <li>Frontend: HTML5, CSS3, JavaScrip, React.js;</li>
            <li>Backend: Node.js (Express), MongoDB;</li>
            <li>Ferramentas e Plataformas: Git, GitHub;</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-center sm:text-left"> Projetos Pessoais</h2>
            <ul className="list-disc pl-4">
              <li>Blog Pessoal (React.js): Desenvolvimento de um blog pessoal utilizando React.js, com funcionalidades de login, posts dinâmicos e interação com APIs externas.</li>
              <li>*</li>
              <li>*</li>
              <li>*</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-center sm:text-left">Soft Skills </h2>
            <ul className="list-disc pl-4">
              <li>Resolução de Problemas</li>
              <li>Trabalho em Equipe</li>
              <li>Habilidades interpessoais.</li>
              <li>Autonomia</li>
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
      <Footer />
    </div>
  );
};

