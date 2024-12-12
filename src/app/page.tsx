"use client";

import button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inicio de sesión con:", { email, password });
    router.push("/dashboard");
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

      {/* Login Form */}
      <section className="bg-white text-center py-6">
        <h2 className="text-3xl font-bold text-[#E74C3C] mb-8">Inicia Sesión</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* Email Section */}
          <div className="mb-5 text-left">
            <label htmlFor="email" className="text-[#E74C3C] p-1 font-medium block">
              correo electrónico 
            </label>
            <input
              id="email"
              type="email"
              placeholder="ejemplodecorreo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          {/* Password Section */}
          <div className="mb-6 text-left">
            <label htmlFor="password" className="text-[#E74C3C] p-1 font-medium block">
              contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border mb-2 border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-[#E74C3C] text-white hover:bg-[#C0392B]"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-8 p-8">
          <a
            href="#"
            onClick={() => router.push("auth/forgot-password")}
            className="text-[#E74C3C] hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </a>

          <p className="text-black mt-4 p-2">
            ¿No tienes una cuenta?{" "}
            <a href="auth/sign-up" className="text-[#E74C3C] hover:underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </section>

      {/* Separator */}
      <Separator className="p-4" />

      {/* Footer */}
      <footer className="bg-[#FFCC33] text-[#E74C3C] py-4 text-center">
        <p>© 2024 FastBit. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}