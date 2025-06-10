
import { useReservationFormik } from "../hook/useReservationFormik.jsx";
import "./Reservation.css"

const ReservationForm = () => {
  const formik = useReservationFormik();


  return (
    <>
    <div>
      <h1 className="title-reservations"> Reserva tu Cita </h1>
      <h4 className="title-reservation-nota">  ⚠️ Atención: Puedes reservar tu cita de lunes a viernes. ⏳ <br />
      🚫 No hay atención los sábados ni domingos. <br />
      ❌ Importante: Las citas no pueden ser canceladas el mismo día. Si necesitas cancelar, hazlo con anticipación. 📅✨ </h4>
      <form className="container-reservations" onSubmit={formik.handleSubmit}>
        <div className="container-input-reservation">
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date && <div>{formik.errors.date}</div>}
        </div>

        <div className="container-input-reservation">
          <label>Hora</label>
          <select
            name="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          >
            <option value="" disabled>Seleccione un horario</option>
            <option value="10 a 11 hrs">10:00 - 11:00 Hrs</option>
            <option value="11 a 12 hrs">11:00 - 12:00 Hrs</option>
            <option value="12 a 13 hrs">12:00 - 13:00 Hrs</option>
            <option value="13 a 14 hrs">13:00 - 14:00 Hrs</option>
            <option value="16 a 17 hrs">16:00 - 17:00 Hrs</option>
            <option value="17 a 18 hrs">17:00 - 18:00 Hrs</option>
            <option value="18 a 19 hrs">18:00 - 19:00 Hrs</option>
            <option value="19 a 20 hrs">19:00 - 20:00 Hrs</option>
          </select>
          {formik.touched.time && formik.errors.time && <div>{formik.errors.time}</div>}
        </div>

        <div className="container-input-reservation">
          <label> Servicio a Contratar </label>
          <input
            type="text"
            name="service"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.service}
          />
          {formik.touched.service && formik.errors.service && <div>{formik.errors.service}</div>}
        </div>


        <button type="submit" className="reservation-button"> Reservar Cita </button>
      </form>
    </div>
    </>
  );
};

export default ReservationForm;