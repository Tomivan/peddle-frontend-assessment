import React from 'react';
import '../pages/homepage/homepage.css';
import Pricing3 from '../assets/images/pricing3.png';
import Pricing2 from '../assets/images/pricing2.png';
import Pricing1 from '../assets/images/pricing1.png';
import Mark from '../assets/images/mark.svg';

const Plan = () => {
    return(
        <div className="plan">
            <h2>Choose Your Plan</h2>
            <p>Let's choose the package that is best for you and explore it happily and <br/>cheerfully.</p>
            <div className="plan-section">
                <div className="plan-card">
                    <img src={Pricing3} alt="The free plan section" className="price"/>
                    <h5>Free Plan</h5>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <p>Free</p>
                    <button className="select">Select</button>
                </div>
                <div className="plan-card">
                    <img src={Pricing2} alt="The standard plan section" className="price"/>
                    <h5>Standard Plan</h5>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <p>$9/mo</p>
                    <button className="select">Select</button>
                </div>
                <div className="plan-card">
                    <img src={Pricing1} alt="The premium plan section" className="price"/>
                    <h5>Premium Plan</h5>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <div className="plan-text">
                        <img src={Mark} alt="The mark Icon" className="mark"/>
                        <p>Mauris sem neque</p>
                    </div>
                    <p>$12/mo</p>
                    <button className="select-1">Select</button>
                </div>
            </div>
        </div>
    )
}

export default Plan;