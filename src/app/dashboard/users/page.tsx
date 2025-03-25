// app/dashboard/users/page.tsx
"use client"; // Habilita el uso de hooks y estado en el cliente

import React, { useEffect, useState } from "react";
import axios from "axios";
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

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/usuarios");
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  return (
    <LayoutAdmin>
      <Sidebar />
      <div className="ml-64 p-4">
        <h2 className="text-2xl font-bold mb-4">Usuarios</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rol</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </LayoutAdmin>
  );
};

export default UsersPage;
