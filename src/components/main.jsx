import React from 'react';
import '../pages/homepage/homepage.css';
import WebDeveloper from '../assets/images/web-developer.png';

const Main = () => {
    return(
        <main className="main">
            <div className="main-left">
                <h1>We Are Everything We<br /> Aspire To Be</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci < br/>
                   condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis<br/>
                   eget ipsum malesuada dignissim
                </p>
                <button className="start-button">Get Started</button>
            </div>
            <img src={WebDeveloper} className="main-image" alt="The web developer" />
        </main>
    )
}

export default Main;