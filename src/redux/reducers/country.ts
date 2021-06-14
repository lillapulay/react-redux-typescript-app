import { ADD_COUNTRY, CountryActions, CountryState, SET_COUNTRIES } from "../../types";

export default function country(state: CountryState = {allCountries: [], addedCountries: []}, action: CountryActions): CountryState {
    
    switch(action.type) {
        
        case ADD_COUNTRY: {
            const {country} = action.payload
            console.log(country);
            if (state.addedCountries.find(
                cntry => cntry.name === country.name)) {
            return state
            }

            return {...state, addedCountries: [...state.addedCountries, country]}
        }        

        case SET_COUNTRIES: {
            return { ...state, allCountries: action.payload.country}
        }

        default:
            return state
    }
}
