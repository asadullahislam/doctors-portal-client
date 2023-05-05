import React from 'react';
import chair from '../../assets/images/chair.png';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="hero  background-image text-black ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" w-1/2 pl-2
                 rounded-lg shadow-2xl" alt='' />
                <div className='px-2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut  id nisi.</p>
                    <button className="btn  bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;