import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Nav />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;