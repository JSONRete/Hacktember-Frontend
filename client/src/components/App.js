import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav';
import Home from '../components/Home'; // Import your route components here
import Courses from '../components/Courses';
import Contact from '../components/Contact';
import Login from '../components/Login';
import About from '../components/About';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Specify your routes here */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;