import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    rol,
    component: Component,
    ...res
}) => {
    if(rol==='admin'){
        return (
            <Route {...res}
                component={
                    (props) => (
                        ( isAuthenticated) ? (<Redirect to="/admin/dashboard" />) : (<Component {...props} />)
                    )}
            />
        )
    }
    if(rol==='user'){
        return (
            <Route {...res}
                component={
                    (props) => (
                        ( isAuthenticated) ? (<Redirect to="/auth/menu" />) : (<Component {...props} />)
                    )}
            />
        )
    }

    if(rol==='cocina'){
        return (
            <Route {...res}
                component={
                    (props) => (
                        ( isAuthenticated) ? (<Redirect to="/cocina/" />) : (<Component {...props} />)
                    )}
            />
        )
    }
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
