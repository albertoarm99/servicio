import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react';

import "../../index.css"
import { NavbarMenu } from './NavbarMenu';


export const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar className="nav-toolbar">
                    <Typography variant="h5" noWrap className="nav-title">
                        De-cibeles
                    </Typography>
                    <NavbarMenu/>
                </Toolbar>
            </AppBar>
        </>
    )
}
