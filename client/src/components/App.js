import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav';
import Home from '../components/Home';
import Courses from '../components/Courses';
import Contact from '../components/Contact';
import Register from '../components/Register';
import About from '../components/About';
import VideoDetails from '../components/VideoDetails';
import Library from './Library';
import ChatBot from '../components/ChatBot';
import Footer from '../components/Footer'; 


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Specify your routes here */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:courseId" element={<VideoDetails />} />
        <Route path="/coursetest" element={<VideoDetails />} />
        <Route path="/library" element={<Library />}/>
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;