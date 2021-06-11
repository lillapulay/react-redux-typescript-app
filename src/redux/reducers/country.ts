import { CountryActions, CountryState, SET_COUNTRIES } from "../../types";

export default function country(state: CountryState = {allCountries: [], addedCountries: []}, action: CountryActions): CountryState {
    switch(action.type) {
        case SET_COUNTRIES: {
            return { ...state, allCountries: action.payload.country}
        }

        default:
            return state
    }
}