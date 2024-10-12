import { plantelService, bitacoraService } from "@model";
import { ipcMain } from "electron";

const addUpdatePlantel = ipcMain.handle(
  "plantel/addUpdatePlantel",
  async (event, data) => {
    event.defaultPrevented;

    // revisa si existe registro
    const plantel = plantelService.getAllPlantel();

    if (plantel.length === 0) {
      await plantelService.createPlantel(data.plantel);

      //@ Bitacora
      await bitacoraService.createBitacora({
        usuario: data.usuario,
        accion: `Registro de plantel`,
      });
      return {
        message: "Plantel creado correctamente",
        type: "success",
      };
    }
    const {
      id,
      cod_cir,
      nombre_circuito,
      comuna,
      consejo_comunal,
      codigo_plantel,
      codigo_estadistico,
      codigo_dependencia,
      nombre_plantel,
      direccion_institucion,
      nivel_modalidad,
      dependencia_administrativa,
    } = data.plantel;

    try {
      // si existe actualiza
      await plantelService.updatePlantel(
        id,
        cod_cir,
        nombre_circuito,
        comuna,
        consejo_comunal,
        codigo_plantel,
        codigo_estadistico,
        codigo_dependencia,
        nombre_plantel,
        direccion_institucion,
        nivel_modalidad,
        dependencia_administrativa
      );

      //@ Bitacora
      bitacoraService.createBitacora({
        usuario: data.usuario,

        accion: `Actualización de plantel`,
      });

      return {
        message: "Plantel actualizado correctamente",
        type: "success",
      };
    } catch (error) {
      console.error("Error al actualizar el plantel", error);
      return {
        message: "Error al actualizar el plantel",
        type: "error",
      };
    }
  }
);

export default addUpdatePlantel;
