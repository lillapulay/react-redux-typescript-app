import React from "react";
import "./flag.css";

type FlagProps = {
  flagUrl: string;
}

function Flag({flagUrl}: FlagProps) {
  return (
    <img className="countryFlag" src={flagUrl} alt="flag" />
  );
}

export default Flag;
