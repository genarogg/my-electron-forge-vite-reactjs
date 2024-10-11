import React, { useEffect, useState } from "react";

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import EmpleadoTypes from "./configTablet/EmpleadoTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

interface EstudianteTableProps {
  nameTablet: string;
}

const EstudianteTable: React.FC<EstudianteTableProps> = ({}) => {
  const [estudiante, setEstudiante] = useState<EmpleadoTypes[]>([]);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        electron.ipcRenderer.invoke("estudiante/getEstudiante").then((data) => {
          if (data.type === "success") {
            setEstudiante(data.estudiantes);
          }
        });
      } catch (error) {
        console.error("Error al recuperar los datos de los empleados:", error);
      }
    };

    fetchEmpleado();
  }, []);

  const datos = [
    estudiante.length > 0 ? estudiante : staticDataFake,
    configTablet,
  ];

  return (
    <>
      <TabletTrabajador
        nameTabla={"Estudiante"}
        onClick={() => {}}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={"agregar estudiante"}
      />
    </>
  );
};

export default EstudianteTable;
