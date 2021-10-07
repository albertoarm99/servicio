import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    rol,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={
                (props) => (
                    ( isAuthenticated && rol==="user" ) ? (<Component {...props} />) : (<Redirect to="/" />)
                )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}