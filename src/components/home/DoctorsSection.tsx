"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  email: string;
}

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const doctorsPerPage = 3; // Número de doctores por página

  useEffect(() => {
    renderMedic();
  }, []);

  async function renderMedic() {
    try {
      const res = await axios.get("http://localhost:4000/api/doctors");
      setDoctors(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Obtener los doctores para la página actual
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  // Función para cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-teal-500">
        Conoce a nuestros Doctores
      </h2>
      <div className="flex gap-2 justify-center flex-wrap">
        {currentDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border-teal-800 border-2 p-4 rounded-xl flex gap-2"
          >
            <div>
              <Image
                src="/avatar.png"
                alt="Doctor"
                width={100}
                height={100}
                className="rounded-full mr-4"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
              <p>{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(doctors.length / doctorsPerPage) }).map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default DoctorsSection;
