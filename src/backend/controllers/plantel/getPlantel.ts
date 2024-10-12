import { ipcMain } from "electron";
import { plantelService } from "@model";

const getPlantel = ipcMain.handle("plantel/getPlantel", async (event, data) => {
  event.defaultPrevented;

  try {
    console.log("data", data);

    const plantelData = plantelService.getPlantelById(1);

    console.log("plantelData", plantelData);

    return {
      message: "Datos del plantel recuperados correctamente",
      type: "success",
      plantel: plantelData,
    };
  } catch (error) {
    console.error("Error al crear el plantel", error);
    return {
      message: "Error al crear el plantel",
      type: "error",
    };
  }
});

export default getPlantel;
