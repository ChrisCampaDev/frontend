// app/about/page.tsx
import React from "react";
import Layout from "../../components/home/layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Sección Principal */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-lg text-gray-700 text-center">
            En este tu Centro medico, tenemos la misión es proporcionar atención
            médica de calidad accesible para todos.
          </p>
        </section>

        {/* Nuestra Misión */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                En Health Care, nos comprometemos a mejorar la salud y el
                bienestar de nuestros pacientes mediante servicios médicos
                innovadores, personalizados y accesibles. Creemos que cada
                persona merece recibir atención médica de alta calidad, sin
                importar su ubicación o situación económica.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Nuestra Visión */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Aspiramos a ser líderes en el sector de la salud, transformando
                la forma en que las personas acceden y reciben atención médica.
                Queremos construir comunidades más saludables y resilientes,
                donde cada individuo tenga las herramientas y el apoyo
                necesarios para vivir una vida plena y equilibrada.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Nuestros Valores */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Nuestros Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  Compromiso: Nos dedicamos a brindar atención excepcional a
                  nuestros pacientes.
                </li>
                <li>
                  Innovación: Adoptamos tecnologías avanzadas para mejorar los
                  resultados médicos.
                </li>
                <li>
                  Empatía: Escuchamos activamente a nuestros pacientes y
                  entendemos sus necesidades.
                </li>
                <li>
                  Transparencia: Mantenemos una comunicación clara y honesta con
                  nuestros pacientes.
                </li>
                <li>
                  Equidad: Creemos en la igualdad de acceso a los servicios de
                  salud.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-gray-700 mb-4">
            Contamos con un equipo de profesionales altamente capacitados y
            comprometidos con la excelencia en la atención médica. Nuestros
            médicos, enfermeras y personal administrativo trabajan juntos para
            garantizar que cada paciente reciba el mejor cuidado posible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Ejemplo de Miembros del Equipo */}
            <Card>
              <CardHeader>
                <CardTitle>Dr. Juan Pérez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Especialista en Medicina General
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Dra. Ana López</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Pediatra Certificada</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enf. María Gómez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Enfermera Clínica</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonios */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <p className="text-gray-700 italic">
                  "La atención en Health Care fue excepcional. El Dr. Pérez me
                  ayudó a resolver mis problemas de salud de manera rápida y
                  efectiva."
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  - Carlos M., Paciente
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 italic">
                  "El equipo de enfermeras fue muy atento y profesional. Me
                  sentí cómodo y seguro durante todo el proceso."
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  - Laura S., Paciente
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
