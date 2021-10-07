import { Redirect, Route, Switch } from "react-router";
import { HomePage } from "../pages/admin/HomePage";

export const AdminRoute = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/admin/dashboard" component={HomePage} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </div>
    </div>
  );
};