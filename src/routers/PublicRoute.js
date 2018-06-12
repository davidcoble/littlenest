import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

export const PublicRoute = ({
                                isAuthenticated,
                                component: Component,
                                ...rest
                            }) => (
    <Route {...rest} component={(props) => (
        <div>
            <Header/>
            <Nav>
            </Nav>
            <div className='divComponent'>
                <Component {...props} />
            </div>
        </div>
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
