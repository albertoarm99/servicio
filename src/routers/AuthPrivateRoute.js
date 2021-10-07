import { Redirect, Route, Switch } from "react-router";
import { MenuScreen } from "../pages/User/MenuScreen";
import { PagoScreen } from "../pages/User/PagoScreen";

export const AuthPrivateRoute = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/auth/pago" component={PagoScreen} />
          <Route exact path="/auth/menu" component={MenuScreen} />
          <Redirect to="/auth/menu" />
        </Switch>
      </div>
    </div>
  );
};
