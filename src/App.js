<<<<<<< HEAD
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
=======
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/main" element={<MainPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
>>>>>>> ec4186007401925d9f3c5907ecbc9eea71ca171a
  );
}

export default App;
