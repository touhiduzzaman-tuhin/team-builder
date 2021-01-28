import React from 'react';
import logo from '../../images/team-builder.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header-style">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;