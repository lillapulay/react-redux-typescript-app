import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import { SearchBarProps } from '../../types'

function SearchBar({ keyword, handleChange }: SearchBarProps) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
      <FormControl
        aria-label="Search"
        aria-describedby="inputGroup-sizing-default"
        type="text"
        name="search"
        placeholder="Search..."
        value={keyword}
        onChange={handleChange}
      />
    </InputGroup>
  )
}

export default SearchBar
