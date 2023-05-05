import React from 'react';

const Review = ({ review }) => {
    const { name, reviw, img, location } = review;
    return (
        <div className="card card-body  bg-base-100 shadow-xl">
            <div className="card-body">

                <p className='text-black'>{reviw}</p>
            </div>
            <div className=' flex justify-around'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-black
                    '>{name}</h1>
                    <h2 className='text-black'>{location}</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;