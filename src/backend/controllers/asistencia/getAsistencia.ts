import { ipcMain } from "electron";
import { asistenciaEmpleadoService } from "@model";

const getAsistencia = ipcMain.handle(
  "asisgencia/getAsistencia",
  async (event, data) => {
    event.defaultPrevented;
    console.log("data", data);

    try {
      let asistencias = await asistenciaEmpleadoService.getAllAsistenciaEmpleado();

      asistencias = asistencias.filter((asistencia: any) => asistencia.hora_entrada !== '00:00:00');

      if (!asistencias) {
        return {
          type: "error",
          message: "Registros de asistencia no se puedieron obtener",
        };
      }
      return {
        type: "success",
        message: "Registros de asistencia obtenidos correctamente",
        asistencias,
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

export default getAsistencia;
