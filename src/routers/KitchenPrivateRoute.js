import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const KitchenPrivateRoute = ({
    isAuthenticated,
    rol,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={
                (props) => (
                    ( isAuthenticated && rol==='cocina' ) ? (<Component {...props} />) : (<Redirect to="/" />)
                )}
        />
    )
}

KitchenPrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}