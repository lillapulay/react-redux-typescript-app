import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Row, Col, Card, Container } from 'react-bootstrap'

import { RemoveCountry } from '../../redux/actions/country'
import { AppState } from '../../types'
import ThemeButton from '../ThemeButton/ThemeButton'

export default function Cart() {
  const dispatch = useDispatch()
  const { addedCountries } = useSelector((state: AppState) => state.country)
  const counter = addedCountries.length

  return (
    <Container className="cartContainer">
      <ThemeButton />
      <Container className="cartHeader">
        <h1>Cart</h1>
        {addedCountries.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <p> In Cart: {counter}</p>
        )}

        <button className="cartButton">
          <Link to="/">Back to home</Link>
        </button>
      </Container>

      <Row xs={1} md={2} className="g-4">
        {addedCountries.map((added) => (
          <Col key={added.name}>
            <Card
              className="cartCard card text-center"
              style={{ width: '20rem', height: '85%' }}
            >
              <Card.Img className="cartImg" variant="top" src={added.flag} />
              <Card.Body>
                <Card.Title>
                  <Link
                    to={`/details/${added.name}`}
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                    }}
                  >
                    {added.name}
                  </Link>
                </Card.Title>
                <Card.Text>Capital: {added.capital}</Card.Text>
              </Card.Body>
            </Card>

            <button
              className="removeButton"
              onClick={() => dispatch(RemoveCountry(added))}
            >
              Remove
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
