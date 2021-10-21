import React from 'react';
import '../pages/homepage/homepage.css';
import User from '../assets/images/user.svg';
import Location from '../assets/images/location.svg';
import Server from '../assets/images/Server.svg';

const Stat = () => {
    return (
        <div className="stat">
            <div className="stats">
                <img src={User} alt="The user icon" className="stat-icon"/>
                <div className="value">
                    <p>90+</p>
                    <p>Users</p>
                </div>
            </div>
            <div className="stats">
                <img src={Location} alt="The location icon" className="stat-icon"/>
                <div className="value">
                    <p>30+</p>
                    <p>Locations</p>
                </div>
            </div>
            <div className="stats">
                <img src={Server} alt="The server icon" className="stat-icon"/>
                <div className="value">
                    <p>50+</p>
                    <p>Servers</p>
                </div>
            </div>
        </div>
    )
}

export default Stat;