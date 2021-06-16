import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import Table from 'react-bootstrap/Table'
import './maintable.css'
import { MainTableProps } from '../../types'

function MainTable({ countries }: MainTableProps) {
  return (
    <div className="container">
      <Table striped bordered hover variant="light">
        <TableHeader />
        <tbody>
          {countries.map((country) => (
            <TableRow key={country.name} country={country} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default MainTable
