import React from 'react';
import doctor from '../../assets/images/doctor.png';

import "./MakeAppointment.css"


const MakeAppointment = () => {
    return (
        <div>
            <div className="hero-content background-image flex-col lg:flex-row rounded-md m-5 mt-[150px]">
                <img className='w-2/5 -mt-32 pl-10 ' src={doctor} alt='' />
                <div>
                    <h2 className="text-2xl font-bold text-primary">Appointment</h2>
                    <h1 className='text-4xl text-white font-bold'>Make an appointment Today</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;