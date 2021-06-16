import React from 'react'
import { useEffect } from 'react'
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchCountries } from '../redux/actions'
import { AppState, NameType } from '../types'
import './Details.css'

export default function Details() {
  const { name } = useParams<NameType>()
  const dispatch = useDispatch()
  const { allCountries } = useSelector((state: AppState) => state.country)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <Container>
      {allCountries
        .filter((cntry) => cntry.name === name)
        .map((country) => {
          return (
            <Card
              className="card text-center"
              key={country.name}
              style={{ width: '50rem' }}
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
                <ListGroupItem>
                  Population:{' '}
                  {country.population.toLocaleString('hu', {
                    useGrouping: true,
                  })}{' '}
                  {/* HU provides spaces instead of commas or dots */}
                </ListGroupItem>
                <ListGroupItem>
                  Currency:{' '}
                  {country.currencies
                    ?.map(
                      (curr) => `${curr.name} (${curr.code}/${curr.symbol})`
                    )
                    .join(', ')}{' '}
                  {/* e.g. Bhutan has multiple */}
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
                <ListGroupItem>
                  Area:{' '}
                  {country.area === null
                    ? 'N/A'
                    : `${country.area.toLocaleString('hu', {
                      useGrouping: true,
                    })} km2`}{' '}
                  {/* How to include <sup>2</sup>? / US Outlying has empty str */}
                </ListGroupItem>
                <ListGroupItem>
                  Bordering countries:{' '}
                  {country.borders.length < 1
                    ? 'N/A'
                    : country.borders.join(', ')}{' '}
                  {/* e.g. Japan has none */}
                </ListGroupItem>
                <ListGroupItem>
                  Timezone:{' '}
                  {country.timezones.length > 2
                    ? `From ${country.timezones[0]} to ${
                      country.timezones[country.timezones.length - 1]
                    }`
                    : `${country.timezones.join(', ')}`}{' '}
                  {/* Rus Fed has a lot */}
                </ListGroupItem>
                <ListGroupItem>
                  Calling code: +
                  {country.callingCodes === ''
                    ? 'N/A'
                    : country.callingCodes.join(', ')}{' '}
                  {/* Dom. Rep. has several, US Outlying has none */}
                </ListGroupItem>
                <ListGroupItem>Domain: {country.topLevelDomain}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Link to="/">Back</Link>
              </Card.Body>
            </Card>
          )
        })}
    </Container>
  )
}
