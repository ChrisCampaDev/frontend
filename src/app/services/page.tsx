// app/services/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/home/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  doctor: { id: number; name: string };
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Efecto inicial para cargar todos los servicios
  useEffect(() => {
    fetchServices();
  }, []);

  // Efecto para manejar el cambio de categoría seleccionada
  useEffect(() => {
    if (selectedCategory) {
      fetchFilteredServices(selectedCategory);
    } else {
      fetchServices();
    }
  }, [selectedCategory]);

  // Función para obtener todos los servicios
  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error al obtener servicios:", error);
    }
  };

  // Función para filtrar servicios por categoría
  const fetchFilteredServices = async (category: string) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/services/filter/${category}`
      );
      setServices(response.data); // Actualiza el estado con los servicios filtrados
    } catch (error) {
      console.error("Error al filtrar servicios por categoría:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Servicios
        </h2>

        {/* Selector de Categoría */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/2 px-3 py-2 border rounded"
          >
            <option value="">Todas las categorías</option>
            {Array.from(
              new Set(services.map((service) => service.category))
            ).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="shadow-md">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
