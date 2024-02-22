import React from 'react'
import QaImage from '../assets/faq-img.png';
import PlusIcon from "../assets/plus-icon.png";
import "./QA.css";

 const QA = () => {
  return (
    <div className="qa-main-section">
    <div className='qa-main-heading'>
      <h2>Frequently Asked Questions</h2>
    </div>

    <div className="qa-content-container">
      <div className="qa-image-container">
        <img src={QaImage} alt="Question" className="question-image" />
      </div>

      <div className="qa-container">
        <div className="qa-content">
          <div className="heading-qa">
            <h3>Where Do Session Take Place </h3>
          </div>
          <div className="qa-icon">
            <button
              className="qa-image-button"
              onClick={() => console.log("Button Clicked")}
            >
              <img
                className="qa-button-img"
                src={PlusIcon}
                alt="Question Content"
              />
            </button>
          </div>
        </div>
        <div className="question-content">
          <p>
           
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default QA;