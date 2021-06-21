import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Flag from '../Flag/Flag'
import { TableRowProps } from '../../types'
import { AddCountry } from '../../redux/actions'

function TableRow({ country }: TableRowProps) {
  const dispatch = useDispatch()

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
          onClick={() => dispatch(AddCountry(country))}
        >
          Add
        </button>
      </td>
    </tr>
  )
}

export default TableRow