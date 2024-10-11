import { ipcMain } from "electron";
import { estudianteModel } from "@model";

const addEstudiante = ipcMain.handle(
  "estudiante/addEstudiante",
  async (event, data) => {
    event.defaultPrevented;

    try {
      console.log("data", data);

      const { madre, padre, representante, alumno } = data;

      // insertar los datos de la madre
      const madreId = await estudianteModel.madreService.createMadre(madre);
      // console.log("madreId", madreId);

      const padreId = await estudianteModel.padreService.createPadre(padre);
      // console.log("padreId", padreId);

      const representanteId = await estudianteModel.representanteService.createRepresentante(
        representante
      );

      const prepareData = {
        madre_id: madreId.id,
        padre_id: padreId.id,
        reprecentante_id: representanteId.id,
        ...alumno,
      };

      await estudianteModel.estudianteService.createEstudiante(prepareData);

      return {
        message: "Estudiante creado correctamente",
        type: "success",
      };
    } catch (error) {
      console.error("Error al obtener la bitácora:", error);
      throw error;
    }
  }
);

export default addEstudiante;
