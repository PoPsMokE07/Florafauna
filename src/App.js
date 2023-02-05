import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Main from "./screens/Main";
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

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
