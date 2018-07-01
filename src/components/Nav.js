import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout, startLogin } from '../actions/auth';

export const Nav = ({
                        isAuthenticated,
                        uid,
                        name,
                        startLogout,
                        startLogin,
                        ...rest
                    }) => (
    <div className='navDiv'>
        <nav className='nav'>
            { isAuthenticated ?
                (
                <p className='nav__p'>Welcome {name.name}</p>
                ) :
                (
                    <p>

                    </p>
                )


            }
            <Link className='nav__link' to='/home'>home</Link>
            <Link className='nav__link' to='/about'>about</Link>
            <Link className='nav__link' to='/schedule'>schedule</Link>
            <Link className='nav__link' to='/tuition'>tuition</Link>
            <Link className='nav__link' to='/enrollment'>enrollment</Link>
            <Link className='nav__link' to='/guest'>guest&nbsp;teachers</Link>
            <Link className='nav__link' to='/calendar'>calendar</Link>
            <Link className='nav__link' to='/map'>map</Link>
            {
                isAuthenticated ? (
                    <Link className='nav__link' to='/' onClick={startLogout}>logout</Link>
                ) : (
                    <Link className='nav__link' to='/' onClick={startLogin}>login</Link>
                )
            }
            <Link className='nav__link' to='/contact'>contact</Link>
        </nav>
    </div>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
    uid: state.auth.uid,
    name: state.auth.name
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    startLogin:  () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
