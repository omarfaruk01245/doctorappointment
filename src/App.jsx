import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";

import Appointment from "./pages/Appointment";
import MyAppointments from './pages/MyAppointments';
import Navbar from './componets/Navbar';
import Footer from "./componets/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10px]">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appoints" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
