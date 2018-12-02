import React from "react";
import "./ScoreCard.css";

const ScoreCard = props => <p className="ScoreCard">Score: {props.score} || Hi-Score: {props.hiscore}</p>;

export default ScoreCard;
