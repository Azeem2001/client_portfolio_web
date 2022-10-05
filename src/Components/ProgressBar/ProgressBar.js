import React from "react";
import styled from "./ProgressBar.module.scss";
import Marquee from "react-fast-marquee";

const ProgressBar = ({ auto }) => {
  return (
    <div className={styled.animation_bar_1}>
      <Marquee speed={100} direction={"right"} gradientColor={"none"}>
        <span className={`auto.${{ auto }}`}></span>
      </Marquee>
    </div>
  );
};

export default ProgressBar;
