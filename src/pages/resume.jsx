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
          Georgina Manguana é uma profissional multifacetada, combinando uma sólida formação em Agronomia com habilidades emergentes como Junior Fullstack. Com sua paixão pela agronomia e desenvolvimento de software, ela se destaca na aplicação de conhecimentos agrícolas avançados e na criação de soluções inovadoras para desafios contemporâneos.
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
          <h3>Agronomia:</h3>
            <li>Gestão de culturas para otimização da produção agrícola.</li>
            <li>Manejo sustentável de recursos naturais e práticas de conservação.</li>
            <li>Conhecimento avançado em fitotecnia, zootecnia e ciências agrárias.</li>
            <li>Diagnóstico preciso e controle integrado de pragas e doenças.</li>
            <li>Utilização de tecnologias agrícolas modernas, como GIS e agricultura de precisão.</li>
          <h3>Desenvolvimento Fullstack:</h3>
            <li>Domínio de HTML, CSS e JavaScript para desenvolvimento frontend.</li>
            <li>Experiência com frameworks como React.js e Vue.js para criação de interfaces dinâmicas.</li>
            <li>Conhecimento em Node.js e Express.js para desenvolvimento backend.</li>
            <li>Integração e gestão de bancos de dados como MongoDB, MySQL, ou PostgreSQL.</li>
            <li>Uso de Git e GitHub para controle de versão e colaboração em equipe.</li>
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

