import React from "react";

interface DemoEnviarProps {}

const DemoEnviar: React.FC<DemoEnviarProps> = () => {
  const newData = {
    estudiante: {
      apellidos: "   sdf",
      nombres: "61",
      sex: "Masculino",
      nacionalidad: "Venezolano",
      ci: "156",
      fecha_nacimiento: "0001-06-15",
      lugar_nacimiento: "156",
      entd_federativa: "15615",
      plantel_de_procedencia: "6156",
      talla: "15615",
      peso: "156",
      medidas: "15",
      edad: "1515",
      lateralidad: "15",
      talla_camisa: "1515",
      talla_pantalon: "15",
      talla_zapato: "15156",
    },
    viaDeAcceso: {
      via_de_acceso_al_lugar_donde_vive: "1515",
      reprecentante_legal: "156",
      con_quien_vive: "1515",
      condicion_especial: "615",
      observacion_de_condicion: "615165",
      el_estudiante_consume_medicamento: "156",
      observacion_de_medicamento: "156156",
    },
    madre: {
      apellidos: "156",
      nombres: "156156",
      nacionalidad: "543",
      cedula: "6615",
      urb_br: "615156",
      direccion_habitacion_av: "15",
      calle: "615615",
      casa_apartamento: "1561",
      numero_habitacion: "5156",
      referencia: "615615",
      ciudad: "15",
      parroquia: "1156",
      estado: "15615",
      movil_casa: "15",
      telefono_personal: "1515",
      telefono_trabajo: "15",
      email: "1515@sdf.scdf",
      nivelAcademico: "156",
      profesion: "15156",
      lugarTrabajo: "15",
      cargo: "15156",
    },
    padre: {
      apellidos: "15",
      nombres: "15615",
      nacionalidad: "adf",
      cedula: "11",
      urb_br: "1",
      direccion_habitacion_av: "15156",
      calle: "15",
      casa_apartamento: "15156",
      numero_habitacion: "156",
      referencia: "156",
      ciudad: "156156",
      parroquia: "156",
      estado: "156156",
      movil_casa: "151",
      telefono_personal: "165156",
      telefono_trabajo: "1",
      email: "1515@sdf.sf",
      nivelAcademico: "1515",
      profesion: "15",
      lugarTrabajo: "1515",
      cargo: "1515",
    },
    representante: {
      parentesco: "15",
      apellidos: "1515",
      nombres: "1515",
      nacionalidad: "adsfa",
      cedula: "515",
      urb_br: "1515",
      fecha_nacimiento: "0024-03-23",
      direccion_habitacion_av: "15",
      calle: "1515",
      casa_apartamento: "1515",
      numero_habitacion: "151",
      referencia: "515",
      ciudad: "1515",
      parroquia: "15",
      estado: "1515",
      telefono_habitacion: "151",
      telefono_personal: "515",
      email: "1656511@dsfsfd",
      profesion: "65",
      lugarTrabajo: "56",
      telefono_trabajo: "165",
      cargo: "16",
    },
    periodoEscolar: {
      inicio_periodo_escolar: "0651-01-05",
      fin_periodo_escolar: "0001-05-06",
    },
    usuario: { usuario: "demo@demo.com" },
  };

  const treeData = {
    madre: newData.madre,
    padre: newData.padre,
    representante: newData.representante,
    alumno: {
      ...newData.estudiante,
      ...newData.viaDeAcceso,
      ...newData.periodoEscolar,
      ...newData.usuario,
    },
  };
  return (
    <>
      <button
        onClick={() => {
          electron.ipcRenderer.invoke("estudiante/addEstudiante", treeData);
        }}
      >
        EnviarDemo
      </button>
    </>
  );
};

export default DemoEnviar;
