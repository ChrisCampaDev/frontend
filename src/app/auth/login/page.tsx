"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import Layout from "@/components/home/layout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/usuarios/login",
        {
          email,
          password,
        }
      );
      const { token } = response.data;

      // Guardar el token en localStorage o cookies
      localStorage.setItem("token", token);

      // Redirigir según el rol del usuario
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/user");
      }

      toast.success("Inicio de sesión exitoso");
    } catch (error) {
      console.log(error);

      toast.error("Credenciales inválidas");
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
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
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
