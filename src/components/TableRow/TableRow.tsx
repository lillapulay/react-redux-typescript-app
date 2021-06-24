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
        <Flag flagUrl={country.flag} />
      </td>
      <td>
        <Link
          to={`/details/${country.name}`}
          style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}
        >
          {country.name}
        </Link>
      </td>
      <td>{country.population.toLocaleString('hu', { useGrouping: true })}</td>
      <td>{country.languages?.map((lang) => lang.name).join(', ')}</td>
      <td>{country.region}</td>
      <td>
        <button
          className="addButton"
          /* disabled={Boolean(addedCountries.find(cnt => cnt.name === country.name))} */
          /* onClick={() => dispatch(AddCountry(country))} */
          onClick={() => {
            !addedCountries.find((cnt) => cnt.name === country.name)
              ? dispatch(AddCountry(country))
              : dispatch(RemoveCountry(country))
          }}
        >
          {addedCountries.find((cnt) => cnt.name === country.name)
            ? 'Remove'
            : 'Add'}
        </button>
      </td>
    </tr>
  )
}

export default TableRow
