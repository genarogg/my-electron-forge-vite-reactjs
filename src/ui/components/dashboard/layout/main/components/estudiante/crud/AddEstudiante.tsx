import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import LayoutForm from "../../layoutForm/LayoutForm";
import { useSimpleNav } from "@components/state/useSimpleNav";
import { FaUser } from "react-icons/fa";

interface AddEstudianteProps {}

const AddEstudiante: React.FC<AddEstudianteProps> = () => {
  const [estudianteData, setEstudianteData] = useState({
    // informacion del usuario
    apellidos: "",
    nombres: "",
    sex: "",
    nacionalidad: "",

    ci: "",
    fecha_nacimiento: "",
    lugar_nacimiento: "",
    entd_federativa: "",

    plantel_de_procedencia: "",
    talla: "",
    peso: "",
    medidas: "",

    edad: "",
    lateralidad: "",
    talla_camisa: "",
    talla_pantalon: "",
    talla_zapato: "",
  });

  const [viaDeAccesoData, setViaDeAccesoData] = useState({
    via_de_acceso_al_lugar_donde_vive: "",
    reprecentante_legal: "",
    con_quien_vive: "",

    condicion_especial: "",
    observacion_de_condicion: "",

    el_estudiante_consume_medicamento: "",
    observacion_de_medicamento: "",
  });

  const { state, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      empleado: { ...estudianteData },

      usuario: state.email,
    };

    electron.ipcRenderer
      .invoke("estudiante/addEstudiante", newData)
      .then((result) => {
        if (result.type === "error") {
          notify({ type: result.type, message: result.message });
          return;
        }

        notify({ message: result.message, type: result.type });
        handleChangeContext(state.sub_context, "");
      })
      .finally(() => {});
  };

  const sex = [
    { value: "Masculino", label: "Masculino" },
    { value: "Femenino", label: "Femenino" },
  ];

  const nacionalidad = [
    { value: "Venezolano", label: "Venezolano" },
    { value: "Extranjero", label: "Extranjero" },
  ];

  return (
    <LayoutForm>
      <div className="container-form add-estudiante">
        <form
          className="form-basic"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <div className="container-info-user">
            <div className="title">
              <h4>Informacion del Personal</h4>
            </div>
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="apellidos"
              name="apellidos"
              value={estudianteData.apellidos}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  apellidos: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Nombres"
              name="nombres"
              value={estudianteData.nombres}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  nombres: e.target.value,
                })
              }
            />
            <SelectInput
              icono={<FaUser />}
              placeholder="sexo:"
              content={true}
              name="sexo"
              value={estudianteData.sex}
              valueChange={(e: any) =>
                setEstudianteData({ ...estudianteData, sex: e.value })
              }
              options={sex}
            />
            <SelectInput
              icono={<FaUser />}
              placeholder="nacionalidad:"
              content={true}
              name="nacionalidad"
              value={estudianteData.nacionalidad}
              valueChange={(e: any) =>
                setEstudianteData({
                  ...estudianteData,
                  nacionalidad: e.value,
                })
              }
              options={nacionalidad}
            />
            <Input
              type="number"
              icono={<FaUser />}
              placeholder="cedula de identidad"
              name="ci"
              value={estudianteData.ci}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  ci: e.target.value,
                })
              }
            />
            <Input
              type="date"
              placeholder="Fecha de Nacimiento"
              icono={<FaUser />}
              name="fecha_nac"
              hasContentState={true}
              value={estudianteData.fecha_nacimiento}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  fecha_nacimiento: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Lugar de Nacimiento"
              name="lugar_nacimiento"
              value={estudianteData.lugar_nacimiento}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  lugar_nacimiento: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Entidad Federativa"
              name="entd_federativa"
              value={estudianteData.entd_federativa}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  entd_federativa: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Plantel de Procedencia"
              name="plantel_de_procedencia"
              value={estudianteData.plantel_de_procedencia}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  plantel_de_procedencia: e.target.value,
                })
              }
            />
            <Input
              type="number"
              icono={<FaUser />}
              placeholder="Talla"
              name="talla"
              value={estudianteData.talla}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  talla: e.target.value,
                })
              }
            />
            <Input
              type="number"
              icono={<FaUser />}
              placeholder="Peso"
              name="peso"
              value={estudianteData.peso}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  peso: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Medidas"
              name="medidas"
              value={estudianteData.medidas}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  medidas: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Edad"
              name="edad"
              value={estudianteData.edad}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  edad: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Lateralidad"
              name="lateralidad"
              value={estudianteData.lateralidad}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  lateralidad: e.target.value,
                })
              }
            />
            <Input
              type="number"
              icono={<FaUser />}
              placeholder="Talla de Camisa"
              name="talla_camisa"
              value={estudianteData.talla_camisa}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  talla_camisa: e.target.value,
                })
              }
            />
            <Input
              type="number"
              icono={<FaUser />}
              placeholder="Talla de Pantalón"
              name="talla_pantalon"
              value={estudianteData.talla_pantalon}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  talla_pantalon: e.target.value,
                })
              }
            />
            <Input
              type="number"
              icono={<FaUser />}
              placeholder="Talla de Zapato"
              name="talla_zapato"
              value={estudianteData.talla_zapato}
              valueChange={(e) =>
                setEstudianteData({
                  ...estudianteData,
                  talla_zapato: e.target.value,
                })
              }
            />
          </div>

          <div className="container-info-vive">
            <div className="title">
              <h4>Informacion del Personal</h4>
            </div>
            <Input
              className="grid-2-columns"
              type="text"
              icono={<FaUser />}
              placeholder="Vía de acceso al lugar donde vive"
              name="via_de_acceso_al_lugar_donde_vive"
              value={viaDeAccesoData.via_de_acceso_al_lugar_donde_vive}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  via_de_acceso_al_lugar_donde_vive: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Representante Legal"
              name="reprecentante_legal"
              value={viaDeAccesoData.reprecentante_legal}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  reprecentante_legal: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Con quién vive"
              name="con_quien_vive"
              value={viaDeAccesoData.con_quien_vive}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  con_quien_vive: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Condición Especial"
              name="condicion_especial"
              value={viaDeAccesoData.condicion_especial}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  condicion_especial: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Observación de Condición"
              name="observacion_de_condicion"
              value={viaDeAccesoData.observacion_de_condicion}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  observacion_de_condicion: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="El estudiante consume medicamento"
              name="el_estudiante_consume_medicamento"
              value={viaDeAccesoData.el_estudiante_consume_medicamento}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  el_estudiante_consume_medicamento: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Observación de Medicamento"
              name="observacion_de_medicamento"
              value={viaDeAccesoData.observacion_de_medicamento}
              valueChange={(e) =>
                setViaDeAccesoData({
                  ...viaDeAccesoData,
                  observacion_de_medicamento: e.target.value,
                })
              }
            />
          </div>

          <div className="container-info-vive">
            <div className="title">
              <h4>Informacion del Personal</h4>
            </div>
          </div>
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddEstudiante;
