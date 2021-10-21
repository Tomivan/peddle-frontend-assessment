import React from 'react';
import '../pages/homepage/homepage.css';
import Peddle from '../assets/images/Peddle.svg';

const Nav = () => {

    return(
        <nav className="nav">
            <img src={Peddle} alt="The official peddle logo" className="logo"/>
            <ul>
                <li>About</li>
                <li>FAQs</li>
                <li>Pricing</li>
                <li>Testimonials</li>
            </ul>
            <div className="nav-right">
                <button className="sign-in">Sign In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </nav>
    )
}

export default Nav;