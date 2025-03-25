// components/ServicesTable.tsx
import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface Service {
  id: number;
  name: string;
  description: string;
  doctor: { name: string };
}

const ServicesTable: React.FC<{ services: Service[] }> = ({ services }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Servicios</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Servicio</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Doctor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell>{service.doctor.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServicesTable;
