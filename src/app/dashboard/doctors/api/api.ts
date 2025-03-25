import axios from "axios";

// Obtener todos los doctores
export const getDoctors = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/doctors");
    return response.data; // Devuelve solo los datos del response
  } catch (error) {
    console.error("Error al obtener doctores:", error);
    throw error;
  }
};

// Eliminar un doctor
export const deleteDoctor = async (id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/doctors/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el doctor:", error);
    throw error;
  }
};
