// app/dashboard/doctors/page.tsx
"use client";

import React, { useEffect, useState } from "react";

import Sidebar from "@/components/navigation/Sidebar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import LayoutAdmin from "@/components/home/layoutAdmin";

import { getDoctors, deleteDoctor } from "./api/api";
import { Button } from "@/components/ui/button";

import { Modal } from "@/components/home/modal";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  email: string;
}

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Error al cargar doctores:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteDoctor(id);
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar el doctor:", error);
    }
  };

  return (
    <LayoutAdmin>
      <Sidebar />
      <div className="ml-64 p-4">
        <div className="flex gap-3">
          <h2 className="text-2xl font-bold mb-4">Doctores</h2>
          <Modal select={true} texto="Crear" color="bg-teal-500" />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Especialidad</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>{doctor.name}</TableCell>
                <TableCell>{doctor.specialty}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>
                  <Modal
                    select={true}
                    texto="Editar"
                    doctorId={doctor.id}
                    color="bg-green-600"
                  />
                  <Button
                    className="bg-red-800 text-white"
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </LayoutAdmin>
  );
};

export default DoctorsPage;
