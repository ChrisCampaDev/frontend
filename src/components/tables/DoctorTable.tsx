// components/DoctorsTable.tsx
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  email: string;
  services: { id: number; name: string }[];
}

const DoctorsTable: React.FC<{ doctors: Doctor[] }> = ({ doctors }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Doctores</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Especialidad</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Servicios</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.specialty}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>
                {doctor.services.map((service) => (
                  <div key={service.id}>{service.name}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorsTable;
