import { ipcMain } from "electron";
import { estudianteModel } from "@model";

const getEstudiante = ipcMain.handle(
  "estudiante/getEstudiante",
  async (event, data) => {
    event.defaultPrevented;

    try {
      console.log("data", data);

      const estudianteData = estudianteModel.EstudianteGetService.getEstudianteWithFamily();

      console.log("estudianteData", estudianteData);

      return {
        message: "Estudiante creado correctamente",
        type: "success",
        estudiantes: estudianteData,
      };
    } catch (error) {
      console.error("Error al crear el estudiante", error);
      return {
        message: "Error al crear el estudiante",
        type: "error",
      };
    }
  }
);

export default getEstudiante;
