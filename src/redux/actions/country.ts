import { Dispatch } from 'redux'
import { SET_COUNTRIES, CountryActions, Country, ADD_COUNTRY } from './../../types'

export function AddCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country
    }
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

export function fetchCountries() {
  return async (dispatch: Dispatch) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const country = await response.json()
    console.log(country)
    dispatch(setCountries(country))
  }
}
