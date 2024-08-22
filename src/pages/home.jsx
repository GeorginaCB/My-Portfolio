import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { motion } from "framer-motion";
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-8 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/geoo.jpg" // Certifique-se de que o caminho da imagem está correto
              alt="Imagem da Página Inicial"
              className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="bg-white py-8 px-6 md:px-10 rounded-lg shadow-lg w-full md:w-1/2">
            <div className="container mx-auto flex flex-col items-center md:items-start">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 text-center md:text-left"
              >
                PRAZER, SOU GEORGINA MANGUANA
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-600 text-center md:text-left"
              >
                AGRÔNOMA <span className="font-bold">E JUNIOR FULLSTACK</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base md:text-lg text-gray-700 text-justify mb-4"
              >
                Olá! Sou Georgina David, uma profissional multifacetada com paixão tanto pela agronomia quanto pelo desenvolvimento frontend. Com uma sólida formação em Engenharia Agronômica e habilidades avançadas em design e desenvolvimento web, meu compromisso com a excelência se reflete na qualidade dos meus serviços, seja na consultoria agronômica ou no desenvolvimento frontend, garantindo a satisfação dos meus clientes e parceiros.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-base md:text-lg text-gray-700 text-justify mb-6"
              >
                Minha missão é promover a sustentabilidade e a inovação, tanto no campo da agronomia quanto no mundo digital. Acredito que a combinação de conhecimentos em agronomia e desenvolvimento frontend pode resultar em soluções inovadoras que beneficiam tanto a agricultura quanto a tecnologia.
              </motion.p>
              <div className="flex flex-col md:flex-row gap-4">
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  href="https://www.facebook.com/georginadavid.cumbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <FacebookLogo className="mr-2" size={22} />
                  Facebook
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  href="https://www.instagram.com/georgina_cumbe?igsh=ZDRsOTlnZ3R3Z3I5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <InstagramLogo className="mr-2" size={22} />
                  Instagram
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOc9NfZEpQC6VI7Zojas4Mw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <LinkedinLogo className="mr-2" size={22} />
                  LinkedIn
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                  href="https://github.com/GeorginaCB/Georgina-Cumbe.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
                >
                  <GithubLogo className="mr-2" size={22} />
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer className="bg-gray-200 py-4 text-center md:text-left" />
    </div>
  );
};
