import React from 'react';
import Peddle from '../assets/images/Peddle.svg';
import '../pages/homepage/homepage.css';

const Footer = () => {
    return( 
        <div className="footer">
            <div className="footer-left">
                <img src={Peddle} alt="The official peddle logo" className="footer-logo" />
                <p>Praesent mollis lobortis nisl nec laoreet. Duis<br /> 
                euismod nisl nec ante egestas ullamcorper.<br/> 
                Duis id mauris consequat, ultrices ligula at,<br/> 
                laoreet mag.</p>
            </div>
            <div className="footer-right">
                <div className="right-section">
                    <p className="footer-p">Product</p>
                    <p>Praesent</p>
                    <p>laoreet</p>
                    <p>laoreet</p>
                    <p>server</p>
                </div>
                <div className="right-section">
                    <p className="footer-p">Product</p>
                    <p>Marvis</p>
                    <p>Aenean</p>
                    <p>linsean</p>
                    <p>lingula</p>
                </div>
                <div className="right-section">
                    <p className="footer-p">Product</p>
                    <p>Ultrices</p>
                    <p>Fusce</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;