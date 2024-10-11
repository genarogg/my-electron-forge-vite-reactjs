import { ipcMain } from "electron";
import { empleadoService, politicaService, bitacoraService } from "@model";

const addEmpleado = ipcMain.handle(
  "empleado/addEmpleado",
  async (event, data) => {
    event.defaultPrevented;

    const { empleado, politica, tipo_empleado, usuario } = data;

    try {
      const newEmpleado = await empleadoService.createEmpleado(
        tipo_empleado,
        empleado.nombres,
        empleado.apellidos,
        empleado.ci,
        empleado.fecha_nac,
        empleado.telefono,

        empleado.correo_electronico,
        empleado.fecha_ingreso_mppe,
        empleado.direccion_de_habitacion,

        empleado.codigo_cargo,
        empleado.dependencia_nominal,
        empleado.estatus,
        empleado.reposo_permiso,

        empleado.anos_servicio,
        empleado.observaciones,
        empleado.titulo_pregrado,
        empleado.area_docente_especialista,

        empleado.grado_seccion,
        empleado.funcion_trabajo,
        empleado.acarigua,
        empleado.titulo_obtenido
      );

      politicaService.createPolitica(
        newEmpleado.id,
        politica.inscrito_psuv,
        politica.pertenece_movimiento_social,
        politica.carnet_patria_codigo,
        politica.carnet_patria_serial,
        politica.centro_votacion,
        politica.tipo_voto
      );

      // @Bitacora
      bitacoraService.createBitacora({
        usuario: usuario,
        accion: `Se registro un nuevo empleado ${empleado.ci}`,
      });

      return {
        type: "success",
        message: "Empleado agregado correctamente",
      };
    } catch (error) {
      console.error("Error al agregar empleado:", error);
      throw error;
    }
  }
);

export default addEmpleado;
