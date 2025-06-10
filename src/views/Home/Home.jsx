import React from 'react'
import ServicesCarousel from "../../components/ServicesCarrusel/ServicesCarousel";
import ReservationButtom from '../../components/Reservation/ReservationButtom'
import Footer from "../../components/Footer/Footer";



const Home = () => {
  return (
    <>
      <ServicesCarousel />
      < ReservationButtom/>
      <Footer />
    </>
  );
};

export default Home