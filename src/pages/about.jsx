import React, { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const about = () => {

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex-grow">
      <h1 class="title">SOBRE-MIM</h1>
        <div>
        <h1>PRAZER SOU GEORGINA MANGUANA</h1>
        <h1>AGRÔNOMA<span> E DESENVOLVRDORA DE FRONTEND</span></h1>
            <p>Olá! Sou Georgina David, uma profissional multifacetado com paixão tanto pela agronomia quanto pelo desenvolvimento frontend. Com uma sólida formação em Engenharia Agronômica e habilidades avançadas em design e desenvolvimento web, Meu compromisso com a excelência se reflete na qualidade dos meus serviços, seja na consultoria agronômica ou no desenvolvimento frontend, garantindo a satisfação dos meus clientes e parceiros.</p>
          <P>Minha missão é promover a sustentabilidade e a inovação, tanto no campo da agronomia quanto no mundo digital. Acredito que a combinação de conhecimentos em agronomia e desenvolvimento frontend pode resultar em soluções inovadoras que beneficiam tanto a agricultura quanto a tecnologia.</P>
        </div>
        <div className="w-full">
      <div className="text-center">
        <h3 className="text-lg font-bold">Redes Sociais</h3>
        
        <ul className="list-none px-32 py-2 ">
          <li className="flex items-center mt-2">
            <FacebookLogo className="mr-2" size={22} />
            <a href="https://www.facebook.com/georginadavid.cumbe" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
              Facebook
            </a>
          </li>
          <li className="flex items-center mt-2">
            <InstagramLogo className="mr-2" size={22} />
            <a href="https://www.instagram.com/georgina_cumbe?igsh=ZDRsOTlnZ3R3Z3I5" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
              Instagram
            </a>
          </li>
          <li className="flex items-center mt-2">
            <LinkedinLogo className="mr-2" size={22} />
            <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOc9NfZEpQC6VI7Zojas4Mw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
              Linkedin
            </a>
          </li>
          <li className="flex items-center mt-2">
            <GithubLogo className="mr-2" size={22} />
            <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
            Github
            </a>
          </li>
        </ul>
      </div>
    </div>
      </div>
      <Footer className="mt-auto" /> 
    </div>
  );
};

 
