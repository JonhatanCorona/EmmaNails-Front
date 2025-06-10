import React from 'react'
import logo from "../../assets/Logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className="Container">
        <nav>
          <ul className="Navbar">
            <li>
              <Link to="/" className="Link">Inicio</Link>
            </li>
            <li>
              <Link to="/about" className="Link">Quienes Somos</Link>
            </li>
            <li>
              <Link to="/services" className="Link">Nuestros Servicios</Link>
            </li>
            <li>
              <Link to="/register" className="Link">Regístrate</Link>
            </li>
            <li>
              <Link to="/login" className="Link">Iniciar Sesión</Link>
            </li>
          </ul>
        </nav>

      </div>

      <div className="emma-nails">
        <div className="title-navbar">
          <img src={logo} className="logo-img" alt="Logo" />
          <div className="text-container">
            <p className="title-text">EmmaNails</p>
            <p className="title-text">Studio96</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar