import React from 'react';
import Customer from '../../components/customer';
import Feature from '../../components/feature';
import Footer from '../../components/footer';
import GetStarted from '../../components/get-started';
import Main from '../../components/main';
import Nav from '../../components/nav';
import Plan from '../../components/plan';
import Stat from '../../components/stat';
import Subscribe from '../../components/subscribe';
import './homepage.css';

const Homepage = () => {
    console.log("here")
    return(
        <>
        <Nav />
        <Main />
        <Stat />
        <Feature />
        <Plan />
        <GetStarted />
        <Customer />
        <Subscribe />
        <Footer />
        </>
    )
}

export default Homepage;