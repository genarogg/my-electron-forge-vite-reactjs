import React, { useEffect, useState } from "react";

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import UsuarioTypes from "./configTablet/UsuarioTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

interface UsuarioTableProps {
  nameTablet: string;
}

const UsuarioTable: React.FC<UsuarioTableProps> = () => {
  const [usuario, setUsuarios] = useState<UsuarioTypes[]>([]);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        electron.ipcRenderer.invoke("usuarios/getUsuarios").then((data) => {
          if (data.type === "success") {
            setUsuarios(data.usuarios);
          }
        });
      } catch (error) {
        console.error("Error al recuperar los datos de los usuarios:", error);
      }
    };

    fetchEmpleado();
  }, []);

  const datos = [usuario.length > 0 ? usuario : staticDataFake, configTablet];

  return (
    <>
      <TabletTrabajador
        nameTabla={"Usuarios"}
        onClick={() => {}}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={"agregar usuario"}
      />
    </>
  );
};

export default UsuarioTable;
