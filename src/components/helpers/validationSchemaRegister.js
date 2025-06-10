import * as Yup from "yup";

export const validationSchemaRegister = Yup.object({
  name: Yup.string()
    .required("El campo nombre es requerido")
    .max(20, "El campo nombre tiene como máximo 20 caracteres"),

  email: Yup.string()
    .required("El campo email es requerido")
    .email("Formato de email inválido"),

  birthdate: Yup.string()
    .required("La fecha de nacimiento es obligatoria")
    .test("es-mayor-de-edad", "Debes tener al menos 18 años", (value) => {
      if (!value) return false;
      const fechaNacimiento = new Date(value);
      const hoy = new Date();
      const edadMinima = new Date(
        hoy.getFullYear() - 18,
        hoy.getMonth(),
        hoy.getDate()
      );
      return fechaNacimiento <= edadMinima;
    }),

  nDni: Yup.string()
    .required("El campo DNI es requerido")
    .matches(/^\d{7,10}$/, "Debe tener entre 7 y 10 dígitos"),

  username: Yup.string()
    .required("El campo usuario es obligatorio")
    .max(10, "Máximo 10 caracteres"),

  password: Yup.string()
    .required("La contraseña es obligatoria")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .test(
      "no-espacios",
      "La contraseña no puede contener espacios",
      (value) => !/\s/.test(value)
    ),
    confirmPassword: Yup.string()
    .required("Debes confirmar tu contraseña")
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
});
