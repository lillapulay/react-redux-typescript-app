import { combineReducers } from 'redux'

import product from './product'
import country from './country'

const createRootReducer = () =>
  combineReducers({
    product,
    country
  })

export default createRootReducer
