import * as React from 'react'
import { Link } from 'react-router-dom'

import { Container, Spinner } from 'react-bootstrap'

import Intro from '../components/Intro/Intro'
import MainTable from '../components/MainTable/MainTable'
import SearchBar from '../components/SearchBar/SearchBar'
import useCountries from '../hooks/useCountries'
import Sad from './../sad.png'
import ThemeButton from '../components/ThemeButton/ThemeButton'

export default function Home() {
  const [keyword, setKeyword] = React.useState('')
  const [countries] = useCountries(keyword)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  //console.log('from Home', countries)

  return (
    <Container className="homePage">
      <ThemeButton />

      <Container>
        <Intro />
        <SearchBar keyword={keyword} handleChange={handleChange} />
        <button className="cartButton">
          <Link to="/cart">View cart</Link>
        </button>
      </Container>
      {/* {console.log(countries.length)} */}

      {/* {countries.map((country) => (
        <h1 key={country.name.common}>{country.name.common}</h1>
      ))} */}

      {countries.length === 0 && keyword === '' ? (
        <Container className="statusContainer">
          <Spinner animation="border" role="status" />
          <p id="statusText">Loading...</p>
        </Container>
      ) : countries.length === 0 && keyword !== '' ? (
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
        countries.length > 0 && <MainTable countries={countries} />
      )}
    </Container>
  )
}
