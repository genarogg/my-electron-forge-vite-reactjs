import { ipcMain } from "electron";
import { estudiante } from "@model";

const addEstudiante = ipcMain.handle(
  "estudiante/addEstudiante",
  async (event, data) => {
    event.defaultPrevented;
    // console.log("data", data);

    const {
      estudiante: alumno,
      viaDeAcceso,
      madre,
      padre,
      representante,
      periodoEscolar,
      usuario,
    } = data;

    console.log("madre", madre);

    // insertar los datos de la madre
    const madreId = await estudiante.madreService.createMadre(madre);
    console.log("madreId", madreId);

    const padreId = await estudiante.padreService.createPadre(padre);
    console.log("padreId", padreId);

    try {
      return {
        type: "success",
      };
    } catch (error) {
      console.error("Error al obtener la bitácora:", error);
      throw error;
    }
  }
);

export default addEstudiante;
