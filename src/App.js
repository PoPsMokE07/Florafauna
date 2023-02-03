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
  );
}

export default App;
