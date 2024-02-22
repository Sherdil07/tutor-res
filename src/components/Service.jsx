import React from "react";
import ServiceImageOne from "../assets/services-img1.png";
import ServiceImageTwo from '../assets/services-img2.png';
import ServiceImageThree from '../assets/services-img3.png';
import ServiceImageFour from '../assets/services-img4.png';
import './Service.css'
import QA from "./QA";

const Service = () => {
  return (
    <>
    <div className="service-main">
      <div className="service-heading">
        <h1> Our Services</h1>
      </div>
      <div className="service-card-main">
        <div className="service-content">
          <div className="service-card-cont">
            <h1>Subject Tutoring</h1>
            <p>
              We offer tutoring in all academic levels. Get paired with a tutor
              to get help preparing for exams, reviewing homework, or just
              strengthening your concepts!
            </p>
            <div className="service-button-content">
              {/* <button className="service-button-one">Learn More</button> */}
              <button className="service-button-two">Find a Tutor</button>
            </div>
          </div>
          <div className="service-card-image">
            <img className="service-image-card" src={ServiceImageOne} alt="service-img" />
          </div>
        </div>
        <div className="service-content">
          <div className="service-card-cont">
            <h1>College Planning</h1>
            <p>
              Work alongside college counselors and successful university
              students to help plan for the journey ahead and maximum your
              changes of getting into your dream schools.
            </p>
            <div className="service-button-content">
              {/* <button className="service-button-one">Learn More</button> */}
              <button className="service-button-two">Find a Tutor</button>
            </div>
          </div>
          <div className="service-card-image">
            <img className="service-image-card" src={ServiceImageTwo} alt="service-img" />
          </div>
        </div>
        <div className="service-content">
            

          <div className="service-card-cont">
            <h1>Test Prep</h1>
            <p>
              We will help you achieve your target scores in the SAT, ACT,
              and/or PSAT through practice exams and comprehensive review!
            </p>
            <div className="service-button-content">
              {/* <button className="service-button-one">Learn More</button> */}
              <button className="service-button-two">Find a Tutor</button>
            </div>
          </div>
          <div className="service-card-image">
            <img className="service-image-card" src={ServiceImageThree} alt="service-img" />
          </div>
          
        </div>
        <div className="service-content">
          <div className="service-card-cont">
            <h1 >Become a tutor</h1>
            <p>
              We’re always looking to expand our team in all subjects! Please
              apply if you are interested and in high school or above!
            </p>
            <div className="service-button-content">
             
              <button className="service-button-two-tutor">Become a Tutor</button>
            </div>
          </div>
          <div className="service-card-image">
            <img className="service-image-card" src={ServiceImageFour} alt="service-img" />
          </div>
        </div>
      </div>
    </div>
    <QA/>
    </>
  );
};
export default Service;
