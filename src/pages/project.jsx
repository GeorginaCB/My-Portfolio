import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <section className="text-white mt-72 sm:mt-28">
          <div className="text-center mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Projetos Destacados
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-bold mb-2">Projeto 1</h3>
              <p className="text-gray-600 mb-4">Breve descrição do projeto.</p>
              <a href="#" className="text-rose-950 hover:underline">Ver projeto</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-bold mb-2">Projeto 2</h3>
              <p className="text-gray-600 mb-4">Breve descrição do projeto.</p>
              <a href="#" className="text-rose-950 hover:underline">Ver projeto</a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-bold mb-2">Projeto 3</h3>
              <p className="text-gray-600 mb-4">Breve descrição do projeto.</p>
              <a href="#" className="text-rose-950 hover:underline">Ver projeto</a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};
