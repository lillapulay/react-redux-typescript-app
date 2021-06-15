import React, { useState } from 'react'
import Cart from '../components/Cart/Cart'
import MainTable from '../components/MainTable/MainTable'
import useCountries from '../hooks/useCountries'

export default function Home() {
  const [keyword /*setKeyword*/] = useState('')
  const [countries] = useCountries(keyword)

  return (
    <>
      <h1>Home page</h1>
      <Cart />
      <MainTable countries={countries} />
    </>
  )
}
