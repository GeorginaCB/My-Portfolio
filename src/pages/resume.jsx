import React, { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Resume = () => {
  

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex-grow">

      <div>            
                   <h2>FORMAÇÃO</h2>
                   <ul>
                    <li>Mar 2019 Nov. 2023</li>
                    <li>Universidade Eduardo Mondlane</li>
                    <li>Licenciatura Em Agricultura Comercial</li>
                    <li>Gaza Chibuto</li>
                
                    <li>Abr-Jun 2024</li>
                    <li>Byttes4Future Programa POWER UP</li>
                    <li>Front-end HTML, CSS, JavaScript</li>
                    <li>Soft Skills</li>
                
                    <li>Jun-Agost 2015</li>
                    <li>Microsoft corporation</li>
                    <li>Informática Básica</li>
                    <li>Matola</li>
                </ul>
            </div>
            <div >
                <h2>HABILIDADES-PROFICIONAIS</h2>
                <ul>
                    <li>Habilidade de adaptabilidade</li>
                    <li>Capacidade de trabalhar em equipe</li>
                    <li>Bom Pontual e Assíduo</li>
                    <li>Adaptabilidade a Novos Ambientes</li>    
                </ul>
            </div>
            <div >
                <h2>IDIOMAS</h2>
                <ul>
                    <li>Português Fluente </li>
                    <li>Changana Fluente </li>
                    <li>Inglês Basico</li>
                </ul>            
            </div>
            <div >
                <h2>HABILIDADES-PROFICIONAIS</h2>
                <ul>
                    <li>Adaptabilidade</li>
                    <li>Capacidade de trabalhar em equipe</li>
                    <li>Bom Pontual e Assíduo</li>
                    <li>Adaptabilidade a Novos Ambientes</li>    
                </ul>
            </div>


        </div>

      <Footer className="mt-auto" /> 
    </div>
  );
};

 
