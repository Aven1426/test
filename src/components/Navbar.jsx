import React from "react";
import logo from "../assets/logo.png";
// import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <div>
      <nav className="backdrop-blur-lg bg-transparent w-full">
        <div className="nav-container flex justify-between items-center px-8 ">
          <div className="left p-2 flex items-center ">
            <img src={logo} alt="" width={50} height={50} />
            <h1 className="ml-2 font-oswald text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              HealthAndCare
            </h1>
          </div>
          <div className="right ">
            <ul className="flex flex-wrap font-normal">
              <li className="pr-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">
                <a href="#" className="">
                  Home
                </a>
              </li>
              <li className="pr-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">
                <a href="#">Artikel</a>
              </li>
              <li className="pr-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">
                <a href="#">About</a>
              </li>
              <li className="pr-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
