import dbManager from "@dbManager";

class PoliticaService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva política
  public createPolitica(
    id_empleado: number,
    inscrito_psuv: boolean,
    pertenece_movimiento_social: string,
    carnet_patria_codigo: string,
    carnet_patria_serial: string,
    centro_votacion: string,
    tipo_voto: string
  ) {
    const insertQuery = `
      INSERT INTO politica (
        id_empleado, inscrito_psuv, pertenece_movimiento_social, carnet_patria_codigo, 
        carnet_patria_serial, centro_votacion, tipo_voto
      ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        id_empleado,
        inscrito_psuv,
        pertenece_movimiento_social,
        carnet_patria_codigo,
        carnet_patria_serial,
        centro_votacion,
        tipo_voto,
      ]);
    } catch (error) {
      console.error("Error al crear la política:", error);
      throw error;
    }
  }

  // Método para obtener una política por su ID
  public getPoliticaById(id: number) {
    const selectQuery = `
      SELECT * FROM politica WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener la política:", error);
    }
  }

  // Método para obtener todas las políticas
  public getAllPoliticas() {
    const selectQuery = `
      SELECT * FROM politica;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener las políticas:", error);
    }
  }

  // Método para actualizar una política
  public updatePolitica(
    id: number,
    id_empleado: number,
    inscrito_psuv: boolean,
    pertenece_movimiento_social: string,
    carnet_patria_codigo: string,
    carnet_patria_serial: string,
    centro_votacion: string,
    tipo_voto: string
  ) {
    const updateQuery = `
      UPDATE politica
      SET id_empleado = ?, inscrito_psuv = ?, pertenece_movimiento_social = ?, carnet_patria_codigo = ?, 
          carnet_patria_serial = ?, centro_votacion = ?, tipo_voto = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        id_empleado,
        inscrito_psuv,
        pertenece_movimiento_social,
        carnet_patria_codigo,
        carnet_patria_serial,
        centro_votacion,
        tipo_voto,
        id,
      ]);
    } catch (error) {
      console.error("Error al actualizar la política:", error);
    }
  }

  // Método para eliminar una política
  public deletePolitica(id: number) {
    const deleteQuery = `
      DELETE FROM politica WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar la política:", error);
    }
  }
}

const politicaService = new PoliticaService();

export default politicaService;
