import axios from "axios";

export const getServices = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/services");
    return response.data;
  } catch (error) {
    console.error("Error al obtener servicios:", error);
  }
};

export const getDoctors = async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/doctors");
    return response.data;
  } catch (error) {
    console.error("Error al obtener doctores:", error);
  }
};

export const deleteService = async (id: number) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/services/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el servicio:", error);
    throw error;
  }
};
