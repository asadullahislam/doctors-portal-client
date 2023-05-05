import React from 'react';
import Banner from '../Banner/Banner';
import Infocards from '../Infocards/Infocards';
import Services from '../Services/Services';
import Poster from '../Poster/Poster';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Poster></Poster>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;