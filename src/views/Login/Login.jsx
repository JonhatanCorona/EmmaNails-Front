import React, { useEffect}  from 'react';
import { useLoginFormik } from '../../components/hook/useLoginFormik.jsx';
import { Link, useNavigate } from 'react-router-dom';
import "../Login/Login.css"
import useAuth  from "../../components/hook/useAuth"


const Login = () => {
  const { user, message } = useAuth(); // Obtén el usuario y el mensaje de login
  const formik = useLoginFormik();
  const navigate = useNavigate()


  useEffect(() => {
    if (user) {
      navigate("/dashboard"); 
    }
  }, [user, navigate]);

  return (
    <div>
      <h1 className="title-login" style={{ paddingTop: "10rem" }}> BIENVENIDO </h1>
      {message && <p style={{ color: "green", textAlign: "center" }}>{message}</p>} 
      <form className="container-login" style={{ marginTop: "5rem" }}onSubmit={formik.handleSubmit}>
        <div className="container-input-login">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <div style={{ color: 'red' }}>{formik.errors.username}</div>
          )}
        </div>

        <div className="container-input-login">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="login-button">Iniciar Sesion</button>
        <div style={{ textAlign: "center" }}>No tiene usuario</div>
        <Link to= "/register" className="login-button"> Registrate Aqui </Link>
      </form>
    </div>
  );
};

export default Login;
