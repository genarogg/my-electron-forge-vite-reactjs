import moment from "moment";
import {
  empleadoService,
  politicaService,
  empleadoPoliticaService,
  asistenciaEmpleadoService,
} from "@model";

// Función para generar registros de asistencia
export const generateAsistencia = async () => {
  try {
    // Obtener todos los usuarios (docentes, obreros, administrativos, cocineros)
    const empleados = await empleadoService.getAllEmpleados();

    // Combinar todos los usuarios en un solo arreglo

    for (const empleado of empleados) {
      const { id: personal_id, nombres, apellidos, ci } = empleado;

      // Crear la asistencia personal

      await asistenciaEmpleadoService.createAsistenciaEmpleado({
        personal_id,
        nombres,
        apellidos,
        ci,
      });
    }

    console.log("Registros de asistencia generados correctamente");
  } catch (error) {
    console.error("Error al generar registros de asistencia:", error);
  }
};

const asistencia = async () => {
  try {
    const ultimoRegistro = await asistenciaEmpleadoService.getLastAsistenciaPersonal();

    const fechaHoy = moment().format("YYYY-MM-DD");

    if (ultimoRegistro && ultimoRegistro.fecha === fechaHoy) {
      console.log("La asistencia ya ha sido generada para el día de hoy.");
      return;
    }

    generateAsistencia();
  } catch (error) {
    console.error(
      "Error al obtener el último registro de asistencia personal:",
      error
    );
  }
};

export default asistencia;
