import React from 'react';
import '../pages/homepage/homepage.css';
import Viezh from '../assets/images/viezh.png';
import Yessica from '../assets/images/yessica.png';
import Kim from '../assets/images/kim.png';
import Star from '../assets/images/star.svg';

const Customer = () => {
    return(
        <div className="customer">
            <h2>Trusted By Hundreds Of<br /> Happy Customers</h2>
            <p>Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et<br /> 
            suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies. </p>
            <div className="customer-section">
                <div className="customer-card">
                    <div className="card-top">
                        <img src={Viezh} alt="" className="customer-image" />
                        <div className="customer-name">
                            <p>Viezh Robert</p>
                            <sub>Warsaw, Poland</sub>
                        </div>
                        <div className="rating">
                            <p>4.5</p>
                            <img src={Star} alt="" className="star" />
                        </div>
                    </div>
                    <p>“Mauris sem neque, ultrices nec sapien id,<br/> 
                    consequat laoreet dolor. Ut rhoncus <br/> 
                    sollicitudin metus, ac lobortis felis dignissim <br/>
                    et. Fusce arcu ex”</p>
                </div>
                <div className="customer-card">
                    <div className="card-top">
                        <img src={Yessica} alt="" className="customer-image" />
                        <div className="customer-name">
                            <p>Yessica Christy</p>
                            <sub>Shanai, China</sub>
                        </div>
                        <div className="rating">
                            <p>4.5</p>
                            <img src={Star} alt="" className="star" />
                        </div>
                    </div>
                    <p>“Mauris sem neque, ultrices nec sapien id,<br/> 
                    consequat laoreet dolor. Ut rhoncus <br/> 
                    sollicitudin metus, ac lobortis felis dignissim <br/>
                    et. Fusce arcu ex”</p>
                </div>
                <div className="customer-card">
                    <div className="card-top">
                        <img src={Kim} alt="" className="customer-image" />
                        <div className="customer-name">
                            <p>Kim Young Jou</p>
                            <sub>Seoul, South Korea</sub>
                        </div>
                        <div className="rating">
                            <p>4.5</p>
                            <img src={Star} alt="" className="star" />
                        </div>
                    </div>
                    <p>“Mauris sem neque, ultrices nec sapien id,<br/> 
                    consequat laoreet dolor. Ut rhoncus <br/> 
                    sollicitudin metus, ac lobortis felis dignissim <br/>
                    et. Fusce arcu ex”</p>
                </div>
            </div>
        </div>
    )
}

export default Customer;