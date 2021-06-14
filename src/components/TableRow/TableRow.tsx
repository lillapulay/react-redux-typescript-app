import React from "react";
import Flag from "../Flag/Flag";
import {Country} from "../../types";
import { AddCountry } from "../../redux/actions";
import { useDispatch } from "react-redux";

type TableRowProps = {
  country: Country
}

function TableRow({country}: TableRowProps) {
  const dispatch = useDispatch()

  return (
    <tr>
      <td><Flag flagUrl={country.flag}/></td>
      <td>{country.name}</td>
      <td>{country.population}</td>
      <td>{country.languages?.map(
        lang => lang.name).join(", ")}</td>
      <td>{country.region}</td>
      <td><button onClick={() => dispatch(AddCountry(country))}> Add Country </button></td>
    </tr>
  );
}

export default TableRow;
