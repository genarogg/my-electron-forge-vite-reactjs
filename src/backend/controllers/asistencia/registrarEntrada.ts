import { ipcMain } from "electron";
import { empleadoService, asistenciaEmpleadoService } from "@model";

const horasEntrada = {
  docentes: "07:30:00",
  obreros: "06:30:00",
  administrativos: "07:30:00",
  cocineros: "07:00:00"
};

const horasSalida = {
  docentes: "14:40:00",
  obreros: "13:00:00",
  administrativos: "15:00:00",
  cocineros: "15:00:00"
};

const registrarEntrada = ipcMain.handle("asistencia", async (event, data) => {
  event.defaultPrevented;

  const { ci, comentario } = data.formData;
  const { tipoAction } = data;

  const empleado = await empleadoService.getEmpleadoByCI(ci);

  if (!empleado) {
    return { message: "Empleado no encontrado", type: "error" };
  }

  const asistenciaEmpleado = await asistenciaEmpleadoService.getAsistenciaEmpleadoByCI(ci);
  const tipoEmpleado = empleado.tipo_empleado as keyof typeof horasEntrada;


  const horaActual = new Date().toTimeString().split(" ")[0];
  console.log("horaActual", comentario !== "");
  if (tipoAction === "entrada") {
    if (comentario === "" && (horaActual > horasEntrada[tipoEmpleado])) {
      return { message: "No se puede registrar la entrada después de la hora permitida", type: "error" };
    }
    asistenciaEmpleadoService.updateHoraEntradaByCI(ci, `${tipoAction}: ${comentario}`);
    return { message: "Registro de entrada correcto", type: "success" };
  }

  if (asistenciaEmpleado.hora_entrada === "00:00:00") {
    return { message: "No tiene registro de entrada", type: "error" };
  }

  if (tipoAction === "almuerzo") {
    if (comentario === "" && (horaActual < "12:00:00" || horaActual > "13:00:00")) {
      return { message: "No se puede registrar la hora de almuerzo fuera del rango permitido", type: "error" };
    }
    asistenciaEmpleadoService.updateHoraAlmuerzoByCI(ci, `${tipoAction}: ${comentario}`);
    return { message: "Registro de hora de almuerzo correcto", type: "success" };
  }

  if (tipoAction === "salida") {
    if (comentario === "" && (horaActual < horasSalida[tipoEmpleado])) {
      return { message: "No se puede registrar la salida antes de la hora de entrada", type: "error" };
    }
    asistenciaEmpleadoService.updateHoraSalidaByCI(ci, `${tipoAction}: ${comentario}`);
    return { message: "Registro de salida correcto", type: "success" };
  }

  return { message: "Acción no permitida", type: "error" };
});

export default registrarEntrada;