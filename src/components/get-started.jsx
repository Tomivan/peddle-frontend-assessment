import React from 'react';
import '../pages/homepage/homepage.css';
import Spotify from '../assets/images/spotify.png';
import Reddit from '../assets/images/reddit.png';
import Netflix from '../assets/images/netflix.png';
import Discord from '../assets/images/discord.png';
import Amazon from '../assets/images/amazon.png';

const GetStarted = () => {
    return(
        <div className="get-started">
            <h2>Get Started With<br/> Paddle Today</h2>
            <p>Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante<br /> egestas ullamcorper</p>
            <button className="start">Start Today</button>
            <div className="socials">
                <img src={Netflix} alt="The official netflix logo" className="social-icon"/>
                <img src={Reddit} alt="The official reddit logo" className="social-icon"/>
                <img src={Amazon} alt="The official amazon logo" className="social-icon"/>
                <img src={Discord} alt="The official discord logo" className="social-icon"/>
                <img src={Spotify} alt="The official spotify logo" className="social-icon"/>
            </div>
        </div>
    )
}

export default GetStarted;