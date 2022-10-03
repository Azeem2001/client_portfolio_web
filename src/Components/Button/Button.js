import React from "react";
import styled from "./Button.module.scss"
const Button = ({ title,Icon }) => {
  return (
    <div className={styled.CustomButton} >
      <button variant="outlined">{Icon} {title}</button>
    </div>
  );
};

export default Button;
