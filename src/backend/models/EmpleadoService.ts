import dbManager from "@dbManager";

class EmpleadoService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear un nuevo empleado
  public createEmpleado(
    tipo_empleado: string,
    nombres: string,
    apellidos: string,
    ci: number,
    fecha_nacimiento: string,
    telefono: string,

    correo_electronico: string,
    fecha_ingreso_mppe: string,
    direccion_de_habitacion: string,

    codigo_cargo: string,
    dependencia_nominal: string,
    estatus: boolean,
    reposo_permiso: string,

    anos_servicio: number,
    observaciones: string,
    titulo_pregrado: string,
    area_docente_especialista: string,

    grado_seccion: string,
    funcion_trabajo: string,
    acarigua: string,
    titulo_obtenido: string
  ) {
    const insertQuery = `
      INSERT INTO empleado (
        tipo_empleado, nombres, apellidos, ci, fecha_nacimiento, telefono, correo_electronico, 
        fecha_ingreso_mppe, direccion_de_habitacion, codigo_cargo, dependencia_nominal, estatus, 
        reposo_permiso, anos_servicio, observaciones, titulo_pregrado, area_docente_especialista, 
        grado_seccion, funcion_trabajo, acarigua, titulo_obtenido
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        tipo_empleado,
        nombres,
        apellidos,
        ci,
        fecha_nacimiento,
        telefono,
        correo_electronico,
        fecha_ingreso_mppe,
        direccion_de_habitacion,
        codigo_cargo,
        dependencia_nominal,
        estatus,
        reposo_permiso,
        anos_servicio,
        observaciones,
        titulo_pregrado,
        area_docente_especialista,
        grado_seccion,
        funcion_trabajo,
        acarigua,
        titulo_obtenido,
      ]);

      return this.lastId();
      
    } catch (error) {
      console.error("Error al crear el empleado:", error);
      throw error;
    }
  }

  // last id
  public lastId() {
    const selectQuery = `SELECT id FROM empleado ORDER BY id DESC LIMIT 1;`;

    try {
      return this.db.get(selectQuery);
    } catch (error) {
      console.error("Error al obtener el ultimo empleado:", error);
    }
  }

  // Método para obtener un empleado por su ID
  public getEmpleadoById(id: number) {
    const selectQuery = `
      SELECT * FROM empleado WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener el empleado:", error);
    }
  }

  // Método para obtener todos los empleados
  public getAllEmpleados() {
    const selectQuery = `
      SELECT * FROM empleado;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
    }
  }

  // Método para actualizar un empleado
  public updateEmpleado(
    id: number,
    tipo_empleado: string,
    nombres: string,
    apellidos: string,
    ci: number,
    fecha_nacimiento: string,
    telefono: string,
    correo_electronico: string,
    fecha_ingreso_mppe: string,
    direccion_de_habitacion: string,
    codigo_cargo: string,
    dependencia_nominal: string,
    estatus: boolean,
    reposo_permiso: string,
    anos_servicio: number,
    observaciones: string,
    titulo_pregrado: string,
    area_docente_especialista: string,
    grado_seccion: string,
    funcion_trabajo: string,
    acarigua: string,
    titulo_obtenido: string
  ) {
    const updateQuery = `
      UPDATE empleado
      SET tipo_empleado = ?, nombres = ?, apellidos = ?, ci = ?, fecha_nacimiento = ?, telefono = ?, 
          correo_electronico = ?, fecha_ingreso_mppe = ?, direccion_de_habitacion = ?, codigo_cargo = ?, 
          dependencia_nominal = ?, estatus = ?, reposo_permiso = ?, anos_servicio = ?, observaciones = ?, 
          titulo_pregrado = ?, area_docente_especialista = ?, grado_seccion = ?, funcion_trabajo = ?, 
          acarigua = ?, titulo_obtenido = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        tipo_empleado,
        nombres,
        apellidos,
        ci,
        fecha_nacimiento,
        telefono,
        correo_electronico,
        fecha_ingreso_mppe,
        direccion_de_habitacion,
        codigo_cargo,
        dependencia_nominal,
        estatus,
        reposo_permiso,
        anos_servicio,
        observaciones,
        titulo_pregrado,
        area_docente_especialista,
        grado_seccion,
        funcion_trabajo,
        acarigua,
        titulo_obtenido,
        id,
      ]);
    } catch (error) {
      console.error("Error al actualizar el empleado:", error);
    }
  }

  // Método para eliminar un empleado
  public deleteEmpleado(id: number) {
    const deleteQuery = `
      DELETE FROM empleado WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  }
}

const empleadoService = new EmpleadoService();

export default empleadoService;
