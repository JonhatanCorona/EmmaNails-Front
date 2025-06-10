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
    <div className='container-caruosel'>
    <h1 className='title-carousel'> Nuestros Servicios </h1>
    <div style={{width: "74vw" }}>
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
              <img src={service.image} alt={service.name} style={styles.image} />
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