import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { PhoneIncoming,MapPin,Envelope } from '@phosphor-icons/react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleClose = () => {
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col sm:flex-row mx-auto max-w-7xl flex-grow p-4 space-y-8 sm:space-y-0 sm:space-x-8">
        <motion.div
          className="bg-white shadow-md rounded-lg px-12 py-6 sm:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg w-full">
            <h3 className="text-2xl font-bold text-pink-700 mb-4">Encontre-nos aqui</h3>
            <div className="mb-4">
  <h2 className="text-xl font-semibold text-pink-600 mb-2">Localização:</h2>
  <div className="flex items-center space-x-2">
    <MapPin size={32} className="text-gray-700" />
    <p className="text-gray-700">1 de Maio, Cidade-Matola</p>
  </div>
</div>

<div className="mb-4">
  <h2 className="text-xl font-semibold text-pink-600 mb-2">Contactos:</h2>
  <div className="flex items-center space-x-2 mb-2">
    <PhoneIncoming size={32} className="text-gray-700" />
    <p className="text-gray-700">(+258) 842945038</p>
  </div>
  <div className="flex items-center space-x-2">
    <PhoneIncoming size={32} className="text-gray-700" />
    <p className="text-gray-700">(+258) 865565859</p>
  </div>
</div>

<div>
  <h2 className="text-xl font-semibold text-pink-600 mb-2">Email:</h2>
  <a
    href="mailto:georginadavidcumbe@gmail.com"
    className="text-gray-700 hover:underline flex items-center space-x-2"
    aria-label="Send an email to georginadavidcumbe@gmail.com"
  >
    <Envelope size={32} className="text-gray-700" />
    <span>georginadavidcumbe@gmail.com</span>
  </a>
</div>

</div>
        </motion.div>

        <motion.div
          className="bg-white shadow-md rounded-lg px-12 py-6 sm:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center sm:text-left">Entre em Contato</h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
  <div className="mb-4">
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      placeholder="Nome"
      className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
    />
  </div>
  <div className="mb-4">
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      placeholder="Email"
      className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      placeholder="Assunto"
      className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
    />
  </div>
  <div className="mb-4">
    <textarea
      id="message"
      name="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      required
      placeholder="Mensagem"
      className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
    ></textarea>
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

        </motion.div>
      </div>

      <Footer />
    </div>
  );
};
