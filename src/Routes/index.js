import React from 'react';
import {Switch, Route} from 'react-router-dom'

import MovieList from '../Pages/Movies';
import Details from '../Pages/Details/index';
import Login from '../Pages/Login'

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={MovieList}/>
            <Route exact path="/details/:id" component={Details}/>
        </Switch>
    )
}

export default MainRoute;