// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-teal-500 border-b-2">
      <nav className="flex  text-teal-500 p-6">
        <div className=" mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Centro Medico
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/user"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-900 mr-4"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-900 mr-4"
            >
              Sobre nosotros
            </Link>
            <Link
              href="/doctors"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-900 mr-4"
            >
              Doctores
            </Link>
            <Link
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-900"
            >
              Servicios
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
