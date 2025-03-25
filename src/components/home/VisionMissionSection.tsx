// components/VisionMissionSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";

const VisionMissionSection: React.FC = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Nuestra Vision y Mision</h2>
      <p className="text-gray-700 mb-4">
        En Centro Medico SA, nos comprometemos a mejorar la salud y el bienestar
        de nuestros pacientes mediante servicios médicos innovadores,
        personalizados y accesibles. Creemos que cada persona merece recibir
        atención médica de alta calidad, sin importar su ubicación o situación
        económica.
      </p>
      <ul className="list-disc pl-4">
        <li>No existe los malos tratos</li>
        <li>Mientras pagues, todos son tratados por igual</li>
      </ul>
      <Button variant="default" className="mt-4 bg-teal-500 hover:bg-teal-600">
        leer mas
      </Button>
    </section>
  );
};

export default VisionMissionSection;
