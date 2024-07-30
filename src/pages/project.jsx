import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Project = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      <div className="flex-grow">
        <section>
          <h2 className="text-2xl font-bold mb-4">Projetos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Projeto 1</h3>
              <p className="text-gray-600 mb-4">Breve descrição do projeto.</p>
              <a href="#" className="text-rose-950 hover:underline">Ver projeto</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Projeto 2</h3>
              <p className="text-gray-600 mb-4">Breve descrição do projeto.</p>
              <a href="#" className="text-rose-950 hover:underline">Ver projeto</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Projeto 3</h3>
              <p className="text-gray-600 mb-4">Breve descrição do projeto.</p>
              <a href="#" className="text-rose-950 hover:underline">Ver projeto</a>
            </div>
          </div>
          
        </section>
      </div>
      <Footer className="mt-auto" /> 
    </div>
  );
};
