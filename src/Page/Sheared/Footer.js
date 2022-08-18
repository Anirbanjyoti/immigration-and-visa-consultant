import React from 'react';
import Logo from '../../Assets/Images/small-logo.png'

const Footer = () => {
    return (
        <div className='md:flex justify-evenly mt-40 bg-accent text-white py-20'>
           <div>
            <img src={Logo} alt='logo'></img>
            <p className='md:w-96'>Integer lobortis sem consequat imperdiet In nulla viverra ut lorem ut, dapibus conse etur diam. Nun bibendum diet condiment sed ipsum duis lacinia.</p>
           </div> 
           <div>
            <h1 className='text-2xl mb-2'>Immigration</h1>
            <ul>
                <li>Take IELTS</li>
                <li>Student Visa</li>
                <li>Immigration Visa</li>
            </ul>
           </div> 
           <div>
            <h1 className='text-2xl mb-2'>QuickLink</h1>
            <ul>
                <li>Take IELTS</li>
                <li>Student Visa</li>
                <li>Immigration Visa</li>
            </ul>
           </div> 
           
        </div>
    );
};

export default Footer;