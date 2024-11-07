import { SQL } from "sql-template-strings";

export const tablaSolicitudPasantia = SQL`
  CREATE TABLE IF NOT EXISTS solicitud_pasantia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombreEmpresa TEXT NOT NULL DEFAULT '',
    direccionEmpresa TEXT NOT NULL DEFAULT '',
    puntoDeReferencia TEXT NOT NULL DEFAULT '',
    nombreYApellidoAquienDirigir TEXT NOT NULL DEFAULT '',
    cargoAquienDirigir TEXT NOT NULL DEFAULT '',
    telefonoEmpresa TEXT NOT NULL DEFAULT '',
    asignatura TEXT NOT NULL DEFAULT '',
    docenteTutor TEXT NOT NULL DEFAULT '',
    fecha TEXT NOT NULL DEFAULT '',
    evaluacion TEXT NOT NULL DEFAULT '',
    nombre TEXT NOT NULL DEFAULT '',
    apellido TEXT NOT NULL DEFAULT '',
    cedula TEXT NOT NULL DEFAULT '',
    telefono TEXT NOT NULL DEFAULT '',
    fotoTipoDeCarnet BOOLEAN NOT NULL DEFAULT 0,
    copiaDeCedula BOOLEAN NOT NULL DEFAULT 0,
    copiaRIF BOOLEAN NOT NULL DEFAULT 0,
    copiaDePartidaDeNacimiento BOOLEAN NOT NULL DEFAULT 0,
    constanciaDeResidencia BOOLEAN NOT NULL DEFAULT 0,
    carnetMilitar BOOLEAN NOT NULL DEFAULT 0,
    certificadoDeSalud BOOLEAN NOT NULL DEFAULT 0,
    examenMedico BOOLEAN NOT NULL DEFAULT 0,
    cartaDePostulacion BOOLEAN NOT NULL DEFAULT 0,
    sintesisCurricular BOOLEAN NOT NULL DEFAULT 0,
    aprobado BOOLEAN NOT NULL DEFAULT 0,
    motivo TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`;