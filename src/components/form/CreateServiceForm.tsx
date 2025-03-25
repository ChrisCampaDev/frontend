import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Si usas Next.js
import { Input } from "@/components/ui/input"; // Ajusta la ruta según tu proyecto
import { Button } from "../ui/button";

interface ServiceFormProps {
  serviceId?: number; // ID del servicio a editar (opcional)
}

const ServiceForm: React.FC<ServiceFormProps> = ({ serviceId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [doctorId, setDoctorId] = useState(""); // ID del doctor asignado
  const router = useRouter();

  // Cargar los datos del servicio si se proporciona un ID
  useEffect(() => {
    if (serviceId) {
      const fetchService = async () => {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/services/${serviceId}`
          );
          const { name, description, doctorId } = response.data;
          setName(name);
          setDescription(description);
          setDoctorId(doctorId || ""); // Manejar casos donde doctorId es null
        } catch (error) {
          console.error("Error al cargar el servicio:", error);
          alert("Error al cargar el servicio");
        }
      };
      fetchService();
    }
  }, [serviceId]);

  // Manejador de envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e);

    e.preventDefault();
    try {
      if (serviceId) {
        // Actualizar el servicio existente
        await axios.patch(`http://localhost:4000/api/services/${serviceId}`, {
          name,
          description,
          doctorId: doctorId || null, // Enviar null si no hay doctor asignado
        });
      } else {
        await axios.post("http://localhost:4000/api/services", {
          name,
          description,
          doctorId: doctorId || null, // Enviar null si no hay doctor asignado
        });
      }
      router.refresh();
    } catch (error) {
      console.error("Error al guardar el servicio:", error);
      alert("Error al guardar el servicio");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campo Nombre */}
      <Input
        type="text"
        placeholder="Nombre del servicio"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Campo Descripción */}
      <Input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      {/* Campo Doctor ID */}
      <Input
        type="number"
        placeholder="ID del doctor (opcional)"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
      />

      {/* Botón de envío */}
      <Button
        className="bg-teal-500 text-white hover:bg-teal-600 hover:text-white"
        type="submit"
      >
        {serviceId ? "Actualizar Servicio" : "Crear Servicio"}
      </Button>
    </form>
  );
};

export default ServiceForm;
