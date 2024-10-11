import dbManager from "@dbManager";

export const getEmpleadoWithPoliticaQuery = `
  SELECT 
    empleado.id AS empleado_id,
    empleado.tipo_empleado,
    empleado.nombres,
    empleado.apellidos,
    empleado.ci,
    empleado.fecha_nacimiento,
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
    empleado.titulo_obtenido,
    empleado.created_at,
    empleado.updated_at,
    politica.id AS politica_id,
    politica.id_empleado,
    politica.inscrito_psuv,
    politica.pertenece_movimiento_social,
    politica.carnet_patria_codigo,
    politica.carnet_patria_serial,
    politica.centro_votacion,
    politica.tipo_voto
  FROM empleado
  LEFT JOIN politica ON empleado.id = politica.id_empleado;
`;

class EmpleadoPoliticaService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para obtener la información combinada de empleado y política
  public getEmpleadoWithPolitica() {
    try {
      return this.db.all(getEmpleadoWithPoliticaQuery);
    } catch (error) {
      console.error(
        "Error al obtener la información combinada de empleado y política:",
        error
      );
      throw error;
    }
  }
}

const empleadoPoliticaService = new EmpleadoPoliticaService();

export default empleadoPoliticaService;
