import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCountries } from "../redux/actions";
import { AppState, NameType } from "../types";
import "./Details.css";

export default function Details() {
  const {name} = useParams<NameType>()
  const dispatch = useDispatch()
  const { allCountries } = useSelector((state: AppState) => state.country)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <>
    {allCountries
      .filter((cntry) => cntry.name === name)
      .map((country) => {
        return(
          <ul key={country.name}>
            <li>
              <h2>{country.name}</h2>
            </li>
            {country.nativeName !== country.name && 
              <li><h3><i>"{country.nativeName}"</i></h3></li>
            }
            <li>
              <img alt="Country flag" className="detailsFlag" src={country.flag}></img>
            </li>
            <li>Capital: {country.capital}</li>
            <li>Population: {country.population.toLocaleString('hu', {useGrouping: true})}</li> {/* HU provides spaces instead of commas or dots */}
            <li>Currency: {country.currencies?.map(curr => `${curr.name} (${curr.code}/${curr.symbol})`).join(", ")}</li> {/* e.g. Bhutan has multiple */}
            <li>Official language: {country.languages?.map(lang => `${lang.name} (${lang.nativeName}/${lang.iso639_1})`).join(", ")}</li>
            <li>Region: {country.region}</li>
            <li>Sub-region: {country.subregion}</li>
            <li>Area: {country.area === null ? "N/A" : `${country.area.toLocaleString('hu', {useGrouping: true})} km2`}</li> {/* How to include <sup>2</sup>? / US Outlying has empty str */}
            <li>Bordering countries: {country.borders.length <1 ? "N/A" : country.borders.join(', ')}</li> {/* e.g. Japan has none */}      
            <li>Timezone: {country.timezones.length > 2 ? `From ${country.timezones[0]} to ${country.timezones[country.timezones.length-1]}` : `${country.timezones.join(', ')}`}</li> {/* Rus Fed has a lot */}
            <li>Calling code: +{country.callingCodes === "" ? "N/A" : country.callingCodes.join(', ')}</li> {/* Dom. Rep. has several, US Outlying has none */}
            <li>Domain: {country.topLevelDomain}</li>
          </ul>
        )
      })}
      <Link to="/">Back to home</Link>
    </>
  )
}