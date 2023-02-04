import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../screens/InputControl";
import { auth } from "../Firebase";
import bgimg from "../assets/bgimg.webp";
import main from './Main';


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/main");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div class="h-full min-h-screen w-full bg-gradient-to-r flex items-center justify-center" style={{ backgroundImage: `url(${bgimg})` }}>
      <div class="min-w-48 h-auto w-auto bg-white shadow-md p-6 rounded-lg flex flex-col gap-6 ">
        <h1>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div class="flex flex-col gap-4">
        <div class="text-red-700 font-bold text-center text-xs">{errorMsg}</div>
          <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full w-full" disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p class="font-bold text-black">
            Already have an account?{" "}
            <span class="font-bold text-purple-600 hover:text-purple-700 underline" >
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
