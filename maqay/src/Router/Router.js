import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home.js";
import Categories from "../pages/Categories/Categories.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/propuestas/:category/:subcategory'
          component={Categories}
        />
        <Route exact path='/propuestas' component={Categories} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
