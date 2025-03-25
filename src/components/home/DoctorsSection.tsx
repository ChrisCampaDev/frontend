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

const DoctorsSection: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

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

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-teal-500 ">
        Conoce a nuestros Doctores
      </h2>
      <div className="flex gap-2 justify-center">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border-teal-800 border-2 p-4 rounded-xl flex gap-2"
          >
            <div>
              <Image
                src="/file.svg"
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
    </section>
  );
};

export default DoctorsSection;
