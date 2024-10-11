import { ipcMain } from "electron";
import { bitacoraService } from "@model";

const getBitacora = ipcMain.handle("bitacora/get", async (event, data) => {
  event.defaultPrevented;

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
});

export default getBitacora;
