import React  from 'react';
import './Hero.css'; // Make sure to import the CSS file
import logo from '../logos/Calculator-ban.jpg';
function Hero() {


    return (
        <div className='hero section column'>
            <div>
                <h1>Calcule tes Indémnités</h1>
                <p>A React-based web application 
                    for calculating and generating 
                    reports on meal allowance and hourly 
                    rates based on employee timesheet data. 
                </p>
            </div>
            <div>
                <img src={logo} alt="finance logo"></img>
            </div>
        </div>


    );
}


export default Hero;