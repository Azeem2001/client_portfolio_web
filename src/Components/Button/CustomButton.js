import React from "react";
import styled from "./Button.module.scss";
const CustomButton = ({ title, Icon, item }) => {
  return (
    <div className={styled.CustomButton}>
      <button variant="outlined">
        {Icon} {title}
        <span>{ item}</span>
      </button>
    </div>
  );
};

export default CustomButton;
