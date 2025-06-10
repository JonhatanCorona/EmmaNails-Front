import React from 'react'
import logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom';
import "./Navbar.css"
import useAuth from '../hook/useAuth';


const NavbarDashboard = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout(); 
    window.location.href = "/"; 
  };


  return (
    <>
    <div className='navbar-container-dasboard'>
      <nav className='navbar-dasboard'>
        <ul className='narvar-dasboard-link'>
          <li><Link to="/dashboard/myAccount" className="narvar-dasboard-link"> Mi Cuenta </Link></li>
          <li><Link to="/dashboard/reservations" className="narvar-dasboard-link"> Mis Reservaciones </Link></li>
          <li><Link to="/dashboard/reservationsForm" className="narvar-dasboard-link"> Reserva tu Cita </Link></li>
        </ul>
      </nav>

      <div>
        <div className='title-navbar-dasboard'>
          <img src={logo} className='logo-img-reservation' alt="Logo Emma Nails" />  
          <div className='text-container-dasboard'>
            <p className='title-text-dasboard'>{user?.name}</p>
          </div>
        </div>
        <div>
        <button className="logout-button"
      onClick={handleLogout}>
      Cerrar Sesión
    </button>
        </div>
      </div>
    </div>
    </>
  );
};


export default NavbarDashboard;