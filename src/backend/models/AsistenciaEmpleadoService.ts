import dbManager from "@dbManager";
import moment from "moment";

class AsistenciaEmpleadoService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva entrada en asistencia_empleado
  public createAsistenciaEmpleado(data: any) {
    const insertQuery = `
      INSERT INTO asistencia_empleado (personal_id, nombres, apellidos, ci, fecha, hora_entrada, hora_salida, vino)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const fecha = moment().format("YYYY-MM-DD");

    try {
      this.db.run(insertQuery, [
        data.personal_id,
        data.nombres,
        data.apellidos,
        data.ci,
        fecha,
        data.hora_entrada || "00:00:00",
        data.hora_salida || "00:00:00",
        data.vino || "NO",
      ]);
    } catch (error) {
      console.error("Error al crear la entrada en asistencia_empleado:", error);
      throw error;
    }
  }

  // Método para obtener una entrada por su ID
  public getAsistenciaEmpleadoById(id: number) {
    const selectQuery = `
      SELECT * FROM asistencia_empleado WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error(
        "Error al obtener la entrada en asistencia_empleado:",
        error
      );
    }
  }

  // Método para obtener todas las entradas
  public getAllAsistenciaEmpleado() {
    const selectQuery = `
      SELECT * FROM asistencia_empleado;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error(
        "Error al obtener las entradas en asistencia_empleado:",
        error
      );
    }
  }

  // Método para actualizar una entrada
  public updateAsistenciaEmpleado(
    id: number,
    personal_id: number,
    nombres: string,
    apellidos: string,
    ci: string,
    fecha: string,
    hora_entrada: string,
    hora_salida: string,
    vino: string
  ) {
    const updateQuery = `
      UPDATE asistencia_empleado
      SET personal_id = ?, nombres = ?, apellidos = ?, ci = ?, fecha = ?, hora_entrada = ?, hora_salida = ?, vino = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        personal_id,
        nombres,
        apellidos,
        ci,
        fecha,
        hora_entrada,
        hora_salida,
        vino,
        id,
      ]);
    } catch (error) {
      console.error(
        "Error al actualizar la entrada en asistencia_empleado:",
        error
      );
    }
  }

  // Método para actualizar la hora de entrada por CI
  public updateHoraEntradaByCI(ci: string) {
    const hora_entrada = moment().format("HH:mm:ss");

    const updateQuery = `
      UPDATE asistencia_empleado
      SET hora_entrada = ?, updated_at = CURRENT_TIMESTAMP
      WHERE ci = ?;
    `;

    try {
      this.db.run(updateQuery, [hora_entrada, ci]);
    } catch (error) {
      console.error(
        "Error al actualizar la hora de entrada en asistencia_empleado:",
        error
      );
    }
  }

  // Método para actualizar la hora de salida por CI
  public updateHoraSalidaByCI(ci: string) {
    const hora_salida = moment().format("HH:mm:ss");
    const updateQuery = `
      UPDATE asistencia_empleado
      SET hora_salida = ?, updated_at = CURRENT_TIMESTAMP
      WHERE ci = ?;
    `;

    try {
      this.db.run(updateQuery, [hora_salida, ci]);
    } catch (error) {
      console.error(
        "Error al actualizar la hora de salida en asistencia_empleado:",
        error
      );
    }
  }

  // Método para eliminar una entrada
  public deleteAsistenciaEmpleado(id: number) {
    const deleteQuery = `
      DELETE FROM asistencia_empleado WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error(
        "Error al eliminar la entrada en asistencia_empleado:",
        error
      );
    }
  }

  // Método para obtener el último registro de asistencia personal
  public async getLastAsistenciaPersonal() {
    try {
      const selectQuery = `
        SELECT * FROM asistencia_empleado
        ORDER BY id DESC
        LIMIT 1;
      `;
      const row = await this.db.get(selectQuery);
      return row;
    } catch (err) {
      console.error(
        "Error al obtener el último registro de asistencia personal:",
        err
      );
      throw err;
    }
  }
}

const asistenciaEmpleadoService = new AsistenciaEmpleadoService();

export default asistenciaEmpleadoService;
