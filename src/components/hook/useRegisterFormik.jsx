import { useFormik } from "formik";
import { validationSchemaRegister } from "../helpers/validationSchemaRegister.js"
import { useNavigate } from "react-router-dom";

import useAuth from "./useAuth.jsx";
import toast from "react-hot-toast";


export const useRegisterFormik = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  return useFormik({
    initialValues: {
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchemaRegister,
    onSubmit: async (values, { setSubmitting}) => {
      try {

        const { confirmPassword: _confirmPassword, ...formData } = values;

        console.log("Datos enviados:", formData);

      register(values)

      toast.success("Registrado Exitosamente!", {duration: 4000,});
        navigate("/login")
      } catch (error) {
        console.error("Error:", error.message);
        console.error("Error al registrar:", error.response?.data || error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });
};
