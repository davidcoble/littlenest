import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                </Link>
            </div>
        </div>
    </header>
);


export default Header;
