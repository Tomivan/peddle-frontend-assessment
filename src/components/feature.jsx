import React from 'react';
import '../pages/homepage/homepage.css';
import Piano from '../assets/images/piano.png';

const Feature = () => {
    return(
        <div className="feature-section">
            <img src={Piano} alt="The piano" className="piano" />
            <div className="features">
                <h2>Features We Provide For You</h2>
                <p>Curabitur tempor justo non turpis malesuada cursus.<br /> 
                Mauris ac libero eu sem finibus lacinia nec pulvinar.</p>
                <div className="feature">
                    <div className="feature-text">
                        <span></span>
                        <p>Curabitur tempor justo</p>
                    </div>
                    <div className="feature-text">
                        <span></span>
                        <p>Curabitur tempor justo</p>
                    </div>
                    <div className="feature-text">
                        <span></span>
                        <p>Curabitur tempor justo</p>
                    </div>
                    <div className="feature-text">
                        <span></span>
                        <p>Curabitur tempor justo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;