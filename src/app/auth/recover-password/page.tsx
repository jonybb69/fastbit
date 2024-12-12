"use client";

import button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RecoverPassword() {
  const [code, setCode] = useState("");
  const [resendMessage, setResendMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Código ingresado:", code);
    alert("Código enviado correctamente. Puedes proceder con la recuperación.");
    router.push("/auth/reset-password");
  };

  const handleResendCode = () => {
    setResendMessage("El código ha sido reenviado correctamente.");
    setTimeout(() => setResendMessage(""), 5000);
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
        <h1 className="text-5xl font-bold text-[#E74C3C]">Recupera tu Contraseña</h1>
      </section>

      {/* Recover Password Form */}
      <section className="bg-white text-center py-6">
        <h2 className="text-2xl text-[#E74C3C] mb-10">Introduce tu código</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* Code Section */}
          <div className="mb-6 text-left">
            <label htmlFor="code" className="text-[#E74C3C] p-2 font-medium block">
              código de recuperación
            </label>
            <input
              id="code"
              type="text"
              placeholder="ingresar código"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full p-2 border border-black rounded focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          <div className="mb-8 text-left">
            <label htmlFor="resend" className="text-[#E74C3C] p-1 font-medium block">
              ¿No has recibido ningún código?
            </label>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleResendCode();
              }}
              className="text-[#3498DB] p-2 font-medium block hover:underline"
            >
              Volver a enviar código
            </a>

            {resendMessage && (
              <p className="text-green-600 mt-4 ">{resendMessage}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded bg-[#E74C3C] text-white hover:bg-[#C0392B]"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Separator */}
      <Separator className="p-10" />

      {/* Footer */}
      <footer className="bg-[#FFCC33] text-[#E74C3C] py-4 text-center">
        <p>© 2024 FastBit. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
