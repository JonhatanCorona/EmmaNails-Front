import React from 'react';
import  useAuth  from "../../components/hook/useAuth"
import "./Myaccount.css"
import logo from "../../assets/Logo.png"


const MiCuenta = () => {
  const { user } = useAuth();

  return (

    <>
    <div>
    <h2 className='title-misDatos'> Mis Datos </h2>
    <div className='container-myaccount'>
    <div className='container-misDatos'>
      <p>Nombre: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Dni: {user?.nDni}</p>
      <p>Fecha de Nacimiento: {user?.birthdate}</p>
    </div>
    <div>
      <img src={logo} className='logo-img-myaccount' alt="Logo Emma Nails" />
    </div>
    </div>
    </div>
    </>
  );
};

export default MiCuenta;
