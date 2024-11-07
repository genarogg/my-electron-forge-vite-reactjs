interface SolicitudPasantiaTypes {
  id: number;

  nombreEmpresa: string;
  direccionEmpresa: string;
  puntoDeReferencia: string;
  nombreYApellidoAquienDirigir: string;
  cargoAquienDirigir: string;
  telefonoEmpresa: string;

  // Informacion de las materias pendientes

  asignatura: string;
  docenteTutor: string;
  fecha: string;
  evaluacion: string;

  // Informacion del pasante
  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;

  fotoTipoDeCarnet: boolean;
  copiaDeCedula: boolean;
  copiaRIF: boolean;
  copiaDePartidaDeNacimiento: boolean;
  constanciaDeResidencia: boolean;

  carnetMilitar: boolean;
  certificadoDeSalud: boolean;
  examenMedico: boolean;
  cartaDePostulacion: boolean;
  sintesisCurricular: boolean;

  // status
  aprobado: boolean;
  motivo: string;

}

export default SolicitudPasantiaTypes;