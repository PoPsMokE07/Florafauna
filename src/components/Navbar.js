import tree from "../assets/tree.png";
import user from "../assets/user.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar() {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  return (
    <div className="flex justify-around w-11/12 m-auto text-slate-300 p-5">
      <div className=" flex w-2/12">
        <img className="w-12 mb-1 mr-2" src={tree} alt="tree"></img>
        <h1 className="text-slate-50 mt-1 font-alice text-3xl">Florafauna</h1>
      </div>
      <div className="w-6/12">
        <ul className="flex text-lg justify-around mt-2 p-2">
        <li>
            <a
              className="hover:text-white"
              href="https://devpost.com/"
            >
              Devpost
            </a>
          </li>
          
          <li>
            <a
              className="hover:text-white"
              href="https://github.com/PoPsMokE07/Florafauna"
            >
              Documentation
            </a>
          </li>
        </ul>
      </div>
      <div>
        {userDetails ? (
          <Link className="font-serif" to={"/"}>
            
          </Link>
        ) : (
          <Link className="font-serif" to={"/login"}>
            <button className=" text-lg flex p-3 text-slate-50 border-2 rounded-lg border-slate-500 border-solid hover:bg-slate-50  hover:text-green-900 transition-all">
              <img className="mr-2 hover:" src={user}></img> Login/Signup
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;