"use client";  

import { useRouter } from "next/navigation";  
import { useState } from "react";  
import Image from "next/image";  

export default function ForgotPassword() {  
  const [email, setEmail] = useState("");  
  const router = useRouter();  

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    console.log("Correo enviado a:", email);  
    alert("Se ha enviado un código de recuperación a tu correo.");  
    // Aquí redirigimos a la vista de recuperacion de contraseña  
    router.push("/auth/recover-password");  
  };  

  return (  
    <div>  
      {/* Navbar */}  
      <header className="bg-[#FFC72C] border rounded-lg shadow flex justify-center items-center h-500">  
        <div className="flex flex-col items-center">  
          <nav className="container mx-auto flex justify-between items-center">  
            <Image src="/logo.png" alt="FastBit Logo" width={400} height={400} />  
          </nav>  
        </div>  
      </header>  

      <div className="flex flex-col items-center justify-center max-h-screen py-3 bg-white">  
        <div className="p-5 bg-[#FFECC7] shadow-lg rounded-lg">  
          <div className="text-center">  
            <h1 className="text-5xl font-bold text-[#E74C3C] mb-8">  
              ¿Olvidaste tu Contraseña?  
            </h1>  
            <h2 className="text-black font-medium p-3">  
              Es normal olvidar estas cosas, así que no te preocupes.  
            </h2>  
            <h3 className="text-black font-medium p-3">  
              Solamente introduce tu correo y pon el código que se te pide.  
            </h3>  
          </div>  

          <form onSubmit={handleSubmit} className="mt-8 text-left">  
            <label htmlFor="email" className="text-[#E74C3C] p-1 font-medium block">  
              correo electrónico  
            </label>  
            <input  
              type="email"  
              id="email"  
              placeholder="ejemplodecorreo@gmail.com"  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              className="w-full p-2 border border-black rounded focus:outline-none focus:border-[#E74C3C]"  
              required  
            />  

            {/* Botón Siguiente */}  
            <div className="flex justify-end mt-4">  
              <button  
                type="submit"  
                className="p-6 bg-[#E74C3C] text-white py-1 rounded hover:bg-[#C0392B]"  
              >  
                Siguiente  
              </button>  
            </div>  
          </form>  
        </div>  
      </div>  
    </div>  
  );  
}