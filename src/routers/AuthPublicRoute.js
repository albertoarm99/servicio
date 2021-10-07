import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { InicioScreen } from "../pages/Public/InicioScreen";
import { MenuScreen } from "../pages/Public/MenuScreen";

export const AuthPublicRoute = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="/Menu" component={MenuScreen} />
          <Route exact path="/" component={InicioScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
