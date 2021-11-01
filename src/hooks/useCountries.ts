import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCountries } from '../redux/actions'
import { AppState, Country } from '../types'

export default function useCountries(keyword: string): [Country[]] {
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const dispatch = useDispatch()
  const { allCountries } = useSelector((state: AppState) => state.country)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    let filteredData = allCountries.filter((country) => {
      // Make Country optional if it throws an error
      return (
        country.name.common.toLowerCase().search(keyword.toLowerCase()) !==
        -1 /* ||
        country.name.nativeName?.eng.official
          .toLowerCase()
          .search(keyword.toLowerCase()) !== -1 */
        //country //&& console.log(country.name.common)
      )
    })
    setFilteredCountries(filteredData)
    // console.log(filteredData)
  }, [allCountries, keyword])

  // console.log(filteredCountries)
  return [filteredCountries]
}
