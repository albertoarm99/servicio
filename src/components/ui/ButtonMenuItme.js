import { Button} from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export const ButtonMenuItme = ({titulo,logo,path}) => {
  return (
    <NavLink
        exact
        to={path}
        className="nav-item"
        activeClassName="nav-item-active"
    >
        <Button
        color="inherit"
        startIcon={<i className={`fa fa-${logo}`}/>}
        size="large"
        className="nav-button"
        >
            {titulo}
        </Button>
    </NavLink>
  );
};
