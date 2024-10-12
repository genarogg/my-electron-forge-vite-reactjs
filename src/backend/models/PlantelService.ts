import dbManager from "@dbManager";

class PlantelService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva entrada en la tabla plantel
  public createPlantel(data: any) {
    const insertQuery = `
      INSERT INTO plantel (
        cod_cir, nombre_circuito, comuna, consejo_comunal, codigo_plantel,
        codigo_estadistico, codigo_dependencia, nombre_plantel, direccion_institucion,
        nivel_modalidad, dependencia_administrativa
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        data.cod_cir,
        data.nombre_circuito,
        data.comuna,
        data.consejo_comunal,
        data.codigo_plantel,
        data.codigo_estadistico,
        data.codigo_dependencia,
        data.nombre_plantel,
        data.direccion_institucion,
        data.nivel_modalidad,
        data.dependencia_administrativa,
      ]);
    } catch (error) {
      console.error("Error al crear la entrada en la tabla plantel:", error);
      throw error;
    }
  }

  // Método para obtener una entrada por su ID
  public getPlantelById(id: number) {
    const selectQuery = `
      SELECT * FROM plantel WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener la entrada en la tabla plantel:", error);
    }
  }

  // Método para obtener todas las entradas
  public getAllPlantel() {
    const selectQuery = `
      SELECT * FROM plantel;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error(
        "Error al obtener las entradas en la tabla plantel:",
        error
      );
    }
  }

  // Método para actualizar una entrada
  public updatePlantel(
    id: number,
    cod_cir: string,
    nombre_circuito: string,
    comuna: string,
    consejo_comunal: string,
    codigo_plantel: string,
    codigo_estadistico: string,
    codigo_dependencia: string,
    nombre_plantel: string,
    direccion_institucion: string,
    nivel_modalidad: string,
    dependencia_administrativa: string
  ) {
    const updateQuery = `
      UPDATE plantel
      SET cod_cir = ?, nombre_circuito = ?, comuna = ?, consejo_comunal = ?, codigo_plantel = ?,
          codigo_estadistico = ?, codigo_dependencia = ?, nombre_plantel = ?, direccion_institucion = ?,
          nivel_modalidad = ?, dependencia_administrativa = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    console.log(
      "updateQuery",
      cod_cir,
      nombre_circuito,
      comuna,
      consejo_comunal,
      codigo_plantel,
      codigo_estadistico,
      codigo_dependencia,
      nombre_plantel,
      direccion_institucion,
      nivel_modalidad,
      dependencia_administrativa,
      id
    );

    try {
      this.db.run(updateQuery, [
        cod_cir,
        nombre_circuito,
        comuna,
        consejo_comunal,
        codigo_plantel,
        codigo_estadistico,
        codigo_dependencia,
        nombre_plantel,
        direccion_institucion,
        nivel_modalidad,
        dependencia_administrativa,
        id,
      ]);
    } catch (error) {
      console.error(
        "Error al actualizar la entrada en la tabla plantel:",
        error
      );
    }
  }

  // Método para eliminar una entrada
  public deletePlantel(id: number) {
    const deleteQuery = `
      DELETE FROM plantel WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar la entrada en la tabla plantel:", error);
    }
  }
}

const plantelService = new PlantelService();

export default plantelService;
