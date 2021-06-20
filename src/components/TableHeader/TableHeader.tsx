import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../types'

function TableHeader() {
  const { addedCountries } = useSelector((state: AppState) => state.country)
  const counter = addedCountries.length

  return (
    <thead>
      <tr>
        <th>Flag</th>
        <th>Name</th>
        <th>Population</th>
        <th>Languages</th>
        <th>Region</th>
        <th>Cart: {counter}</th>
      </tr>
    </thead>
  )
}

export default TableHeader
