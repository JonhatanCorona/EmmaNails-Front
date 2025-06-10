import React from 'react'
import servicios from "../../assets/servicios.jpeg"
import "./Services.css"
import ReservationButtom from '../../components/Reservation/ReservationButtom'
import Footer from "../../components/Footer/Footer"

const Services = () => {
  return (
    <div>
    <h1 className='title-service'> Nuestros Servicios</h1>
    <img className='img-service' src={servicios}/>
    <ReservationButtom/>
    <Footer />
</div>
  )
}

export default Services