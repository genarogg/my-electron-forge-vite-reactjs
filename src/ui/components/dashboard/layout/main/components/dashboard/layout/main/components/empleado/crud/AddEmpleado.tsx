import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import LayoutForm from "../../layoutForm/LayoutForm";
import { useSimpleNav } from "@components/state/useSimpleNav";

import { FaUser } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { BiSolidDirections } from "react-icons/bi";

import { FaUserGraduate } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { PiIntersectSquareBold } from "react-icons/pi";
import { SiAzurefunctions } from "react-icons/si";
import { RiFunctionAddLine } from "react-icons/ri";

import { FaUserInjured } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";

import { FaUsers } from "react-icons/fa";
import { ImMoveUp } from "react-icons/im";
import { FaSlidersH } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";

interface AddEmpleadoProps {
  tipo_empleado: string;
}

const AddEmpleado: React.FC<AddEmpleadoProps> = () => {
  const [formData, setFormData] = useState({
    // informacion del usuario
    nombres: "",
    apellidos: "",
    ci: "",
    fecha_nac: "",
    telefono: "",
    correo_electronico: "",
    direccion_de_habitacion: "",

    // informacion del empleo
    titulo_obtenido: "",
    titulo_pregrado: "",
    area_docente_especialista: "",

    fecha_ingreso_mppe: "",
    codigo_cargo: "",
    dependencia_nominal: "",
    estatus: "",

    reposo_permiso: "",
    anos_servicio: "",
    grado_seccion: "",
    funcion_trabajo: "",
    acarigua: "",
    observaciones: "",
  });

  const [formDataPolitica, setFormDataPolitica] = useState({
    inscrito_psuv: "",
    pertenece_movimiento_social: "",
    carnet_patria_codigo: "",
    carnet_patria_serial: "",
    centro_votacion: "",
    tipo_voto: "",
  });

  const estatusData = [
    { value: "Activo", label: "Activo" },
    { value: "Inactivo", label: "Inactivo" },
  ];

  const politicaData = [
    { value: "Si", label: "Si" },
    { value: "No", label: "No" },
  ];

  const tipoVoto = [
    { value: "DURO", label: "DURO" },
    { value: "BLANDO", label: "BLANDO" },
    { value: "NULO ", label: "NULO " },
  ];

  const { state, handleChangeContext } = useSimpleNav();

  console.log("state", state);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      empleado: { ...formData },
      politica: { ...formDataPolitica },
      tipo_empleado: state.sub_context,
      usuario: state.email,
    };

    electron.ipcRenderer
      .invoke("empleado/addEmpleado", newData)
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

  return (
    <LayoutForm>
      <div className="container-form add-empleado">
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
              placeholder="Nombres"
              name="nombres"
              value={formData.nombres}
              valueChange={(e) =>
                setFormData({ ...formData, nombres: e.target.value })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Apellidos"
              name="apellidos"
              value={formData.apellidos}
              valueChange={(e) =>
                setFormData({ ...formData, apellidos: e.target.value })
              }
            />
            <Input
              type="number"
              icono={<FaIdCard />}
              placeholder="Cédula de Identidad"
              name="ci"
              value={formData.ci}
              valueChange={(e) =>
                setFormData({ ...formData, ci: e.target.value })
              }
            />
            <Input
              type="date"
              placeholder="Fecha de Nacimiento"
              icono={<MdDateRange />}
              name="fecha_nac"
              hasContentState={true}
              value={formData.fecha_nac}
              valueChange={(e) =>
                setFormData({ ...formData, fecha_nac: e.target.value })
              }
            />

            <Input
              type="number"
              icono={<FaPhoneFlip />}
              placeholder="Teléfono"
              name="telefono"
              value={formData.telefono}
              valueChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
            />

            <Input
              type="email"
              icono={<BsEnvelopeFill />}
              placeholder="Correo Electrónico"
              name="correo_electronico"
              value={formData.correo_electronico}
              valueChange={(e) =>
                setFormData({ ...formData, correo_electronico: e.target.value })
              }
            />

            <Input
              type="text"
              icono={<BiSolidDirections />}
              placeholder="Dirección de Habitación"
              name="direccion_de_habitacion"
              value={formData.direccion_de_habitacion}
              valueChange={(e) =>
                setFormData({
                  ...formData,
                  direccion_de_habitacion: e.target.value,
                })
              }
              className="grid-2-columns"
            />
          </div>

          <div className="container-info-empleo">
            <div className="title">
              <h4>Informacion del Empleo</h4>
            </div>

            <Input
              required={false}
              type="text"
              icono={<FaUserGraduate />}
              placeholder="Título Obtenido"
              name="titulo_obtenido"
              value={formData.titulo_obtenido}
              valueChange={(e) =>
                setFormData({ ...formData, titulo_obtenido: e.target.value })
              }
            />

            <Input
              required={false}
              type="text"
              icono={<FaUserGraduate />}
              placeholder="Título de Pregrado"
              name="titulo_pregrado"
              value={formData.titulo_pregrado}
              valueChange={(e) =>
                setFormData({ ...formData, titulo_pregrado: e.target.value })
              }
            />

            <Input
              required={false}
              type="text"
              icono={<FaUserTie />}
              placeholder="Área Docente Especialista"
              name="area_docente_especialista"
              value={formData.area_docente_especialista}
              valueChange={(e) =>
                setFormData({
                  ...formData,
                  area_docente_especialista: e.target.value,
                })
              }
            />

            <Input
              required={false}
              type="date"
              hasContentState={true}
              icono={<MdDateRange />}
              placeholder="Fecha de Ingreso al MPPE"
              name="fecha_ingreso_mppe"
              value={formData.fecha_ingreso_mppe}
              valueChange={(e) =>
                setFormData({ ...formData, fecha_ingreso_mppe: e.target.value })
              }
            />

            <Input
              required={false}
              type="text"
              icono={<MdHomeRepairService />}
              placeholder="Años de Servicio"
              name="anos_servicio"
              value={formData.anos_servicio}
              valueChange={(e) =>
                setFormData({ ...formData, anos_servicio: e.target.value })
              }
            />

            <Input
              required={false}
              type="text"
              icono={<MdOutlineWorkspacePremium />}
              placeholder="Código de Cargo"
              name="codigo_cargo"
              value={formData.codigo_cargo}
              valueChange={(e) =>
                setFormData({ ...formData, codigo_cargo: e.target.value })
              }
            />
            <Input
              required={false}
              type="text"
              icono={<GoWorkflow />}
              placeholder="Dependencia Nominal"
              name="dependencia_nominal"
              value={formData.dependencia_nominal}
              valueChange={(e) =>
                setFormData({
                  ...formData,
                  dependencia_nominal: e.target.value,
                })
              }
            />
            <Input
              required={false}
              type="text"
              icono={<PiIntersectSquareBold />}
              placeholder="grado seccion"
              name="grado_seccion"
              value={formData.grado_seccion}
              valueChange={(e) =>
                setFormData({
                  ...formData,
                  grado_seccion: e.target.value,
                })
              }
            />

            <Input
              required={false}
              type="text"
              icono={<SiAzurefunctions />}
              placeholder="funcion trabajo"
              name="funcion_trabajo"
              value={formData.funcion_trabajo}
              valueChange={(e) =>
                setFormData({
                  ...formData,
                  funcion_trabajo: e.target.value,
                })
              }
            />

            <Input
              required={false}
              type="text"
              icono={<RiFunctionAddLine />}
              placeholder="acarigua"
              name="acarigua"
              value={formData.acarigua}
              valueChange={(e) =>
                setFormData({
                  ...formData,
                  acarigua: e.target.value,
                })
              }
            />

            <SelectInput
              icono={<FaArtstation />}
              placeholder="Estatus:"
              content={true}
              name="estatus"
              value={formData.estatus}
              valueChange={(e: any) =>
                setFormData({ ...formData, estatus: e.value })
              }
              options={estatusData}
            />

            <Input
              required={false}
              type="text"
              icono={<FaUserInjured />}
              placeholder="Reposo o Permiso"
              name="reposo_permiso"
              value={formData.reposo_permiso}
              valueChange={(e) =>
                setFormData({ ...formData, reposo_permiso: e.target.value })
              }
            />
          </div>

          <div className="container-info-politica">
            <div className="title">
              <h4>Informacion del Politica</h4>
            </div>

            <SelectInput
              icono={<FaUsers />}
              placeholder="Inscrito en el PSUV"
              content={true}
              name="inscrito_psuv"
              value={formDataPolitica.inscrito_psuv}
              valueChange={(e: any) =>
                setFormDataPolitica({
                  ...formDataPolitica,
                  inscrito_psuv: e.value,
                })
              }
              options={politicaData}
            />
            <Input
              type="text"
              icono={<ImMoveUp />}
              placeholder="Pertenece a Movimiento Social"
              name="pertenece_movimiento_social"
              value={formDataPolitica.pertenece_movimiento_social}
              valueChange={(e) =>
                setFormDataPolitica({
                  ...formDataPolitica,
                  pertenece_movimiento_social: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaIdCard />}
              placeholder="Código del Carnet de la Patria"
              name="carnet_patria_codigo"
              value={formDataPolitica.carnet_patria_codigo}
              valueChange={(e) =>
                setFormDataPolitica({
                  ...formDataPolitica,
                  carnet_patria_codigo: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaIdCard />}
              placeholder="Serial del Carnet de la Patria"
              name="carnet_patria_serial"
              value={formDataPolitica.carnet_patria_serial}
              valueChange={(e) =>
                setFormDataPolitica({
                  ...formDataPolitica,
                  carnet_patria_serial: e.target.value,
                })
              }
            />

            <SelectInput
              icono={<FaSlidersH />}
              placeholder="Tipo de Voto"
              content={true}
              name="tipo_voto"
              value={formDataPolitica.tipo_voto}
              valueChange={(e: any) =>
                setFormDataPolitica({ ...formDataPolitica, tipo_voto: e.value })
              }
              options={tipoVoto}
            />

            <Input
              required={false}
              type="text"
              icono={<BiSolidInstitution />}
              placeholder="Centro de Votación"
              name="centro_votacion"
              value={formDataPolitica.centro_votacion}
              valueChange={(e) =>
                setFormDataPolitica({
                  ...formDataPolitica,
                  centro_votacion: e.target.value,
                })
              }
            />
          </div>

          <div className="container-footer">
            <div className="title">
              <h4>Observaciones</h4>
            </div>

            <Input
              required={false}
              className="input-observaciones"
              type="text"
              placeholder=""
              name="observaciones"
              value={formData.observaciones}
              valueChange={(e) =>
                setFormData({ ...formData, observaciones: e.target.value })
              }
            />
            <BtnSubmitBasic text="Agregar Empleado" loading={false} />
          </div>
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddEmpleado;
