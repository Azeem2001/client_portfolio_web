import React from "react";
import styled from "./About.module.scss";
import BadgeIcon from "@mui/icons-material/Badge";
import Service from "../../Components/Service/Service";
const About = () => {
  return (
    <div className={styled.AboutContainer}>
      <div className={styled.heading}>
        <BadgeIcon />
        <div className={styled.verticle}>
          <h3>
            ABOUT <span>ME</span>
          </h3>
        </div>
      </div>
      <div className={styled.InfoSection}>
        <h1>
          ABOUT <span>ME</span>
        </h1>
        <div className={styled.service}>
          <Service />
        </div>
      </div>
    </div>
  );
};

export default About;
