import React from 'react'
import './Review.css'
import ReviewLogo from '../assets/review-icon.png'

 const Review = () => {
  return (
    <>
    <div className='above-content-review'>
        <div>
            <h1>Happy Clients </h1>
            <div className="happy-class-button">
                <button className='btn-happy'>Leave a Review</button>
            </div>

           
            </div> 

    </div>
    <div className='card-div-main'>
    <div className='review-cards-main'>

        <div className='review-card-content'>
            <p>
                Awesome 
            </p>
            <div className='review-content'>
                <h2>
                    Luis Test
                </h2>
                <div>
                    <img src={ReviewLogo} alt="" />
                </div>
            </div>

        </div>
        <div className='review-card-content'>
            <p>
                Awesome 
            </p>
            <div className='review-content'>
                <h2>
                    Luis Test
                </h2>
                <div>
                    <img src={ReviewLogo} alt="" />
                </div>
            </div>

        </div>
        <div className='review-card-content'>
            <p>
                Awesome 
            </p>
            <div className='review-content'>
                <h2>
                    Luis Test
                </h2>
                <div>
                    <img src={ReviewLogo} alt="" />
                </div>
            </div>

        </div>
        <div className='review-card-content'>
            <p>
                Awesome 
            </p>
            <div className='review-content'>
                <h2>
                    Luis Test
                </h2>
                <div>
                    <img src={ReviewLogo} alt="" />
                </div>
            </div>

        </div>
        </div>
    </div>

    </>
  )
}
export default Review;