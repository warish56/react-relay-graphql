import React from 'react';
import {Switch, Route} from 'react-router-dom'

import MovieList from '../Pages/Movies';
import Details from '../Pages/Details/index';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={MovieList}/>
            <Route exact path="/details/:id" component={Details}/>
        </Switch>
    )
}

export default MainRoute;