import dbManager from "@dbManager";

class SolicitudPasantiaService {
  private db: any;

  constructor() {
    this.db = dbManager.getDatabase();
  }

  // Método para crear una nueva solicitud de pasantía
  public createSolicitudPasantia(
    nombreEmpresa: string,
    direccionEmpresa: string,
    puntoDeReferencia: string,
    nombreYApellidoAquienDirigir: string,
    cargoAquienDirigir: string,
    telefonoEmpresa: string,
    asignatura: string,
    docenteTutor: string,
    fecha: string,
    evaluacion: string,
    nombre: string,
    apellido: string,
    cedula: string,
    telefono: string,
    fotoTipoDeCarnet: boolean,
    copiaDeCedula: boolean,
    copiaRIF: boolean,
    copiaDePartidaDeNacimiento: boolean,
    constanciaDeResidencia: boolean,
    carnetMilitar: boolean,
    certificadoDeSalud: boolean,
    examenMedico: boolean,
    cartaDePostulacion: boolean,
    sintesisCurricular: boolean,
    aprobado: boolean,
    motivo: string
  ) {
    const insertQuery = `
      INSERT INTO solicitud_pasantia (
        nombreEmpresa, direccionEmpresa, puntoDeReferencia, nombreYApellidoAquienDirigir, 
        cargoAquienDirigir, telefonoEmpresa, asignatura, docenteTutor, fecha, evaluacion, 
        nombre, apellido, cedula, telefono, fotoTipoDeCarnet, copiaDeCedula, copiaRIF, 
        copiaDePartidaDeNacimiento, constanciaDeResidencia, carnetMilitar, certificadoDeSalud, 
        examenMedico, cartaDePostulacion, sintesisCurricular, aprobado, motivo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
      this.db.run(insertQuery, [
        nombreEmpresa,
        direccionEmpresa,
        puntoDeReferencia,
        nombreYApellidoAquienDirigir,
        cargoAquienDirigir,
        telefonoEmpresa,
        asignatura,
        docenteTutor,
        fecha,
        evaluacion,
        nombre,
        apellido,
        cedula,
        telefono,
        fotoTipoDeCarnet,
        copiaDeCedula,
        copiaRIF,
        copiaDePartidaDeNacimiento,
        constanciaDeResidencia,
        carnetMilitar,
        certificadoDeSalud,
        examenMedico,
        cartaDePostulacion,
        sintesisCurricular,
        aprobado,
        motivo,
      ]);
    } catch (error) {
      console.error("Error al crear la solicitud de pasantía:", error);
      throw error;
    }
  }

  // Método para obtener una solicitud de pasantía por su ID
  public getSolicitudPasantiaById(id: number) {
    const selectQuery = `
      SELECT * FROM solicitud_pasantia WHERE id = ?;
    `;

    try {
      return this.db.get(selectQuery, [id]);
    } catch (error) {
      console.error("Error al obtener la solicitud de pasantía:", error);
    }
  }

  // Método para obtener todas las solicitudes de pasantía
  public getAllSolicitudesPasantia() {
    const selectQuery = `
      SELECT * FROM solicitud_pasantia;
    `;

    try {
      return this.db.all(selectQuery);
    } catch (error) {
      console.error("Error al obtener las solicitudes de pasantía:", error);
    }
  }

  // Método para actualizar una solicitud de pasantía
  public updateSolicitudPasantia(
    id: number,
    nombreEmpresa: string,
    direccionEmpresa: string,
    puntoDeReferencia: string,
    nombreYApellidoAquienDirigir: string,
    cargoAquienDirigir: string,
    telefonoEmpresa: string,
    asignatura: string,
    docenteTutor: string,
    fecha: string,
    evaluacion: string,
    nombre: string,
    apellido: string,
    cedula: string,
    telefono: string,
    fotoTipoDeCarnet: boolean,
    copiaDeCedula: boolean,
    copiaRIF: boolean,
    copiaDePartidaDeNacimiento: boolean,
    constanciaDeResidencia: boolean,
    carnetMilitar: boolean,
    certificadoDeSalud: boolean,
    examenMedico: boolean,
    cartaDePostulacion: boolean,
    sintesisCurricular: boolean,
    aprobado: boolean,
    motivo: string
  ) {
    const updateQuery = `
      UPDATE solicitud_pasantia
      SET nombreEmpresa = ?, direccionEmpresa = ?, puntoDeReferencia = ?, nombreYApellidoAquienDirigir = ?, 
          cargoAquienDirigir = ?, telefonoEmpresa = ?, asignatura = ?, docenteTutor = ?, fecha = ?, 
          evaluacion = ?, nombre = ?, apellido = ?, cedula = ?, telefono = ?, fotoTipoDeCarnet = ?, 
          copiaDeCedula = ?, copiaRIF = ?, copiaDePartidaDeNacimiento = ?, constanciaDeResidencia = ?, 
          carnetMilitar = ?, certificadoDeSalud = ?, examenMedico = ?, cartaDePostulacion = ?, 
          sintesisCurricular = ?, aprobado = ?, motivo = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?;
    `;

    try {
      this.db.run(updateQuery, [
        nombreEmpresa,
        direccionEmpresa,
        puntoDeReferencia,
        nombreYApellidoAquienDirigir,
        cargoAquienDirigir,
        telefonoEmpresa,
        asignatura,
        docenteTutor,
        fecha,
        evaluacion,
        nombre,
        apellido,
        cedula,
        telefono,
        fotoTipoDeCarnet,
        copiaDeCedula,
        copiaRIF,
        copiaDePartidaDeNacimiento,
        constanciaDeResidencia,
        carnetMilitar,
        certificadoDeSalud,
        examenMedico,
        cartaDePostulacion,
        sintesisCurricular,
        aprobado,
        motivo,
        id,
      ]);
    } catch (error) {
      console.error("Error al actualizar la solicitud de pasantía:", error);
    }
  }

  // Método para eliminar una solicitud de pasantía
  public deleteSolicitudPasantia(id: number) {
    const deleteQuery = `
      DELETE FROM solicitud_pasantia WHERE id = ?;
    `;

    try {
      this.db.run(deleteQuery, [id]);
    } catch (error) {
      console.error("Error al eliminar la solicitud de pasantía:", error);
    }
  }
}

const solicitudPasantiaService = new SolicitudPasantiaService();

export default solicitudPasantiaService;