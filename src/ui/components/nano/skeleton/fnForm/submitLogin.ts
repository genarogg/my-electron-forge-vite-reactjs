import { notify } from "@nano";


interface submitLogin {
  formData: {
    userName: string;
    password: string;
    remember: boolean;
    loading: boolean;
    sesion: boolean;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      password: string;
      remember: boolean;
      loading: boolean;
      sesion: boolean;
    }>
  >;
}

const submitLogin = ({ formData, setFormData }: submitLogin) => {
  const newData = {
    userName: formData.userName,
    password: formData.password,
  };

  window.electron.ipcRenderer
    .invoke("auth/login", newData)
    .then((result) => {
      console.log(result);

      if (result.type === "error") {
        notify({ type: result.type, message: result.message });
        return;
      }

      

      notify({ type: result.type, message: result.message });
      setFormData((prevFormData) => ({
        ...prevFormData,
        sesion: true,
      }));
    })
    .finally(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        loading: false,
      }));
    });
};

export default submitLogin;
