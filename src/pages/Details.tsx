import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'

import { fetchCountries } from '../redux/actions'
import { AppState, NameType } from '../types'
import ThemeButton from '../components/ThemeButton/ThemeButton'

export default function Details() {
  const { name } = useParams<NameType>()
  const dispatch = useDispatch()
  const { allCountries } = useSelector((state: AppState) => state.country)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <Container>
      <ThemeButton />
      <Container className="titleContainer">
        <h2>Details</h2>
      </Container>

      {allCountries
        .filter((cntry) => cntry.name === name)
        .map((country) => {
          return (
            <Card
              className="card text-center"
              key={country.name}
              style={{ width: '30rem' }}
            >
              <Card.Img className="cardImg" variant="top" src={country.flag} />

              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                {country.nativeName !== country.name && (
                  <Card.Subtitle>{country.nativeName}</Card.Subtitle>
                )}
              </Card.Body>

              <ListGroup className="list-group-flush">
                <ListGroupItem>Capital: {country.capital}</ListGroupItem>

                {/* HU provides spaces instead of commas or dots */}
                <ListGroupItem>
                  Population:{' '}
                  {country.population.toLocaleString('hu', {
                    useGrouping: true,
                  })}
                </ListGroupItem>

                {/* e.g. Bhutan has multiple */}
                <ListGroupItem>
                  Currency:{' '}
                  {country.currencies
                    ?.map(
                      (curr) => `${curr.name} (${curr.code}/${curr.symbol})`
                    )
                    .join(', ')}
                </ListGroupItem>

                <ListGroupItem>
                  Official languages:{' '}
                  {country.languages
                    ?.map(
                      (lang) =>
                        `${lang.name} (${lang.nativeName}/${lang.iso639_1})`
                    )
                    .join(', ')}
                </ListGroupItem>

                <ListGroupItem>
                  Region: {country.region}/{country.subregion}
                </ListGroupItem>

                {/* How to include <sup>2</sup> to show square kilometers? 
                Tried making it into a component even, but only returned [object Object]
                -----
                US Outlying has empty str */}
                <ListGroupItem>
                  Area:{' '}
                  {country.area === null
                    ? 'N/A'
                    : `${country.area.toLocaleString('hu', {
                      useGrouping: true,
                    })} km2`}
                </ListGroupItem>

                {/* e.g. Japan has none */}
                <ListGroupItem>
                  Bordering countries:{' '}
                  {country.borders.length < 1
                    ? 'N/A'
                    : country.borders.join(', ')}
                </ListGroupItem>

                {/* Rus Fed has a lot */}
                <ListGroupItem>
                  Timezone:{' '}
                  {country.timezones.length > 2
                    ? `From ${country.timezones[0]} to ${
                      country.timezones[country.timezones.length - 1]
                    }`
                    : `${country.timezones.join(', ')}`}
                </ListGroupItem>

                {/* Dom. Rep. has several, US Outlying has none */}
                <ListGroupItem>
                  Calling code:{' '}
                  {country.callingCodes[0] === ''
                    ? 'N/A'
                    : `+${country.callingCodes.join(', +')}`}
                </ListGroupItem>

                <ListGroupItem>Domain: {country.topLevelDomain}</ListGroupItem>
              </ListGroup>
            </Card>
          )
        })}

      <button className="backButton">
        <Link to="/">Back</Link>
      </button>
    </Container>
  )
}
