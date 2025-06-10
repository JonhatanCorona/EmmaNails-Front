import { useEffect, useState } from 'react'
import "./Reservations.css"
import  useAuth  from '../../components/hook/useAuth';
import axios from 'axios';




const Reservations = () => {
  const { user,  handleCancelReservation, reservations, setReservations } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL
  useEffect(() => {
    if (!user?.id) return;

    const obtenerReservas = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_URL}/users/${user.id}`);
        setReservations(data.reservations || []); 
      } catch (err) {
        setError("Hubo un problema al cargar las reservas. Intenta nuevamente.",err);
      } finally {
        setLoading(false);
      }
    };
  
    obtenerReservas();
  }, [user?.id, setReservations]);


  if (loading) return <p>Cargando reservas...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  

  // Función para definir el color según el estado
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "green";
      case "pending": return "orange";
      case "canceled": return "red";
      default: return "black";
    }
  };

  return (
<>
    <div>
      <h2 className='title-misReservas'>Mis Reservas</h2>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div className='container-misReservas' key={reservation.id}>
            <h3 className='numeroReservas'>N° de Reserva: {reservation.id}</h3>
            <h3 className='fechaReservas'>Fecha: {reservation.date}</h3>
            <h3 className='horasReservas'>Hora: {reservation.time}</h3>
            <h3 className='serviciosReservas'>Servicio: {reservation.service}</h3>
            <h3 className='estadoReservas'style={{ color: getStatusColor(reservation.status) }}>
              Estado: {reservation.status}
            </h3>
            <button  className="cancel-button" 
            disabled={reservation.status.toLowerCase() !== "active"}
            onClick={() => handleCancelReservation(reservation.id, reservation.date)}>
              Cancelar Reserva
            </button>
          </div>
        ))
      ) : (
        <p lassName="no-reservations">No tienes reservas aún.</p>
      )}
    </div>
    </>
  );
}

export default Reservations;