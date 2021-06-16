import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './intro.css'

export default function Intro() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Country App</Card.Title>
        <Card.Text>
          Application built with React and TypeScript, using React Router and
          Redux and fetching data from the Countries API.
        </Card.Text>
        <Button variant="outline-primary" disabled>
          <Link
            to={{
              pathname:
                'https://github.com/lillapulay/fs7-react-redux-typescript',
            }}
            target="_blank"
          >
            View repo
          </Link>
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        React | React Router | TypeScript | Redux | Bootstrap
      </Card.Footer>
    </Card>
  )
}
