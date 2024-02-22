import React from "react";
import About from "./About";
import Service from "./Service";
import HomeBanner from "../assets/home-banner-img.png";
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="home-main-div">
        
        <div className="home-content">
        <div className="side-bar"></div>
          
          <div className="home-card-cont">
          
            <h1>One-on-One Tutoring For Every Student</h1>
            <p>
              Get matched with the right tutor. A personalized learning
              experience.
            </p>
            
            <div className="home-button-content">
              <button className="home-button-one">Learn More</button>
              <button className="home-button-two">Find a Tutor</button>
            </div>
          </div>
          
          <div className="home-card-image">
            <img src={HomeBanner} alt="service-img" className="home-image" />
          </div>
        </div>
      </div>
      
      <About />
      <Service />
    </>
  );
};
export default Home;
