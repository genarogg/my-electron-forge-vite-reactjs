import { ipcMain } from "electron";
import { bitacoraService } from "@model";

const addEstudiante = ipcMain.handle(
  "estudiante/addEstudiante",
  async (event, data) => {
    event.defaultPrevented;
    console.log("data", data);
    try {
      const bitacora = await bitacoraService.getAllBitacora();
      return {
        type: "success",
        bitacora,
      };
    } catch (error) {
      console.error("Error al obtener la bitácora:", error);
      throw error;
    }
  }
);

export default addEstudiante;
