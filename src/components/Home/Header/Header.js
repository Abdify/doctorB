import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
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