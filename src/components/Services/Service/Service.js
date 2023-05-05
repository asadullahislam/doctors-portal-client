import React from 'react';

const Service = ({ service }) => {
    const { name, description, image } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt='' /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p className='mx-auto'>{description}</p>

            </div>
        </div>
    );
};

export default Service;