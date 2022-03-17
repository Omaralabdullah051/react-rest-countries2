import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container mt-5 fw-bold'>
            <h1 className='text-success fw-bolder'>Welcome To MY Rest Countries</h1>
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About Us</a>
        </div>
    );
};

export default Header;