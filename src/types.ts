// Action types
export const SET_COUNTRIES = 'SET_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// Country
type Languages = {
  name: string
  nativeName: any // Some might contain symbols - could be a problem?
  iso639_1: string
}

// SearchBar component
export type SearchBarProps = {
  keyword: string
  // Event handlers always return void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// Flag component
export type FlagProps = {
  flagUrl: string
}

// TableRow component
export type TableRowProps = {
  country: Country
}

// MainTable component
export type MainTableProps = {
  countries: Country[]
}

// Details page
export type NameType = {
  name: string
}

type Timezones = {
  name: string // Doesn't actually have a name key, so I just added name - better solution?
}

type Borders = {
  name: string
}

type Currencies = {
  name: string
  code: string
  symbol: any // Some might contain symbols - could be a problem?
}

export type Country = {
  // Needs to match API property names
  flag: string
  name: string
  languages: Languages[] // Array of objects
  population: number
  region: string
  nativeName?: string
  topLevelDomain: string
  callingCodes: any
  capital: string
  subregion: string
  area: number
  timezones: Timezones[]
  borders: Borders[]
  currencies: Currencies[]
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
export type CountryActions =
  | SetCountriesAction
  | AddCountryAction
  | RemoveCountryAction

export type CountryState = {
  allCountries: Country[]
  addedCountries: Country[]
}

export type AppState = {
  country: CountryState
}
