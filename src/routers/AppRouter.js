import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
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

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/about" component={AboutPage}/>
                <PrivateRoute path="/calendar" component={CalendarPage}/>
                <PrivateRoute path="/contact" component={ContactPage}/>
                <PrivateRoute path="/enrollment" component={EnrollmentPage}/>
                <PrivateRoute path="/guest" component={GuestPage}/>
                <PrivateRoute path="/home" component={HomePage}/>
                <PrivateRoute path="/map" component={MapPage}/>
                <PrivateRoute path="/schedule" component={SchedulePage}/>
                <PublicRoute path="/tuition" component={TuitionPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
