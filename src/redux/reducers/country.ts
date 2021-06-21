import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  SET_COUNTRIES,
} from '../../types'

export default function country(
  state: CountryState = { allCountries: [], addedCountries: [] },
  action: CountryActions
): CountryState {
  switch (action.type) {
  case ADD_COUNTRY: {
    const { country } = action.payload

    if (state.addedCountries.find((cntry) => cntry.name === country.name)) {
      return state
    }
    // Always return new state (e.g, new object) if changed
    return { ...state, addedCountries: [...state.addedCountries, country] }
  }

  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.addedCountries.findIndex(
      (c) => c.name === country.name
    )
    if (index >= 0) {
      state.addedCountries.splice(index, 1)
      return { ...state, addedCountries: [...state.addedCountries] }
    }
    return state
  }

  case SET_COUNTRIES: {
    return { ...state, allCountries: action.payload.country }
  }

  default:
    return state
  }
}
