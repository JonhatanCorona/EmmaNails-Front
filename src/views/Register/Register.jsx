import React from "react";
import { useRegisterFormik } from "../../components/hook/useRegisterFormik.jsx";
import Footer from "../../components/Footer/Footer.jsx"
import "./Register.css" 

const Register = () => {
  const formik = useRegisterFormik();
  

  return (
    <>
    <div className="register-container">
      <h1 className="title-register">Registrate</h1>
      <form className="container-register" onSubmit={formik.handleSubmit}>
        <div className="container-input">
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        </div>

        <div className="container-input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
        </div>

        <div className="container-input">
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            name="birthdate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.birthdate}
          />
          {formik.touched.birthdate && formik.errors.birthdate && <div>{formik.errors.birthdate}</div>}
        </div>

        <div className="container-input">
          <label>N°Dni</label>
          <input
            type="number"
            name="nDni"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nDni}
          />
          {formik.touched.nDni && formik.errors.nDni && <div>{formik.errors.nDni}</div>}
        </div>

        <div className="container-input">
          <label>Nombre de Usuario(Apodo)</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}
        </div>

        <div className="container-input">
          <label >Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
        </div>

        <div className="container-input">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
