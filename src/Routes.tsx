import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import CountryDetails from './pages/Details'
import Cart from './components/Cart/Cart'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:name" component={CountryDetails} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
)

export default Routes
