import * as Yup from "yup"; 


export const validationSchemaLogin = Yup.object({
  username: Yup.string()
    .required("El campo usuario es obligatorio")
    .max(10, "Máximo 10 caracteres"),

  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .test(
      "no-espacios",
      "La contraseña no puede contener espacios",
      (value) => !/\s/.test(value)
    ),
});