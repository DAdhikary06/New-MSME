import { useState } from 'react';
// import './App.css';
import '@adminkit/core/dist/js/app.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import MainComponent from './components/MainComponents';
import toast, { Toaster } from 'react-hot-toast';
import AuthHandler from './utils/Authhandler';
import Company from './pages/Company';
import PrivateRouteNew from './utils/PrivateRouteNew';

function PrivateRoute({ element: Element, ...rest }) {
  return AuthHandler.loggedIn() ? <Element {...rest} /> : <Navigate to="/" />;
}


function App() {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={true} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRouteNew page={MainComponent} />} />
          <Route path="/company" element={<PrivateRouteNew page={Company} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;