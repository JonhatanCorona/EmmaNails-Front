import React from 'react'
import "./Reservation.css"
import { Link } from 'react-router-dom'

export const ReservationButtom = () => {
return (
    <>
    <div className="contact-action">
    <h3 className="cta-message">
    "¡De las manos a los pies, la belleza que mereces! ✨ Reserva tu cita hoy y déjate consentir con nuestros servicios de manicura, pedicura y depilación. 💅💕"
    </h3>
    <Link to="/login" className="cta-button">📅 Reserva tu cita</Link>
    </div>
    </>
)
}


export default ReservationButtom