import React from "react";
import styled from "./Button.module.scss";
const CustomButton = ({ title, Icon, item,persentage }) => {
  return (
    <div className={styled.CustomButton}>
      <button variant="outlined" style={{width: persentage}}>
        {Icon} {title}
        <span>{ item}</span>
      </button>
    </div>
  );
};

export default CustomButton;
