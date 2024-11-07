import React, { useEffect, useState } from "react";

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import SolicitudPasantiaTypes from "./configTablet/SolicitudPasantiaTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

interface SolicitudPasantiaTableProps {
  nameTablet: string;
}

const SolicitudPasantia: React.FC<SolicitudPasantiaTableProps> = ({}) => {
  const [solicitudPasante, setsolicitudPasante] = useState<SolicitudPasantiaTypes[]>([]);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        electron.ipcRenderer.invoke("pasantia/getSolicitud").then((data) => {
          if (data.type === "success") {
            setsolicitudPasante(data.solicitudPasantes);
          }
        });
      } catch (error) {
        console.error("Error al recuperar los datos de los empleados:", error);
      }
    };

    fetchEmpleado();
  }, []);

  const datos = [
    solicitudPasante.length > 0 ? solicitudPasante : staticDataFake,
    configTablet,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla={"Solicitud de pasantia"}
        onClick={() => {}}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={"agregar solicitud"}
      />
    </>
  );
};

export default SolicitudPasantia;
