import { ipcMain } from "electron";

import { empleadoService, asistenciaEmpleadoService } from "@model";

const registrarEntrada = ipcMain.handle("asistencia", async (event, data) => {
  event.defaultPrevented;

  const { ci } = data.formData;
  const { tipoAction } = data;

  const empleado = await empleadoService.getEmpleadoByCI(ci);

  if (!empleado) {
    return { message: "Empleado no encontrado", type: "error" };
  }

  if (tipoAction === "entrada") {
    asistenciaEmpleadoService.updateHoraEntradaByCI(ci);

    return { message: "registro de entrada correcto", type: "success" };
  }

  if (tipoAction === "salida") {
    asistenciaEmpleadoService.updateHoraSalidaByCI(ci);

    return { message: "registro de salida correcto", type: "success" };
  }

  return { message: "Acción no permitida", type: "error" };
});

export default registrarEntrada;