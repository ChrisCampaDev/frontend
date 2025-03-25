import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const services = [
  {
    title: "Clinica Neurologia ",
    description:
      "En este programa, tu eres tratado por nuestros doctores mas capacitados en el tema...",
  },
  {
    title: "Clinica Patologica ",
    description:
      "Brindamos un servicio de calidad para que nuestros clientes se sientan lo mejor posible...",
  },
  {
    title: "Ortopedia",
    description: "Te miramos de arriba a abajo buscando cualquier malestar...",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-green-500 rounded-4xl text-white p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Servicios medicos brindados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Card key={index} className="bg-white text-black">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
