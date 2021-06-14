// Action types
export const SET_COUNTRIES = 'SET_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// Country
type Languages = {
  name: string // we only use the name for now
}

export type Country = {
  // Needs to match API property names
  flag: string
  name: string
  languages: Languages[] // Array of objects
  population: number
  region: string
  nativeName?: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type SetCountriesAction = {
  type: typeof SET_COUNTRIES
  payload: {
    country: Country[]
  }
}

// Use this union in reducer
export type CountryActions = SetCountriesAction | AddCountryAction | RemoveCountryAction

export type CountryState = {
  allCountries: Country[]
  addedCountries: Country[]
}

export type AppState = {
  country: CountryState
}
