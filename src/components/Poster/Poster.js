import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Poster = () => {
    return (
        <div className="hero   text-black mt-[50px]">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-1/3 rounded-md' src={treatment} alt='' />
                <div className='p-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care ,on Your Terms </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Poster;