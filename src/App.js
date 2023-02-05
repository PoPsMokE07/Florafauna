import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./components/Main";
import MainPage from "./components/MainPage";
import Form from "./components/form";
import Explore from "./components/Explore";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Main />} />
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
