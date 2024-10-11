import { ipcMain } from "electron";
import { userService } from "@model";

const getUsuarios = ipcMain.handle(
  "usuarios/getUsuarios",
  async (event, data) => {
    event.defaultPrevented;
    console.log("data", data);

    try {
      const usuarios = await userService.getAllUsers();

      if (!usuarios) {
        return {
          type: "error",
          message: "Registros de asistencia no se puedieron obtener",
        };
      }
      return {
        type: "success",
        message: "Registros de asistencia obtenidos correctamente",
        usuarios,
      };
    } catch (error) {
      console.error(
        "Error al obtener la información combinada de empleado y política:",
        error
      );
      throw error;
    }
  }
);

export default getUsuarios;
