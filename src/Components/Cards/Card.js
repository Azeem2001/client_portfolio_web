import React from "react";
import styled from "./Card.module.scss";
const Card = ({ title, disc }) => {
  return (
    <div className={styled.CardContainer}>
      <h1 >
        {title} <span>{disc}</span>
      </h1>
    </div>
  );
};

export default Card;
