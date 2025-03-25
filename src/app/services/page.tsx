// app/services/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/home/layout";
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
  doctor: { id: number; name: string };
}

interface Doctor {
  id: number;
  name: string;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("");

  useEffect(() => {
    fetchDoctors();
    fetchServices();
  }, []);

  useEffect(() => {
    if (selectedDoctorId) {
      fetchFilteredServices(selectedDoctorId);
    } else {
      fetchServices();
    }
  }, [selectedDoctorId]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/doctors");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error al obtener doctores:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error al obtener servicios:", error);
    }
  };

  const fetchFilteredServices = async (doctorId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/services?doctorId=${doctorId}`
      );
      setServices(response.data);
    } catch (error) {
      console.error("Error al filtrar servicios:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Servicios
        </h2>

        {/* Selector de Doctor */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedDoctorId}
            onChange={(e) => setSelectedDoctorId(e.target.value)}
            className="w-full md:w-1/2 px-3 py-2 border rounded"
          >
            <option value="">Todos los Doctores</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
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
                <CardDescription>{service.doctor.name}</CardDescription>
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
