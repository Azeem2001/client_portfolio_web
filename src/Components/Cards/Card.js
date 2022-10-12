import React from "react";
import styled from "./Card.module.scss";
import { Zoom } from "react-reveal";
const Card = ({ title, disc }) => {
  return (
    <>
      <Zoom>
        <div className={styled.CardContainer}>
          <h1>
            {title} <span>{disc}</span>
          </h1>
        </div>
      </Zoom>
    </>
  );
};

export default Card;
