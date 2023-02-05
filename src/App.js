import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import MainPage from "./components/MainPage";
import Explore from "./components/Explore";
import Form from "./components/form";
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
        <Route path="/main" element={<MainPage/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/form" element={<Form/>}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
