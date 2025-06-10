import React from 'react'
import { MISION , VISION, VALORES } from '../../components/helpers/nosotros.js' 
import "./AboutUs.css"
import ReservationButtom from '../../components/Reservation/ReservationButtom.jsx';
import Footer from "../../components/Footer/Footer"

const AboutUs = () => {

const valoresArray = VALORES ? VALORES.trim().split("\n").filter((line) => line.trim() !== "") : [];

    return (
    <div className="about-container">

        <h1 className="container-nosotros">Quiénes Somos</h1>

        <div className="container-myv">
        <div className="mision-container">
            <h2>Misión</h2>
            <div className="mision">{MISION}</div>
        </div>
        <div className="vision-container">
            <h2>Visión</h2>
            <div className="vision">{VISION}</div>
        </div>
        </div>

        <div className="container-valores">
        <h2>Valores</h2>
        <ul>
            {valoresArray.map((valor, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: valor }}></li>
            ))}
        </ul>
        </div>

        <div className="contact-container">
        <div className="contact-info">
            <h2 className="container-ubicacion">📍 Cómo Ubicarnos</h2>
            <h4>EmmaNails Studio96</h4>
            <p>📍 1234 Bellaire Ave, Houston, TX 77001</p>
            <p>📞 +1 (512) 985-0569</p>
        </div>

        <ReservationButtom/>
        
        </div>   
        <Footer/>
    </div>
    );
};

export default AboutUs;
