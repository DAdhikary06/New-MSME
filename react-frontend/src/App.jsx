import { useState } from 'react'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import MainComponent from './components/MainComponents'
import toast, { Toaster } from 'react-hot-toast';



function Index() {
  

  return (
    <>
    <Router>
    <Toaster position="top-center" reverseOrder={true} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MainComponent />} />

      </Routes>
    </Router>
     
    </>
  )
}

export default Index
