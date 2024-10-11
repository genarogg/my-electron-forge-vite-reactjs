import React, { useState } from "react";
import { Input, SelectInput } from "@form";
import { BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import LayoutForm from "../../layoutForm/LayoutForm";
import { useSimpleNav } from "@components/state/useSimpleNav";

interface AddUsuarioProps {}

const AddUsuario: React.FC<AddUsuarioProps> = () => {
  const [usuarioData, setUsuarioData] = useState({
    // informacion del usuario
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    rool: "",
    ci: "",
    cargo_institucional: "",
  });

  const rool = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  const { state, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    electron.ipcRenderer
      .invoke("estudiante/addEstudiante", usuarioData)
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
              <h4>Informacion del usuario</h4>
            </div>
                 <Input
              type="text"
              icono={<FaUser />}
              placeholder="Nombres"
              name="nombres"
              value={usuarioData.nombres}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  nombres: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Apellidos"
              name="apellidos"
              value={usuarioData.apellidos}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  apellidos: e.target.value,
                })
              }
            />
            <Input
              type="email"
              icono={<FaUser />}
              placeholder="Email"
              name="email"
              value={usuarioData.email}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  email: e.target.value,
                })
              }
            />
            <Input
              type="password"
              icono={<FaUser />}
              placeholder="Password"
              name="password"
              value={usuarioData.password}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  password: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Role"
              name="role"
              value={usuarioData.rool}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  role: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Cédula de Identidad"
              name="ci"
              value={usuarioData.ci}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  ci: e.target.value,
                })
              }
            />
            <Input
              type="text"
              icono={<FaUser />}
              placeholder="Cargo Institucional"
              name="cargo_institucional"
              value={usuarioData.cargo_institucional}
              valueChange={(e) =>
                setUsuarioData({
                  ...usuarioData,
                  cargo_institucional: e.target.value,
                })
              }
            />
          </div>
          </div>

          <div className="container-footer">
            <BtnSubmitBasic text="Agregar Usuario" />
          </div>
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddUsuario;
