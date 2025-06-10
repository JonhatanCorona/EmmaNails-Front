import { useFormik } from "formik";
import { validationSchemaReservation } from "../helpers/validationSchemaReservation.js";
import axios from "axios";
import  useAuth  from "./useAuth.jsx";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";


export const useReservationFormik = () => {

  const { user } = useAuth(); 
  const navigate = useNavigate();
  const memoizedUser = useMemo(() => user, [user]);

  useEffect(() => {
    console.log("Usuario autenticado:", memoizedUser);
  }, [memoizedUser]);

  return useFormik({
    initialValues: {
      date: "", 
      time: "",
      service: "",
    },
    validationSchema: validationSchemaReservation,
    onSubmit: async (values, { setSubmitting}) => {
      if (!memoizedUser || !memoizedUser.id) {
        console.error("Usuario no autenticado");
        return;
      }

      try {
        const reservationData = {
          ...values,
          date: values.date,
          userId: memoizedUser.id,
        };
        console.log("Datos enviados al backend:", reservationData);

        const response = await axios.post(
          "http://localhost:3000/reservations/schedule",
          reservationData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        alert("Reservacion Exitosa:", response);

        navigate("/dashboard/reservations");
      } catch (error) {
        console.error("Error al crear la reserva:", error);
      }

      setSubmitting(false);
    },
  });
};
