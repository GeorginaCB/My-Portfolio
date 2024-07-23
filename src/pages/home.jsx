
import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
export const Home = () => {
  return (
    <>
      <Header />
      <section className="py-6 px-2 mb-1">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold sm:text-5xl">PRAZER SOU GEORGINA MANGUANA</h1>
          <h1 className="text-xl font-bold sm:text-5xl">AGRÔNOMA<span> E JUNIOR FULLSTACK</span></h1>
          <p className="text-lg text-justify">Olá! Sou Georgina David, uma profissional multifacetado com paixão tanto pela agronomia quanto pelo desenvolvimento frontend. Com uma sólida formação em Engenharia Agronômica e habilidades avançadas em design e desenvolvimento web, Meu compromisso com a excelência se reflete na qualidade dos meus serviços, seja na consultoria agronômica ou no desenvolvimento frontend, garantindo a satisfação dos meus clientes e parceiros.</p>
          <p className="text-lg text-justify">Minha missão é promover a sustentabilidade e a inovação, tanto no campo da agronomia quanto no mundo digital. Acredito que a combinação de conhecimentos em agronomia e desenvolvimento frontend pode resultar em soluções inovadoras que beneficiam tanto a agricultura quanto a tecnologia.</p>
        </div>
      </section>
      <section className="mb-1">
        <div className="container mx-auto mb-12">
          <div className="my-8 mx-auto max-w-full">
            <img src="/image-home.jpg" alt="Imagem da Página Inicial" className="rounded-lg shadow-md w-full" />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};


