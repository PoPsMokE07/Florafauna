import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import bgimg from "../assets/bgimg.webp";

import InputControl from "../screens/InputControl";
import { auth } from "../Firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    
    <div class="h-full min-h-screen w-full bg-gradient-to-r flex items-center justify-center" style={{ backgroundImage: `url(${bgimg})` }}>
      <div class="min-w-48 h-auto w-auto bg-white shadow-md p-6 rounded-lg flex flex-col gap-6 ">
        <h1>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div class="flex flex-col gap-3">
          <b class="text-center font-bold text-red-500">{errorMsg}</b>
          <button class="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-500 cursor-pointer transition-all duration-100" onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p class="font-bold text-black">
            Already have an account?{" "}
            <span class="text-purple-600 font-bold text-lg hover:underline">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
