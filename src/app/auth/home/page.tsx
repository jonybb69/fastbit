"use client";  

import Image from "next/image";   
import { useState } from "react";   

export default function Home() {   
  return (   
    <div className="bg-yellow-300 min-h-screen">   
      {/* Cabecera */}   
      <header className="flex items-center justify-between p-4 bg-yellow-40 0">   
        <div className="flex items-center">   
          <Image src="/logo.png" alt="Logo" width={400} height={400} />  
          <span className="text-2xl font-bold text-orange-600">🍴</span>   
        </div>   
        <h1 className="text-xl font-bold text-orange-600">HOME</h1>   
      </header>   

      {/* Promociones */}   
      <section className="p-4">   
        <h2 className="text-2xl text-center font-bold text-red-600 mb-4">Promociones del día de hoy</h2>   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
          {/* Promo 1 */}   
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">   
            <Image   
              src="/promocion1.jpg"   
              alt="Promoción McPollo"   
              width={400}   
              height={300}   
              className="w-full h-40 object-cover"   
            />   
            <div className="p-4">   
              <h3 className="text-lg font-semibold">ELIGE TU FAV POR \$99</h3>   
              <p>Incluye McPollo o McTocino con acompañado de bebida y papas.</p>   
            </div>   
          </div>   
          {/* Promo 2 */}   
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">   
            <Image   
              src="/promocion2.jpg"   
              alt="Promoción Hut Sale"   
              width={400}   
              height={300}   
              className="w-full h-40 object-cover"   
            />   
            <div className="p-4">   
              <h3 className="text-lg font-semibold">HUT SALE</h3>   
              <p>Pizza Grande + 2 bebidas = Solo \$389</p>   
            </div>   
          </div>   
        </div>   
      </section>   

      {/* Menú de navegación inferior */}   
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">   
        <div className="flex justify-around py-2">   
          <a href="#" className="text-center">   
            <h2 className="text-red-600">Home</h2>   
          </a>   
          <a href="#" className="text-center">   
            <h2>Buscar</h2>   
          </a>   
          <a href="#" className="text-center">   
            <h2>Comentarios</h2>   
          </a>   
          <a href="#" className="text-center">   
            <h2>Perfil</h2>   
          </a>   
        </div>   
      </nav>   
    </div>   
  );   
}