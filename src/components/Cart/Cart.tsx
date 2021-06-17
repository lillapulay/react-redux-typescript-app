import React from 'react'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RemoveCountry } from '../../redux/actions/country'
import { AppState } from '../../types'
import './cart.css'

export default function Cart() {
  const dispatch = useDispatch()
  const { addedCountries } = useSelector((state: AppState) => state.country)
  const counter = addedCountries.length

  return (
    <Container>
      <Container className="cartWrapper">
        <h1>Cart</h1>
        {addedCountries.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <p> In Cart: {counter}</p>
        )}        
        <Link to="/">
          <button className="cartButton">Back to home</button>
        </Link> 
      </Container>

      <Row xs={1} md={2} className="g-4">
        {addedCountries.map((added) => (
          <Col>
            <Card
              key={added.name}
              className="cartCard card text-center"
              style={{ width: '20rem', height: '85%' }}
            >
              <Card.Img variant="top" src={added.flag} />
              <Card.Body>
                <Card.Title>{added.name}</Card.Title>
                <Card.Text>Capital: {added.capital}</Card.Text>
                <button onClick={() => dispatch(RemoveCountry(added))}>
                  Remove
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
