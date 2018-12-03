import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div
      onClick={() => props.handleClick(props.name)}
      className="img-container"
    >
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
