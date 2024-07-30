import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-6 px-2 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 relative overflow-hidden">
            <img
              src="/path-to-image.jpg" // Certifique-se de que o caminho da imagem está correto
              alt="Imagem da Página Inicial"
              className="rounded-lg shadow-md w-full h-auto transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="bg-gray-100 py-10 w-full md:w-1/2">
            <div className="container mx-auto px-4 flex flex-col items-center md:items-start">
              <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                  PRAZER, SOU GEORGINA MANGUANA
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                  AGRÔNOMA<span> E JUNIOR FULLSTACK</span>
                </h2>
                <p className="text-lg text-justify my-4">
                  Olá! Sou Georgina David, uma profissional multifacetada com paixão tanto pela agronomia quanto pelo desenvolvimento frontend. Com uma sólida formação em Engenharia Agronômica e habilidades avançadas em design e desenvolvimento web, meu compromisso com a excelência se reflete na qualidade dos meus serviços, seja na consultoria agronômica ou no desenvolvimento frontend, garantindo a satisfação dos meus clientes e parceiros.
                </p>
                <p className="text-lg text-justify mb-4">
                  Minha missão é promover a sustentabilidade e a inovação, tanto no campo da agronomia quanto no mundo digital. Acredito que a combinação de conhecimentos em agronomia e desenvolvimento frontend pode resultar em soluções inovadoras que beneficiam tanto a agricultura quanto a tecnologia.
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center">
                  <FacebookLogo className="mr-2" size={22} />
                  <a href="https://www.facebook.com/georginadavid.cumbe" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">Facebook</a>
                </div>
                <div className="flex items-center">
                  <InstagramLogo className="mr-2" size={22} />
                  <a href="https://www.instagram.com/georgina_cumbe?igsh=ZDRsOTlnZ3R3Z3I5" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">Instagram</a>
                </div>
                <div className="flex items-center">
                  <LinkedinLogo className="mr-2" size={22} />
                  <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOc9NfZEpQC6VI7Zojas4Mw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">LinkedIn</a>
                </div>
                <div className="flex items-center">
                  <GithubLogo className="mr-2" size={22} />
                  <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer className="bg-gray-200 py-4 text-center md:text-left" />
    </div>
  );
};
