import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'


import LOGO  from "../../src/assets/tutor-logo.png"

 const Footer = () => {


  const handleFooterClick=()=>{
    window.scrollTo(0, 0);

  };
  return (
    <header className="header">
      
    <div className="main-div">
        <div className="col-3">
      <div  className="logo-container">
        <Link to="/">
          <img onClick={handleFooterClick} className="logo-image" src={LOGO} alt="tutor logo" />
        </Link>
      </div>
      </div>
      
      <div  className="col-9">
        <ul className='footer-ul'>
          <li>
            <Link onClick={handleFooterClick} to="/about"> AboutUs </Link>
          </li>
          <li>
            <Link onClick={handleFooterClick} to="/services"> Services </Link>
          </li>
          <li>
            <Link onClick={handleFooterClick} to="/reviews"> Reviews </Link>
          </li>
          <li>
            <div className="button-container-one">
             <button className="custom-button-one"> Become a Tutor </button>
            </div>
          </li>
          <li>
            <div className="button-container">
             <button className="custom-button"> Find a Tutor </button>
            </div>
          </li>
          <li>
            <div className='contact'>
            <h2>Contact</h2>
            <p>03321969500</p></div>
          </li>
        </ul>
        
      </div>
    </div>
  
  
</header>

);
};
export default Footer;
