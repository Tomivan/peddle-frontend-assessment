import React from 'react';
import '../pages/homepage/homepage.css';
import Left from '../assets/images/left.svg';
import Right from '../assets/images/right.png';

const Subscribe = () => {
    return(
        <div className="subscribe">
            <div className="arrows">
                <img src={Left} alt="the left arrow" className="left-arrow"/>
                <img src={Right} alt="the right arrow" />
            </div>
            <div className="subscribe-section">
                <div className="section-text">
                    <h2>Subscribe Now For <br /> Get Special Features</h2>
                    <p>Praesent mollis lobortis nisl nec laoreet.</p>
                </div>
                <button className="subscribe-now">Subscribe Now</button>
            </div>
        </div>
    )
}

export default Subscribe;