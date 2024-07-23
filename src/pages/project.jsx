import React, { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Project = () => {

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex-grow">
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-700 mb-8">Descubra como podemos ajudar você a alcançar seus objetivos.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-pink-600 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Serviço 1</h3>
              <p className="text-gray-700">Desenvolvimento Front-end.</p>
              <a href="/servico-1" className="text-white hover:underline">Saiba Mais &rarr;</a>
            </div>
            <div className="bg-pink-600 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Serviço 2</h3>
              <p className="text-gray-700">Desenvolvimento Back-end.</p>
              <a href="/servico-2" className="text-white hover:underline">Saiba Mais &rarr;</a>
            </div>
            <div className="bg-pink-600 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Serviço 3</h3>
              <p className="text-gray-700">Agronomia</p>
              <a href="/servico-2" className="text-white hover:underline">Saiba Mais &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      </div>

      <Footer className="mt-auto" /> 
    </div>
  );
};

 
