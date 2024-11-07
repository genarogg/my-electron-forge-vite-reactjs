import { SQL } from "sql-template-strings";

export const tablaSolicitudPasantia = SQL`
  CREATE TABLE IF NOT EXISTS solicitud_pasantia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombreEmpresa TEXT NOT NULL,
    direccionEmpresa TEXT NOT NULL,
    puntoDeReferencia TEXT NOT NULL,
    nombreYApellidoAquienDirigir TEXT NOT NULL,
    cargoAquienDirigir TEXT NOT NULL,
    telefonoEmpresa TEXT NOT NULL,
    asignatura TEXT NOT NULL,
    docenteTutor TEXT NOT NULL,
    fecha TEXT NOT NULL,
    evaluacion TEXT NOT NULL,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    cedula TEXT NOT NULL,
    telefono TEXT NOT NULL,
    fotoTipoDeCarnet BOOLEAN NOT NULL,
    copiaDeCedula BOOLEAN NOT NULL,
    copiaRIF BOOLEAN NOT NULL,
    copiaDePartidaDeNacimiento BOOLEAN NOT NULL,
    constanciaDeResidencia BOOLEAN NOT NULL,
    carnetMilitar BOOLEAN NOT NULL,
    certificadoDeSalud BOOLEAN NOT NULL,
    examenMedico BOOLEAN NOT NULL,
    cartaDePostulacion BOOLEAN NOT NULL,
    sintesisCurricular BOOLEAN NOT NULL,
    aprobado BOOLEAN NOT NULL,
    motivo TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;