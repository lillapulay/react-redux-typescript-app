import React from 'react'

import { Container } from 'react-bootstrap'

import Table from 'react-bootstrap/Table'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import { MainTableProps } from '../../types'

function MainTable({ countries }: MainTableProps) {
  return (
    <Container className="tableContainer">
      <Table striped bordered hover variant="light">
        <TableHeader />
        <tbody>
          {countries.map((country) => (
            <TableRow key={country.name} country={country} />
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default MainTable
