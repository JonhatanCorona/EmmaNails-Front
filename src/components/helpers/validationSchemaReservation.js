import * as Yup from "yup";
import { isWeekend } from "date-fns";


const normalizeDate = (date) => {
  if (!date) return null;
  const utcDate = new Date(date);
  return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
};

const today = normalizeDate(new Date());

export const validationSchemaReservation = Yup.object({
  date: Yup.date()
    .transform((value, originalValue) => normalizeDate(originalValue))
    .min(today, "No puedes elegir una fecha pasada")
    .test(
      "weekday",
      "No puedes elegir sábado ni domingo",
      (value) => value && !isWeekend(value) 
    )
    .required("La fecha de la reserva es obligatoria"),

  time: Yup.string().required("La hora de la reserva es obligatoria"),

  service: Yup.string()
    .required("El campo servicio es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),
});