"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Si usas Next.js
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface DoctorFormProps {
  doctorId?: number;
}

const DoctorForm: React.FC<DoctorFormProps> = ({ doctorId }) => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // Cargar los datos del doctor si se proporciona un ID
  useEffect(() => {
    if (doctorId) {
      const fetchDoctor = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/doctors/${doctorId}`
          );
          const { name, specialty, email } = response.data;
          setName(name);
          setSpecialty(specialty);
          setEmail(email);
        } catch (error) {
          console.error("Error al cargar el doctor:", error);
          alert("Error al cargar el doctor");
        }
      };
      fetchDoctor();
    }
  }, [doctorId]);

  // Manejador de envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (doctorId) {
        // Actualizar el doctor existente
        await axios.patch(`http://localhost:4000/api/doctors/${doctorId}`, {
          name,
          specialty,
          email,
        });
      } else {
        // Crear un nuevo doctor
        await axios.post("http://localhost:4000/api/doctors", {
          name,
          specialty,
          email,
        });
      }
      router.refresh(); // Refrescar la página o redirigir
    } catch (error) {
      console.error("Error al guardar el doctor:", error);
      alert("Error al guardar el doctor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Especialidad"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button
        className="bg-teal-500 text-white hover:bg-teal-600 hover:text-white"
        type="submit"
      >
        {doctorId ? "Actualizar Doctor" : "Crear Doctor"}
      </Button>
    </form>
  );
};

export default DoctorForm;
