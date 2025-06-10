import { useFormik } from "formik";
import { validationSchemaReservation } from "../helpers/validationSchemaReservation.js";
import axios from "axios";
import  useAuth  from "./useAuth.jsx";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import dotenv from 'dotenv';
dotenv.config();


export const useReservationFormik = () => {
  const API_URL = process.env.VITE_API_URL
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
          `${API_URL}/users/schedule`,
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
