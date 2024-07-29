import React, { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo  } from "@phosphor-icons/react";
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
     setFormData({
       name: "",
      email: "",
       subject: "",
      message: "",
     });
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
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex sm:flex-row mx-auto max-w-7xl flex-grow">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 mt-12 mb-8 sm:mb-0 sm:ml-4">
            <h1 className= "text-3xl font-bold text-pink-700 mb-4 text-center sm:text-left">Redes Sociais</h1>
              <div className="flex items-center mb-4">
                <FacebookLogo className="mr-2" size={22} />
                <a href="https://www.facebook.com/georginadavid.cumbe" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
                  Facebook
                </a>
              </div>
              <div className="flex items-center mb-2">
                <InstagramLogo className="mr-2" size={22} />
                <a href="https://www.instagram.com/georgina_cumbe?igsh=ZDRsOTlnZ3R3Z3I5" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
                  Instagram
                </a>
              </div>
              <div className="flex items-center mb-2">
                <LinkedinLogo className="mr-2" size={22} />
                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOc9NfZEpQC6VI7Zojas4Mw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
                  Linkedin
                </a>
              </div>
              <div className="flex items-center mb-2">
                <GithubLogo className="mr-2" size={22} />
                <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
                  Github
                </a>
          </div>
        </div>
        <div className="flex-grow sm:w-2/3 sm:flex-row mx-auto max-w-7xl ">
          <div className="bg-white shadow-md rounded-lg px-8 py-6 mt-12 mb-8 sm:mb-0 sm:ml-4">
            <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center sm:text-left">Entre em Contato</h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-lg font-bold mb-2 text-center">Preencha os campos abaixo:</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-pink-700">
                  Nome
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-pink-700">
                  Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-pink-700">
                  Assunto
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-700 sm:text-sm"
                  />
                </label>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-pink-700">
                  Mensagem
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  ></textarea>
                </label>
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
        </div>
      </div>
  
      {/* Div de informações do usuário abaixo, centralizada */}
      {submitted && (
        <div className="flex items-center justify-center mt-4">
          <div className="max-w-lg w-full sm:w-1/2 bg-rose-500 shadow-md rounded-lg px-8 py-6 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white hover:text-white focus:outline-none"
              aria-label="Fechar"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-lg font-bold mb-2 text-white">
              Informações do Usuário:
            </h2>
            <p className="text-white">
              <strong>Nome:</strong> {formData.name}
            </p>
            <p className="text-white">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="text-white">
              <strong>Assunto:</strong> {formData.subject}
            </p>
            <p className="text-white">
              <strong>Mensagem:</strong> {formData.message}
            </p>
          </div>
        </div>
      )}
  
      <div className="mt-auto">
        <Footer className="mt-12" />
      </div>
    </div>
  );
};