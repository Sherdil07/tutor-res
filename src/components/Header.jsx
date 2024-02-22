import { Link } from "react-router-dom";


import { useState } from "react";

import LOGO from "../../src/assets/tutor-logo.png";
import MoblieLogo from "../assets/mobile-icon.png";

import "./Header.css";

export const Header = () => {
 
const [menuOpen ,setMenuOpen]=useState('false')

  
  return (
    <header className="header">
      

      {/* second header */}
      <div className="main-div-header">
        <div className="col-3">
          <div className="logo-container">
            <Link to="/">
              <img className="logo-image" src={LOGO} alt="tutor logo" />
            </Link>
          </div>
        </div>

        <div className="col-9">
         
          <ul className={` header-ul ${menuOpen?"open":""}` }>
            <li className="header-ul-li">
              <Link to="/about"> AboutUs </Link>
            </li>
            <li className="header-ul-li">
              <Link to="/services"> Services </Link>
            </li>
            <li className="header-ul-li">
              <Link to="/reviews"> Reviews </Link>
            </li>
            <li className="header-ul-li">
              <div className="button-container">
                <button className="custom-button"> Find a Tutor </button>
              </div>
            </li>
            
          
            
          </ul>
          
          
            
        </div>
        <div className="menu" onClick={()=>{
              setMenuOpen(!menuOpen)
            }}>
          
          <button className="menu-button">
            <img src={MoblieLogo} alt="" />
          </button>
          
        </div>
      </div>
    </header>
  );
};
export default Header;
