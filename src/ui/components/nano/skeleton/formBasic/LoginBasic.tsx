import React, { useState, useContext } from "react";
import { ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { Input } from "@form";
import { CheckboxBasic, BtnSubmitBasic } from "@btn";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import { submitLogin } from "../fnForm";
// import { CloseElectron } from "@electron";

import { GlobalStateContext, ActionTypes } from "@redux";

interface LoginBasicProps {}

const LoginBasic: React.FC<LoginBasicProps> = () => {
  const { dispatch } = useContext(GlobalStateContext);

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    remember: false,
    loading: false,
    sesion: false,
    rool: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData({ ...formData, loading: true });
    submitLogin({ formData, setFormData });
  };

  if (formData.sesion) {
    dispatch({ type: ActionTypes.SET_ROLE, payload: formData.rool });
    dispatch({ type: ActionTypes.SET_EMAIL, payload: formData.userName });
    navigate("/dashboard");
  }

  return (
    <div className="container-form">
      <form className="form-basic login" onSubmit={onSubmit}>
        {/* <CloseElectron /> */}
        <h4 className="title">Iniciar Sesion</h4>
        <Input
          type="text"
          placeholder="Username"
          name="userName"
          icono={<BsEnvelopeFill />}
          value={formData.userName}
          valueChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          icono={<MdLock />}
          value={formData.password}
          valueChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <CheckboxBasic
          text="Recuerdame"
          valueChange={(e) =>
            setFormData({ ...formData, remember: e.target.checked })
          }
        />
        <BtnSubmitBasic text="Iniciar sesion" loading={formData.loading} />
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginBasic;
