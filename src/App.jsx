import { Route, Routes, useLocation } from "react-router-dom";
import fondoGeneral from "./assets/fondo3.jpg";
import fondoDashboard from "./assets/fondoDashboard.jpg"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Services from "./views/Services/Services";
import AboutUs from "./views/AboutUs/AboutUs";
import Dashboard from "./views/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";


function App() {
  const location = useLocation();

  const dashboardPaths = ["/dashboard"];

  const backgroundImage = dashboardPaths.some((path) => location.pathname.startsWith(path))
    ? fondoDashboard
    : fondoGeneral;

  return (
    <div
      style={{
   display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center bottom",
  backgroundRepeat: "no-repeat",
  width: "100%",
      }}
    >

      <Toaster
  position="bottom-right" 
  toastOptions={{
    style: {
      background: "transparent",
      color: "#000",
      border: "1px solid #000",
      boxShadow: "none",
    },
  }}
/>

      {!["/login", "/dashboard"].some((path) => location.pathname.startsWith(path)) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
