import React from 'react'

import { InputGroup, FormControl, Container } from 'react-bootstrap'

import { SearchBarProps } from '../../types'

function SearchBar({ keyword, handleChange }: SearchBarProps) {
  return (
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Text className="searchText" id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
        <FormControl
          className="searchInput"
          aria-label="Search"
          aria-describedby="inputGroup-sizing-default"
          type="text"
          name="search"
          placeholder="Enter name..."
          value={keyword}
          onChange={handleChange}
        />
      </InputGroup>
    </Container>
  )
}

export default SearchBar
