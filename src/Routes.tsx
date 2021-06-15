import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CountryDetails from './pages/Details'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:name" component={CountryDetails} />
  </Switch>
)

export default Routes
