import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, Spinner } from 'react-bootstrap'

import Intro from '../components/Intro/Intro'
import MainTable from '../components/MainTable/MainTable'
import SearchBar from '../components/SearchBar/SearchBar'
import useCountries from '../hooks/useCountries'
import Sad from './../sad.png'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [countries] = useCountries(keyword)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <Container className="homePage">
      <Container>
        <Intro />
        <SearchBar keyword={keyword} handleChange={handleChange} />
        <button className="cartButton">
          <Link to="/cart">View cart</Link>
        </button>
      </Container>

      {
        /* If the API call is still in progress and we haven't searched for anything */
        countries.length === 0 && keyword === '' ? (
          <Container className="statusContainer">
            <Spinner animation="border" role="status" />
            <p id="statusText">Loading...</p>
          </Container>
        ) : /* If we already searched for something but there are no results */
          countries.length === 0 && keyword !== '' ? (
            <Container className="statusContainer">
              <img
                src={Sad}
                width="50"
                height="50"
                className="sadFace"
                alt="sad face"
              ></img>
              <p id="statusText">No results found.</p>
            </Container>
          ) : (
          /* If 'countries' or 'filteredCountries' exists */
            countries.length > 0 && <MainTable countries={countries} />
          )
      }
    </Container>
  )
}
