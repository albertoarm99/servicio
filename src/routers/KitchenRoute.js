import { Redirect, Route, Switch } from "react-router";
import { HomePage } from "../pages/cocina/HomePage";

export const KitchenRoute = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/cocina/dashboard" component={HomePage} />
          <Redirect to="/cocina/dashboard" />
        </Switch>
      </div>
    </div>
  );
};