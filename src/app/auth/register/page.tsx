// app/auth/register/page.tsx
"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import Layout from "@/components/home/layout";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Enviar los datos al backend para registrar al usuario
      await axios.post("http://localhost:4000/api/usuarios/register", {
        username,
        email,
        password,
        role: "user", // Asigna un rol predeterminado (puedes cambiarlo según tus necesidades)
      });

      // Mostrar mensaje de éxito
      toast.success("Registro exitoso");

      // Redirigir al usuario a la página de inicio de sesión
      router.push("/auth/login");
    } catch (error) {
      console.error("Error al registrar:", error);
      toast.error("Error al registrar usuario");
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Registrarse</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Nombre de Usuario
            </label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su nombre de usuario"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Contraseña</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Registrarse
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes una cuenta?{" "}
            <a href="/auth/login" className="text-blue-500 hover:underline">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
