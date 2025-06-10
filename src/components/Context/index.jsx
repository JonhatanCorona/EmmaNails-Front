import React, { createContext, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2"
import  canCancelReservation  from "../helpers/cancelReservation"


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [reservations, setReservations] = useState([]); 

    const register = async (values) =>{
        return await axios.post("https://emmanails-back-production.up.railway.app/users/register", values, {
            headers: { "Content-Type": "application/json" }
    });
    }

    const handleCancelReservation = async (reservationId, reservationDate) => {
        console.log("Fecha de reserva recibida:", reservationDate);
        
        if (!canCancelReservation(reservationDate)) {
        Swal.fire(
            "No se puede cancelar",
            "Las reservas no pueden cancelarse el mismo día de la cita.",
            "warning"
        );
        return;
        }

        Swal.fire({
        title: "¿Estás seguro de cancelar la reserva?",
        showDenyButton: true,
        confirmButtonText: "Sí, cancelar",
        denyButtonText: "No, mantener",
        }).then(async (result) => {
        if (result.isConfirmed) {
            try {
            await axios.put(`https://emmanails-back-production.up.railway.app/reservations/cancel/${reservationId}`, {
            status: "Cancelled",
            });

            Swal.fire("Reserva cancelada con éxito", "", "success");
            setMessage("Reserva cancelada con éxito");
            
            const response = await axios.get(`https://emmanails-back-production.up.railway.app/users/${user.id}`);
            setReservations(response.data.reservations);
            } catch (error) {
            Swal.fire("Error al cancelar la reserva", error.message, "error");
            setMessage("Hubo un problema al cancelar la reserva.");
            }
        } else if (result.isDenied) {
            Swal.fire("La reserva no fue cancelada", "", "info");
        }
        }).catch((error) => {
        Swal.fire("Error", error.message, "error");
        });
    };

    const login = async (username, password) => {
        try {
            const response = await axios.post("https://emmanails-back-production.up.railway.app/users/login", {
                username,
                password
            });

            const data = response.data;

            if (data.login) {
                setUser(data.user);
                setMessage("Inicio de sesión exitoso");
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
