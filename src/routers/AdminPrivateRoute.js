import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AdminPrivateRoute = ({
    isAuthenticated,
    rol,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={
                (props) => (
                    ( isAuthenticated && rol==="admin") ? (<Component {...props} />) : (<Redirect to="/" />)
                )}
        />
    )
}

AdminPrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}