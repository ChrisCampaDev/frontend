"use client";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Ajusta las rutas según tu proyecto
import LayoutAdmin from "@/components/home/layoutAdmin";
import Sidebar from "@/components/navigation/Sidebar";
import { useState, useEffect } from "react";
import { deleteService, getDoctors, getServices } from "./api/api";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/home/modal";

interface Service {
  id: number;
  name: string;
  description: string;
  doctor: {
    name: string;
    specialty: string;
    email: string;
  };
}

interface Doctor {
  id: number;
  name: string;
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchService();
  }, []);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener servicios
  useEffect(() => {
    getServices();
  }, []);

  // Obtener doctores cuando se abre el modal
  useEffect(() => {
    if (isModalOpen) {
      getDoctors();
    }
  }, [isModalOpen]);

  const handleAssignDoctor = async (doctorId: number) => {
    if (!selectedServiceId) return;

    try {
      await axios.patch(
        `http://localhost:4000/api/services/${selectedServiceId}/assign-doctor`,
        {
          doctorId,
        }
      );
      setIsModalOpen(false);
      getServices();
    } catch (error) {
      console.error("Error al asignar doctor:", error);
      alert("Error al asignar doctor");
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await deleteService(id);
      setServices((prevServices) =>
        prevServices.filter((service) => service.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar el doctor:", error);
    }
  };

  return (
    <LayoutAdmin>
      <Sidebar />
      <div className="ml-64 p-2">
        <h2 className="text-2xl font-bold mb-4">Servicios</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Servicio</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>{service.doctor.name || "Sin asignar"}</TableCell>

                <TableCell>
                  <button
                    className="bg-teal-500 text-white px-2 py-1 rounded"
                    onClick={() => {
                      setSelectedServiceId(service.id);
                      setIsModalOpen(true);
                    }}
                  >
                    Asignar Doctor
                  </button>
                </TableCell>
                <TableCell>
                  <Modal select={false} texto="Crear" color="bg-teal-500" />
                </TableCell>
                <TableCell>
                  <Modal
                    select={false}
                    texto="Editar"
                    serviceId={service.id}
                    color="bg-green-600"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    className="bg-red-800 text-white"
                    onClick={() => handleDelete(service.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Modal para asignar doctor */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Asignar Doctor</h3>
              <ul className="space-y-2">
                {doctors.map((doctor) => (
                  <li key={doctor.id} className="flex items-center">
                    <span className="flex-grow mr-2">{doctor.name}</span>
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={() => handleAssignDoctor(doctor.id)}
                    >
                      Asignar
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 w-full bg-gray-500 text-white px-2 py-1 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </LayoutAdmin>
  );
};

export default ServicesPage;
