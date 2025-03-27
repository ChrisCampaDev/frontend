// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mb-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Centro medico disponible las 24 horas para nuestros clientes
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Tenemos medico capacitados para atender a nuestros clientes todos los
          dias, vea nuestros servicios y el perfil de nuestros doctores
        </p>
        <form className="bg-white rounded-lg shadow-teal-500 shadow-md p-6 mr-10">
          <h2 className="text-2xl font-bold mb-4">Obten una cita</h2>
          <div className="space-y-4">
            <Input type="text" placeholder="Nombre" />
            <Input type="email" placeholder="Correo" />
            <Input type="date" placeholder="Dia" />
            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/Medico1.png"
          alt="Healthcare Image"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default HeroSection;
