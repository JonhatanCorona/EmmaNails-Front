const Reservation = ({reservation}) => {



  return (
    <div>
    <h3>N° de Reserva: {reservation.id}</h3>
    <h3>Fecha: {reservation.date}</h3>
    <h3>Hora: {reservation.time}</h3>
    <h3>Servicio: {reservation.service}</h3>
    <h3 style={{ color: getStatusColor(reservation.status) }}>Estado: {reservation.status}</h3>
    <button disabled={reservation.status.toLowerCase() !== "active"}>Cancelar Reserva</button>
  </div>
  )
}

export default Reservation;

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "green";
    case "cancelled":
      return "red";
    case "completed":
      return "blue";
    default:
      return "gray";
  }
}; 