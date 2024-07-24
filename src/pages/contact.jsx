import React, { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-grow flex flex-col sm:flex-row justify-center items-center">
        <div className="max-w-lg w-full sm:w-1/2 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mt-36 mb-24 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center sm:text-left">Contacte-me agora</h1>
            
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-lg font-bold mb-2 text-center">Entre em contato:</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-pink-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>

        {submitted && (
          <div className="max-w-lg w-full sm:w-1/2 bg-rose-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:px-6 lg:px-8 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white hover:text-white focus:outline-none"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-lg font-bold mb-2 text-white">
              Informações do Usuário:
            </h2>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
