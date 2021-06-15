import React from 'react'
import Flag from '../Flag/Flag'
import { TableRowProps } from '../../types'
import { AddCountry } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function TableRow({ country }: TableRowProps) {
  const dispatch = useDispatch()

  return (
    <tr>
      <td>
        <Flag flagUrl={country.flag} />
      </td>
      <td>
        <Link to={`/details/${country.name}`}>{country.name}</Link>
      </td>
      <td>{country.population}</td>
      <td>{country.languages?.map((lang) => lang.name).join(', ')}</td>
      <td>{country.region}</td>
      <td>
        <button onClick={() => dispatch(AddCountry(country))}>
          Add Country
        </button>
      </td>
    </tr>
  )
}

export default TableRow
