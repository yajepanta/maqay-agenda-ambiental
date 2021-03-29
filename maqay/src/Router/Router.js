import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Categories from "../pages/Categories/Categories.js";
import Home from "../pages/Home/Home.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/:category/:subcategory' component={Categories} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
