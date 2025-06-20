import { useFormik } from "formik";
import { validationSchemaLogin } from "../helpers/validationSchemaLogin.js";
import  useAuth  from "../../components/hook/useAuth.jsx"; 

export const useLoginFormik = () => {
  const { login } = useAuth();

  return useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
   onSubmit: async (values, { setSubmitting, setErrors }) => {
  console.log("Enviando datos:", values);
  const trimmedUsername = values.username.trim();
  const trimmedPassword = values.password.trim();

  const success = await login(trimmedUsername, trimmedPassword);
  if (!success) {
    setErrors({ password: "Usuario y contraseña no coinciden" });
  }
  setSubmitting(false);
},
  });
};
