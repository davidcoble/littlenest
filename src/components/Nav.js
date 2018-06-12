import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from "./Header";
import {startLogout} from "../actions/auth";

export const Nav = () => (
    <div className='navDiv'>
        <nav className='nav'>
            <Link className='nav__link' to='/home'>home</Link>
            <Link className='nav__link' to='/about'>about</Link>
            <Link className='nav__link' to='/schedule'>schedule</Link>
            <Link className='nav__link' to='/tuition'>tuition</Link>
            <Link className='nav__link' to='/enrollment'>enrollment</Link>
            <Link className='nav__link' to='/guest'>guest&nbsp;teachers</Link>
            <Link className='nav__link' to='/calendar'>calendar</Link>
            <Link className='nav__link' to='/map'>map</Link>
            <Link className='nav__link' to='/contact'>contact</Link>
        </nav>
    </div>
);

const mapDispatchToProps = (dispatch) => ({});

export default connect(undefined, mapDispatchToProps)(Nav);
