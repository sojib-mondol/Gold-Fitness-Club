import React from 'react';
import header from '../../header-img.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='header-content'>
                <img src={header} alt="" />
                <h2>Gold Fitness Club</h2>
                
            </div>
            
        </div>
    );
};

export default Header;