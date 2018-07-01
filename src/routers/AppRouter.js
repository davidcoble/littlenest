import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import LogoutPage from '../components/LogoutPage';
import AboutPage from '../components/AboutPage';
import CalendarPage from '../components/CalendarPage';
import ContactPage from '../components/ContactPage';
import EnrollmentPage from '../components/EnrollmentPage';
import GuestPage from '../components/GuestPage';
import HomePage from '../components/HomePage';
import MapPage from '../components/MapPage';
import SchedulePage from '../components/SchedulePage';
import TuitionPage from '../components/TuitionPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginRoute from './LoginRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={HomePage} exact={true}/>
                <PublicRoute path="/dashboard" component={DashboardPage}/>
                <PublicRoute path="/about" component={AboutPage}/>
                <PublicRoute path="/calendar" component={CalendarPage}/>
                <PublicRoute path="/contact" component={ContactPage}/>
                <PublicRoute path="/enrollment" component={EnrollmentPage}/>
                <PublicRoute path="/guest" component={GuestPage}/>
                <PublicRoute path="/home" component={HomePage}/>
                <PublicRoute path="/map" component={MapPage}/>
                <PublicRoute path="/schedule" component={SchedulePage}/>
                <PrivateRoute path="/tuition" component={TuitionPage}/>
                <LoginRoute path="/login" component={LoginPage}/>
                <PrivateRoute path="/logout" component={LogoutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
