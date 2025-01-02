import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";




export const Add = () => {

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


 


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.BACKEND_URL + 'api/elements', {
        method: 'POST',
       
        headers: {
          
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        alert('Elemento añadido con éxito');
        //console.log(data);
      } else {
        alert('Error al añadir el elemento');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar los datos');
    }
  };


  return (
    <div className="text-2xl max-w-lg mx-auto mt-10 p-8 bg-slate-400 shadow-xl rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Precio:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Categoría:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value=""disabled>Selecciona una categoría</option>
            <option value="fauna">Fauna</option>
            <option value="paisajes">Paisajes</option>
            <option value="vida_urbana">Vida Urbana</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Imagen:</label>
          <input     
           type="text"     
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
        >
          Añadir Elemento
        </button>
      </form>
    </div>

  );
};
