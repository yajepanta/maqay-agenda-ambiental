import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/Home.js';
import Categories from '../pages/Categories/Categories.js';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/inicio' component={Home} />
                <Route exact path='/propuestas' component={Categories} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;