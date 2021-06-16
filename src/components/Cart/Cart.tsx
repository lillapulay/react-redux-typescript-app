import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RemoveCountry } from '../../redux/actions/country'
import { AppState } from '../../types'

export default function Cart() {
  const dispatch = useDispatch()
  const { addedCountries } = useSelector((state: AppState) => state.country)
  const counter = addedCountries.length

  return (
    <>
      <h1>Cart</h1>
      {addedCountries.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <p> In Cart: {counter}</p>
      )}

      <Row xs={1} md={4} className="g-4">
        {addedCountries.map((added) => (
          <Col>
            <Card
              key={added.name}
              className="card text-center"
              style={{ width: '20rem', height: '85%' }}
            >
              <Card.Img variant="top" src={added.flag} />
              <Card.Body>
                <Card.Title>{added.name}</Card.Title>
                <Card.Text>Capital: {added.capital}</Card.Text>
                <Button onClick={() => dispatch(RemoveCountry(added))}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </>
  )
}
