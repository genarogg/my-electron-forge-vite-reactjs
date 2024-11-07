import { ipcMain } from "electron";
import {solicitudPasantiaService} from "@model";

const addSolicitudPasantia = ipcMain.handle(
  "solicitud/addSolicitudPasantia",
  async (event, data) => {
    event.defaultPrevented;


    try {
      console.log("data", data);

      const {
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
      } = data.solicitud;

      solicitudPasantiaService.createSolicitudPasantia(
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
        motivo
      );

      return {
        message: "Solicitud de pasantía creada correctamente",
        type: "success",
      };
    } catch (error) {
      console.error("Error al crear la solicitud de pasantía:", error);
      throw error;
    }
  }
);

export default addSolicitudPasantia;