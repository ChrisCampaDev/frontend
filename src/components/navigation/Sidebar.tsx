// components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-select";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md fixed top-0 left-0 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/dashboard/users"
            className="block text-gray-700 hover:text-green-500"
          >
            Usuarios
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/services"
            className="block text-gray-700 hover:text-green-500"
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/doctors"
            className="block text-gray-700 hover:text-green-500"
          >
            Doctores
          </Link>
        </li>
        <Separator />
        <li>
          <Link
            href="/user"
            className="block text-gray-700 hover:text-green-500"
          >
            Ver sitio Web
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
