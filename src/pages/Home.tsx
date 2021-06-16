import React, { useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Intro from '../components/Intro/Intro'
import MainTable from '../components/MainTable/MainTable'
import SearchBar from '../components/SearchBar/SearchBar'
import useCountries from '../hooks/useCountries'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [countries] = useCountries(keyword)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <Intro />
      <SearchBar keyword={keyword} handleChange={handleChange} />
      <Link to="/cart">
        <Button>View cart</Button>
      </Link>
      {countries.length === 0 ? (
        <Spinner animation="border" role="status" />
      ) : (
        <MainTable countries={countries} />
      )}
    </>
  )
}
