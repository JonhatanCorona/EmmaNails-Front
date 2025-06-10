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
      const success = await login(values.username, values.password);

      if (!success) {
        setErrors({ password: "Usuario y contraseña no coinciden" });
      }

      setSubmitting(false);
    },
  });
};
