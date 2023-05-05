import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (

        <footer className='background-image' >
            <div className="	bg-slate-200 mx-auto footer p-10  text-black">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link to='/' className="link link-hover" h>Emergency Checkup</Link>
                    <Link to='/' className="link link-hover" h>Monthly Checkup</Link>
                    <Link to='/' className="link link-hover" h>Weekly Checkup</Link>
                    <Link to='/' className="link link-hover" h>Deep Checkup</Link>
                </div>
                <div>
                    <Link to='/' className="footer-title">ORAL HEALTH</Link>
                    <Link to='/' className="link link-hover">Fluoride Treatment </Link>
                    <Link to='/' className="link link-hover">Cavity filling </Link>
                    <Link to='/' className="link link-hover">teath Whitening</Link>
                    <Link to='/' className="link link-hover">About Us</Link>
                </div>
                <div>
                    <Link to='/' className="footer-title">OUR ADDRESS </Link>
                    <Link to='/' className="link link-hover">New Yourk</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='mt-0'>
                <h1 className='text-2xl font-bold text-center text-black bg-stale-300'>Copyright 2023 All Rights Reserved</h1>
            </div>


        </footer>

    );
};

export default Footer;