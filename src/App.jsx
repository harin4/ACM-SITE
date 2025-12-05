import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import Sidebar from "./components/Sidebar";
import Home from './Pages/Home'
import About from './Pages/About'
import Events from './Pages/Events'
import Team from './Pages/Team'
import Gallery from './Pages/Gallery'
import Joinus from './Pages/Joinus'
import Contactus from './Pages/Contactus'
import './App.css'

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onMenuClick={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/joinus" element={<Joinus />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>

    </div>
  );
}