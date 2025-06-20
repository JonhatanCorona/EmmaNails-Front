import { createContext, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2"
import  canCancelReservation  from "../helpers/cancelReservation"
import toast from "react-hot-toast";


const AuthContext = createContext();
const API_URL = import.meta.env.VITE_API_URL

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [reservations, setReservations] = useState([]); 

    const register = async (values) =>{
        return await axios.post(`${API_URL}/users/register`, values, {
            headers: { "Content-Type": "application/json" }
    });
    }

const handleCancelReservation = async (reservationId, reservationDate) => {
  if (!canCancelReservation(reservationDate)) {
    toast.warning("Las reservas no pueden cancelarse el mismo día de la cita.");
    return;
  }

  toast(
    (t) => (
      <div className="flex flex-col gap-4">
        <p>¿Estás seguro de cancelar la reserva?</p>
        <div className="flex justify-end gap-2">
          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                // Cancelar reserva
                await axios.put(`${API_URL}/reservations/cancel/${reservationId}`, {
                  status: "Cancelled",
                });

                // ✅ Volver a cargar reservas
                const response = await axios.get(`${API_URL}/users/${user.id}`);
                setReservations(response.data.reservations);

                toast.success("Reserva cancelada con éxito");
                setMessage("Reserva cancelada con éxito");
              } catch (error) {
                toast.error("Error al cancelar la reserva");
              }
            }}
          >
            Sí, cancelar
          </button>
          <button
            className="px-3 py-1 rounded border"
            onClick={() => toast.dismiss(t.id)}
          >
            No, mantener
          </button>
        </div>
      </div>
    ),
    {
      duration: Infinity,
      position: "bottom-center",
      style: {
        background: "#fff",
        color: "#000",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        padding: "16px",
        minWidth: "280px",
      },
    }
  );
};

    const login = async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}/users/login`, {
                username,
                password
            });

            const data = response.data;

            if (data.login) {
                setUser(data.user);
               toast.success("Logueado Exitosamente!", {duration: 4000,});
                return true;
            } else {
                setMessage("Usuario y contraseña no coinciden");
                return false;
            }
        } catch (error) {
            setMessage("Error en la autenticación", error);
            return false;
        }
};

    const logout = () => {
        setUser(null); 
};
    

    return (
        <AuthContext.Provider value={{ user, login, logout, register, message, setReservations, reservations, handleCancelReservation  }}>
            {children}
        </AuthContext.Provider>
    );
};


export { AuthProvider, AuthContext };
