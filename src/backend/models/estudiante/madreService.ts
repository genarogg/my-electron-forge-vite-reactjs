import dbManager from "@dbManager";

class MadreService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva entrada en la tabla madre
  public createMadre(data: any) {
    const insertQuery = `
      INSERT INTO madre (
        apellidos, nombres, nacionalidad, cedula, urb_br, direccion_habitacion_av, calle, casa_apartamento, numero_habitacion, referencia, ciudad, parroquia, estado, movil_casa, telefono_personal, telefono_trabajo, email, nivelAcademico, profesion, lugarTrabajo, cargo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        data.apellidos,
        data.nombres,
        data.nacionalidad,
        data.cedula,
        data.urb_br,
        data.direccion_habitacion_av,
        data.calle,
        data.casa_apartamento,
        data.numero_habitacion,
        data.referencia,
        data.ciudad,
        data.parroquia,
        data.estado,
        data.movil_casa,
        data.telefono_personal,
        data.telefono_trabajo,
        data.email,
        data.nivelAcademico,
        data.profesion,
        data.lugarTrabajo,
        data.cargo,
      ]);
    } catch (error) {
      console.error("Error al crear la entrada en la tabla madre:", error);
      throw error;
    }
  }

  // Método para obtener una entrada por su ID
  public getMadreById(id: number) {
    const selectQuery = `
      SELECT * FROM madre WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener la entrada en la tabla madre:", error);
    }
  }

  // Método para obtener todas las entradas
  public getAllMadres() {
    const selectQuery = `
      SELECT * FROM madre;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener las entradas en la tabla madre:", error);
    }
  }

  // Método para actualizar una entrada
  public updateMadre(id: number, data: any) {
    const updateQuery = `
      UPDATE madre
      SET apellidos = ?, nombres = ?, nacionalidad = ?, cedula = ?, urb_br = ?, direccion_habitacion_av = ?, calle = ?, casa_apartamento = ?, numero_habitacion = ?, referencia = ?, ciudad = ?, parroquia = ?, estado = ?, movil_casa = ?, telefono_personal = ?, telefono_trabajo = ?, email = ?, nivelAcademico = ?, profesion = ?, lugarTrabajo = ?, cargo = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        data.apellidos,
        data.nombres,
        data.nacionalidad,
        data.cedula,
        data.urb_br,
        data.direccion_habitacion_av,
        data.calle,
        data.casa_apartamento,
        data.numero_habitacion,
        data.referencia,
        data.ciudad,
        data.parroquia,
        data.estado,
        data.movil_casa,
        data.telefono_personal,
        data.telefono_trabajo,
        data.email,
        data.nivelAcademico,
        data.profesion,
        data.lugarTrabajo,
        data.cargo,
        id,
      ]);
    } catch (error) {
      console.error("Error al actualizar la entrada en la tabla madre:", error);
    }
  }

  // Método para eliminar una entrada
  public deleteMadre(id: number) {
    const deleteQuery = `
      DELETE FROM madre WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar la entrada en la tabla madre:", error);
    }
  }
}

const madreService = new MadreService();

export default madreService;