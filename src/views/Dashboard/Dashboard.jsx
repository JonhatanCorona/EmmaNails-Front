import React from 'react'
import { Navigate, Outlet, Route, Routes} from 'react-router-dom';
import MiCuenta from '../../views/MyAccount/MyAccount';
import Reservations from '../Reservation/Reservations';
import ReservationForm from '../../components/Reservation/ReservationForm';
import NavbarDashboard from '../../components/Navbar/NavbarDashboard';

const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <div>
      <Routes>
        <Route path="/" element={<Navigate to="myaccount" replace />} />
        <Route path="myaccount" element={<MiCuenta />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="reservationsForm" element={<ReservationForm />} />
      </Routes>
    </div>
    </>
  );
};

export default Dashboard;