import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const LogoutPage = ({ startLogout }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Little Nest Preschool</h1>
            <p>Fare the well</p>
            <button className="button"
                    onClick={startLogout}>Logout</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(LogoutPage);
