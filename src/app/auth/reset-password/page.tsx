"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    console.log("Nueva contraseña establecida:", newPassword);
    alert("¡Tu contraseña ha sido restaurada exitosamente!");
    router.push("/auth/home");
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
        <h1 className="text-5xl font-medium text-black">Restaurar Contraseña</h1>
      </section>

      {/* Reset Password Form */}
      <section className="bg-white text-center py-6">
        <h2 className="text-2xl font-bold text-[#E74C3C] mb-12">ingresa una nueva contraseña</h2>
        <p className="text-blue p-4 block">
          recuerda utilizar al menos un número y una mayúscula.
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* Nueva contraseña */}
          <div className="mb-5 text-left">
            <label
              htmlFor="new-password"
              className="text-[#E74C3C] p-1 font-medium block"
            >
              nueva contraseña
            </label>
            <input
              id="new-password"
              type="password"
              placeholder="nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          {/* Confirmar contraseña */}
          <div className="mb-6 text-left">
            <label
              htmlFor="confirm-password"
              className="text-[#E74C3C] p-1 font-medium block"
            >
              confirmar contraseña
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="nueva contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border mb-2 border-black rounded-lg focus:outline-none focus:border-[#E74C3C]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 rounded-lg bg-[#E74C3C] text-white hover:bg-[#C0392B]"
          >
            Siguiente
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