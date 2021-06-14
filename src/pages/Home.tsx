import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../components/Cart/Cart'
import MainTable from '../components/MainTable/MainTable'
import useCountries from '../hooks/useCountries'
import { AppState } from '../types'

export default function Home() {
  const [keyword, setKeyword] = useState("")
  const [countries] = useCountries(keyword)

  const {addedCountries} = useSelector((state: AppState) => state.country)
  console.log(addedCountries);

  return (
    <>
      <h1>Home page</h1>
      <Cart />
      <MainTable countries={countries}/>
    </>
  )
}
