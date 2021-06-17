import React, { useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Intro from '../components/Intro/Intro'
import MainTable from '../components/MainTable/MainTable'
import SearchBar from '../components/SearchBar/SearchBar'
import useCountries from '../hooks/useCountries'

import './Home.css';

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [countries] = useCountries(keyword)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <Container>
        <Intro />
        <SearchBar keyword={keyword} handleChange={handleChange} />        
        <button className="cartButton"><Link to="/cart">View cart</Link></button>        
      </Container>
      
      {/* Needs fix - doesn't trigger */}
      {!countries ? (
        <Container className="loadingContainer">
          <Spinner animation="border" role="status" />
          <p id="loadingText">Loading...</p>
        </Container>
      ) : (
        <MainTable countries={countries} />
      )}
    </>
  )
}
