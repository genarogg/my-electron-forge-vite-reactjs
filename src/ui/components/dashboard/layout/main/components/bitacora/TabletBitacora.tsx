interface TabletBitacoraProps {}

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import React, { useEffect, useState } from "react";

import bitacoraColumnDefs from "./configTablet/configTablet";
import BitacoraTypes from "./configTablet/BitacoraTypes";
import staticDataFake from "./configTablet/staticDataFake";

const TabletBitacora: React.FC<TabletBitacoraProps> = () => {
  const [bitacora, setBitacora] = useState<BitacoraTypes[]>([]);

  useEffect(() => {
    const fetchBitacora = async () => {
      electron.ipcRenderer.invoke("bitacora/get").then((data) => {
        try {
          if (data.type === "success") {
            setBitacora(data.bitacora);
          } else {
            console.error(
              "Error al recuperar los datos de los docentes:",
              data
            );
          }
        } catch (error) {
          console.error("Error al recuperar los datos de los docentes:", error);
        }
      });
    };

    fetchBitacora();
  }, []);

  const datos = [
    bitacora.length > 0 ? bitacora : staticDataFake,
    bitacoraColumnDefs,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla={"bitacora"}
        onClick={() => {}}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={"bitacora"}
      />
    </>
  );
};

export default TabletBitacora;
