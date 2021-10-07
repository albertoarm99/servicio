import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { AdminPrivateRoute } from "./AdminPrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { AuthPrivateRoute } from "./AuthPrivateRoute";
import { AuthPublicRoute } from "./AuthPublicRoute";
import { KitchenPrivateRoute } from "./KitchenPrivateRoute";
import { KitchenRoute } from "./KitchenRoute";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const [isLoggedIn] = useState(false);
  const [rol] = useState("user");
  return (
    <Router>
      <div>
        <Switch>
          <AdminPrivateRoute
            isAuthenticated={isLoggedIn}
            rol={rol}
            path="/admin/"
            component={AdminRoute}
          />

          <KitchenPrivateRoute
            isAuthenticated={isLoggedIn}
            rol={rol}
            path="/cocina/"
            component={KitchenRoute}
          />

          <PrivateRoute
            isAuthenticated={isLoggedIn}
            rol={rol}
            path="/auth/"
            component={AuthPrivateRoute}
          />

          <PublicRoute
            isAuthenticated={isLoggedIn}
            rol={rol}
            path="/"
            component={AuthPublicRoute}
          />

          <Redirect to="/auth/" />
        </Switch>
      </div>
    </Router>
  );
};
