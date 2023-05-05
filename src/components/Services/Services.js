import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service/Service';


const Services = () => {

    const serviceCards = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'this is treatment floride ',
            image: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling ',
            description: 'this is Cavity filling treatment  ',
            image: cavity
        },
        {
            id: 3,
            name: 'Teeth whitening',
            description: 'this is teeth whitening  ',
            image: whitening
        },
    ]

    return (
        <div className='mt-8'>
            <div>
                <h2 className='font-bold text-5xl text-primary text-center'>OUR SERVICES</h2>
                <h3 className='text-black text-3xl text-center font-semibold'>Service We Provide</h3>
            </div>
            <div className='grid mt-10 p-5 text-black grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8  '>
                {
                    serviceCards.map(service => <Service
                        key={service.id}
                        service={service} ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;