import React, { useEffect, useState } from "react";

import TabletTrabajador from "@components/tablet/TabletTrabajador";
import EmpleadoTypes from "./configTablet/AsistenciaTypes";
import configTablet from "./configTablet/configTablet";
import staticDataFake from "./configTablet/staticDataFake";

import AddAsistencia from "./crud/AddAsistencia";

import { BtnNormalBasic } from "@btn";

interface AsistenciaTableProps { }

const AsistenciaTable: React.FC<AsistenciaTableProps> = () => {
  const registrarUnaAsistencia = (id: any) => {
    console.log("isActive", isActive);
    document.getElementById(id)!.classList.toggle("active");
    setIsActive(!isActive);
  };

  const [isActive, setIsActive] = useState(false);

  const [empleados, setEmpleado] = useState<EmpleadoTypes[]>([]);

  useEffect(() => {
    const fetchEmpleado = async () => {
      try {
        electron.ipcRenderer.invoke("asisgencia/getAsistencia").then((data) => {
          if (data.type === "success") {
            setEmpleado(data.asistencias);
          }
        });
      } catch (error) {
        console.error("Error al recuperar los datos de los empleados:", error);
      }
    };

    fetchEmpleado();
  }, []);

  const datos = [
    empleados.length > 0 ? empleados : staticDataFake,
    configTablet,
  ];

  const btnHeader = () => {
    return (
      <div className="btnHeader">
        <BtnNormalBasic
          onClick={() => {
            registrarUnaAsistencia("asideEntrada");
          }}
        >
          <span>registrar entrada</span>
        </BtnNormalBasic>
        <BtnNormalBasic
          onClick={() => {
            registrarUnaAsistencia("asideAlmuerzo");
          }}
        >
          <span>registrar almuerzo</span>
        </BtnNormalBasic>
        <BtnNormalBasic
          onClick={() => {
            registrarUnaAsistencia("asideSalida");
          }}
        >
          <span>registrar salida</span>
        </BtnNormalBasic>
      </div>
    );
  };

  return (
    <>
      <TabletTrabajador
        nameTabla="Asistencia"
        onClick={() => { }}
        rowData={datos[0]}
        columnDefs={datos[1]}
        ir={"Asistencia"}
        btnHeader={btnHeader()}
      />
      <div className={`addAsistencia aside`} id="asideEntrada">
        <AddAsistencia
          fn={() => {
            registrarUnaAsistencia("asideEntrada");
          }}
          tipoAction="entrada"
        />
      </div>
      <div className={`addAsistencia aside`} id="asideAlmuerzo">
        <AddAsistencia
          fn={() => {
            registrarUnaAsistencia("asideAlmuerzo");
          }}
          tipoAction="almuerzo"
        />
      </div>
      <div className={`addAsistencia aside`} id="asideSalida">
        <AddAsistencia
          fn={() => {
            registrarUnaAsistencia("asideSalida");
          }}
          tipoAction="salida"
        />
      </div>
    </>
  );
};

export default AsistenciaTable;
