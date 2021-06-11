import React from "react";
import Flag from "../Flag/Flag";
import {Country} from "../../types";

type TableRowProps = {
  country: Country
}

function TableRow({country}: TableRowProps) {
  return (
    <tr>
      <td><Flag flagUrl={country.flag}/></td>
      <td>{country.name}</td>
      <td>{country.population}</td>
      <td>{country.languages?.map(
        lang => lang.name).join(", ")}</td>
      <td>{country.region}</td>
    </tr>
  );
}

export default TableRow;
