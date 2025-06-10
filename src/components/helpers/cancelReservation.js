/**
 * @param {(string|Date)} reservationDate 
 * @returns {boolean} 
 */
const canCancelReservation = (reservationDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalizamos "hoy" al inicio del día

    const reservation = new Date(reservationDate);
    
    if (isNaN(reservation.getTime())) {
        console.error("Error: Fecha de reserva inválida:", reservationDate);
        return false; 
    }

    reservation.setHours(0, 0, 0, 0); // Normalizamos la reserva también

    // Se puede cancelar si la reserva es hoy o después
    return reservation >= today;
};

export default canCancelReservation;