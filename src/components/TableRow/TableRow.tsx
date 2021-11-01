import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Flag from '../Flag/Flag'
import { AppState, TableRowProps } from '../../types'
import { AddCountry, RemoveCountry } from '../../redux/actions'

function TableRow({ country }: TableRowProps) {
  const dispatch = useDispatch()
  const addedCountries = useSelector(
    (state: AppState) => state.country.addedCountries
  )

  return (
    <tr>
      <td>
        <Flag flagUrl={country.flags.png} />
      </td>
      <td>
        <Link
          to={`/details/${country.name.common}`}
          style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}
        >
          {country.name.common}
        </Link>
      </td>
      <td>{country.population.toLocaleString('hu', { useGrouping: true })}</td>
      {/* <td>
        {country.languages?.map((lang) => lang.name).join(', ')}}
        Languages
      </td> */}
      <td>
        {country.languages && Object.values(country.languages).join(', ')}
      </td>
      {/* {console.log(country.languages)} */}

      {/* {console.log(country.name.nativeName)} */}
      <td>{country.region}</td>
      <td>
        <button
          className="addButton"
          onClick={() => {
            !addedCountries.find(
              (cnt) => cnt.name.common === country.name.common
            )
              ? dispatch(AddCountry(country))
              : dispatch(RemoveCountry(country))
          }}
        >
          {addedCountries.find((cnt) => cnt.name.common === country.name.common)
            ? 'Remove'
            : 'Add'}
        </button>
      </td>
    </tr>
  )
}

export default TableRow
