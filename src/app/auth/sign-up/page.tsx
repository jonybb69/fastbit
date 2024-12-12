"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }
    console.log("Registro con:", { email, password });
    router.push("/dashboard"); // Redirigir al dashboard o página principal
  };

  return (
    <div>
      {/* Navbar */}
      <header className="bg-[#FFC72C] border rounded-lg shadow flex justify-center items-center h-500">
        <div className="flex flex-col items-center">
          <nav className="container mx-auto p-2 flex justify-between items-center">
            <Image src="/logo.png" alt="FastBit Logo" width={400} height={400} />
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-[#FFECC7] border rounded-lg text-center p-3">
        <h1 className="text-5xl font-bold text-[#E74C3C]">Bienvenido a FastBit</h1>
      </section>

      {/* Registration Form */}
      <section className="bg-white text-center py-6">
        <h2 className="text-3xl font-bold text-[#E74C3C] mb-8">Regístrate</h2>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* Email Input */}
          <div className="mb-5 text-left">
            <label htmlFor="password" className="text-[#E74C3C] p-1 font-medium block">
              correo electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplodecorreo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-5 text-left">
            <label htmlFor="password" className="text-[#E74C3C] p-1 font-medium block">
              contraseña
            </label>
            <input
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6 text-left">
            <label htmlFor="password" className="text-[#E74C3C] p-1 font-medium block">
              repetir contraseña
            </label>
            <input
              type="password"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          {/* Social Login Options */}
          <div className="flex justify-center space-x-20 mt-10">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-30 h-30 flex justify-center items-center bg-white border border-gray-300 rounded-full"
            >
              <Image src="/google-logo.png" alt="Google" width={100} height={100} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-30 h-30 flex justify-center items-center bg-white border border-gray-300 rounded-full"
            >
              <Image src="/facebook-logo.png" alt="Facebook" width={100} height={100} />
            </a>
            <a
              href="https://www.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-30 h-30 flex justify-center items-center bg-white border border-gray-300 rounded-full"
            >
              <Image src="/apple-logo.png" alt="Apple" width={100} height={100} />
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-[#E74C3C] text-white hover:bg-[#C0392B] mt-10"
          >
            Crear Cuenta
          </button>
        </form>
      </section>

      {/* Separator */}
      <Separator className="my-10" />

      {/* Footer */}
      <footer className="bg-[#FFCC33] text-[#E74C3C] py-4 text-center">
        <p>© 2024 FastBit. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
