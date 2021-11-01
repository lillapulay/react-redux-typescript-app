import { Dispatch } from 'redux'

import {
  SET_COUNTRIES,
  CountryActions,
  Country,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
} from './../../types'

export function AddCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function RemoveCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function setCountries(country: Country[]): CountryActions {
  return {
    type: SET_COUNTRIES,
    payload: {
      country,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountries() {
  return async (dispatch: Dispatch) => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const country = await response.json()
    dispatch(setCountries(country))
    //console.log('from actions', country[10].name.common)
  }
}
