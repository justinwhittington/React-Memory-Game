import React from 'react';
import './Card.css';

const Card = props => (
     <div  className="card">
    <div onClick={() => props.handleClick(props.name)} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
)

export default Card;