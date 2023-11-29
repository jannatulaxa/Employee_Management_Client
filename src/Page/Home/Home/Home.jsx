import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import FAQ from '../FAQ/FAQ';
import { useLoaderData } from 'react-router-dom';
import ControlledAccordions from '../FAQ/FAQ';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    const data=useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <ControlledAccordions data={data}></ControlledAccordions>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;