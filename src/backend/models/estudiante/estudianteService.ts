import dbManager from "@dbManager";

class EstudianteService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva entrada en la tabla estudiante
  public createEstudiante(data: any) {
    const insertQuery = `
      INSERT INTO estudiante (
        madre_id, padre_id, reprecentante_id, apellidos, nombres, sex, nacionalidad, ci, fecha_nacimiento, lugar_nacimiento, entd_federativa, plantel_de_procedencia, talla, peso, medidas, edad, lateralidad, talla_camisa, talla_pantalon, talla_zapato, via_de_acceso_al_lugar_donde_vive, con_quien_vive, condicion_especial, observacion_de_condicion, el_estudiante_consume_medicamento, observacion_de_medicamento, inicio_periodo_escolar, fin_periodo_escolar, usuario
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        data.madre_id,
        data.padre_id,
        data.reprecentante_id,
        data.apellidos,
        data.nombres,
        data.sex,
        data.nacionalidad,
        data.ci,
        data.fecha_nacimiento,
        data.lugar_nacimiento,
        data.entd_federativa,
        data.plantel_de_procedencia,
        data.talla,
        data.peso,
        data.medidas,
        data.edad,
        data.lateralidad,
        data.talla_camisa,
        data.talla_pantalon,
        data.talla_zapato,
        data.via_de_acceso_al_lugar_donde_vive,
        data.con_quien_vive,
        data.condicion_especial,
        data.observacion_de_condicion,
        data.el_estudiante_consume_medicamento,
        data.observacion_de_medicamento,
        data.inicio_periodo_escolar,
        data.fin_periodo_escolar,
        data.usuario,
      ]);
    } catch (error) {
      console.error("Error al crear la entrada en la tabla estudiante:", error);
      throw error;
    }
  }

  // Método para obtener una entrada por su ID
  public getEstudianteById(id: number) {
    const selectQuery = `
      SELECT * FROM estudiante WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error(
        "Error al obtener la entrada en la tabla estudiante:",
        error
      );
    }
  }

  // Método para obtener todas las entradas
  public getAllEstudiantes() {
    const selectQuery = `
      SELECT * FROM estudiante;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error(
        "Error al obtener las entradas en la tabla estudiante:",
        error
      );
    }
  }

  // Método para actualizar una entrada
  public updateEstudiante(id: number, data: any) {
    const updateQuery = `
      UPDATE estudiante
      SET madre_id = ?, padre_id = ?, reprecentante_id = ?, apellidos = ?, nombres = ?, sex = ?, nacionalidad = ?, ci = ?, fecha_nacimiento = ?, lugar_nacimiento = ?, entd_federativa = ?, plantel_de_procedencia = ?, talla = ?, peso = ?, medidas = ?, edad = ?, lateralidad = ?, talla_camisa = ?, talla_pantalon = ?, talla_zapato = ?, via_de_acceso_al_lugar_donde_vive = ?, con_quien_vive = ?, condicion_especial = ?, observacion_de_condicion = ?, el_estudiante_consume_medicamento = ?, observacion_de_medicamento = ?, inicio_periodo_escolar = ?, fin_periodo_escolar = ?, usuario = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        data.madre_id,
        data.padre_id,
        data.reprecentante_id,
        data.apellidos,
        data.nombres,
        data.sex,
        data.nacionalidad,
        data.ci,
        data.fecha_nacimiento,
        data.lugar_nacimiento,
        data.entd_federativa,
        data.plantel_de_procedencia,
        data.talla,
        data.peso,
        data.medidas,
        data.edad,
        data.lateralidad,
        data.talla_camisa,
        data.talla_pantalon,
        data.talla_zapato,
        data.via_de_acceso_al_lugar_donde_vive,
        data.con_quien_vive,
        data.condicion_especial,
        data.observacion_de_condicion,
        data.el_estudiante_consume_medicamento,
        data.observacion_de_medicamento,
        data.inicio_periodo_escolar,
        data.fin_periodo_escolar,
        data.usuario,
        id,
      ]);
    } catch (error) {
      console.error(
        "Error al actualizar la entrada en la tabla estudiante:",
        error
      );
    }
  }

  // Método para eliminar una entrada
  public deleteEstudiante(id: number) {
    const deleteQuery = `
      DELETE FROM estudiante WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error(
        "Error al eliminar la entrada en la tabla estudiante:",
        error
      );
    }
  }
}

const estudianteService = new EstudianteService();

export default estudianteService;
