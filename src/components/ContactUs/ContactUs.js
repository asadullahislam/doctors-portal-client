import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className='text-center m-10 p-5 background-img'>
            <div>
                <h2 className='text-2xl font-bold text-primary '>Contact Us</h2>
                <h1 className='text-4xl text-bold'>Stay connected with us </h1>
            </div>
            <div className=''>
                <input type="e-mail" placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs m-4" /> <br />

                <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs m-4" /><br />

                <input type="text" placeholder="Your  messege" className="input input-bordered input-accent w-full max-w-xs m-4 h-[100px]" /><br />
                <button className="btn text-white bg-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Submit</button>


            </div>


        </div>
    );
};

export default ContactUs;