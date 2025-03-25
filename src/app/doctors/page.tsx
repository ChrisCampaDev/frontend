// app/doctors/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/home/layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  email: string;
}

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/doctors");
      setDoctors(response.data);
    } catch (error) {
      console.error("Error al obtener doctores:", error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestros Doctores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="shadow-md">
              <CardHeader>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{doctor.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorsPage;
