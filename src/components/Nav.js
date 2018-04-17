import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from "./Header";
import {startLogout} from "../actions/auth";

export const Nav = () => (
    <nav className='nav'>
        <Link className='nav__link' to='/home'>home</Link>&nbsp;
        <Link className='nav__link' to='/about'>about</Link>&nbsp;
        <Link className='nav__link' to='/schedule'>schedule</Link>&nbsp;
        <Link className='nav__link' to='/tuition'>tuition</Link>&nbsp;
        <Link className='nav__link' to='/enrollment'>enrollment</Link>&nbsp;
        <Link className='nav__link' to='/guest'>guest teachers</Link>&nbsp;
        <Link className='nav__link' to='/calendar'>calendar</Link>&nbsp;
        <Link className='nav__link' to='/map'>map</Link>&nbsp;
        <Link className='nav__link' to='/contact'>contact</Link>
    </nav>
);

const mapDispatchToProps = (dispatch) => ({});

export default connect(undefined, mapDispatchToProps)(Nav);
