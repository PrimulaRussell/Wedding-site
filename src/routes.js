import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Registry from "./components/Registry/Registry.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/registry" component={Registry} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
