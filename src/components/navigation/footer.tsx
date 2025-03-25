// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Sección Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Información de la Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-4">Health Care</h3>
            <p className="text-sm text-gray-400">
              Brindamos servicios médicos de alta calidad para mejorar tu
              bienestar.
            </p>
          </div>

          {/* Columna 2: Enlaces Útiles */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/doctors" className="hover:text-green-500">
                  Doctores
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-500">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-500">
                  Acerca de Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p className="text-sm text-gray-400">
              Dirección: Calle Principal #123, Ciudad, País
            </p>
            <p className="text-sm text-gray-400">Teléfono: +57 123 456 789</p>
            <p className="text-sm text-gray-400">Email: info@healthcare.com</p>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Health Care. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
