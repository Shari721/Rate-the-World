import React from "react";
import "./Card.css";

const SearchResults = props => (
  <ul className="Card">
    {props.results.map(result => (
      <li key={result} className="Card">
        <img alt="band" src={result} className="img-responsive" />
      </li>
    ))}
  </ul>
);

export default Card;
