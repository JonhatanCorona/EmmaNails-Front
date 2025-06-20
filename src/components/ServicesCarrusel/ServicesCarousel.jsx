import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination" 
import styles from "./stylesCarousel.jsx"
import services from '../helpers/servicesCarousel.js';
import "./ServicesCarrusell.css"



const ServicesCarrusell = () => {
  return (
    <>
    <div className="container-caruosel px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto">

    <h1 className='title-carousel'> Nuestros Servicios </h1>
    <div
  className="w-full px-4 sm:px-6 md:px-8 lg:w-[74vw]"
>
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
  >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div style={styles.card}> 
            <h3>{service.name}</h3>
              <img src={service.image} alt={service.name} style={styles.image} className="w-full max-w-md h-auto object-contain rounded" />
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default ServicesCarrusell