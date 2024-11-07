import { ipcMain } from "electron";
import { solicitudPasantiaService } from "@model";

const getSolicitudPasantia = ipcMain.handle(
    "pasantia/getSolicitudPasantia",
    async (event, data) => {
        event.defaultPrevented;

        try {
            const solicitudData = await solicitudPasantiaService.getAllSolicitudesPasantia();

            console.log("solicitudData", solicitudData);

            return {
                message: "Solicitudes de pasantía obtenidas correctamente",
                type: "success",
                solicitudes: solicitudData,
            };
        } catch (error) {
            console.error("Error al obtener las solicitudes de pasantía", error);
            return {
                message: "Error al obtener las solicitudes de pasantía",
                type: "error",
            };
        }
    }
);

export default getSolicitudPasantia;