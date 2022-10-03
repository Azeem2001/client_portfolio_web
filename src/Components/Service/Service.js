import React from "react";
import styled from "./Service.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Button from "../Button/Button";
const Service = ({ title, Icon }) => {
  return (
    <div className={styled.ServiceContainer}>
      <div className={styled.ServiceItem}>
        <h2>Personal Info</h2>
        <p className={styled.hr}></p>
        <div className={styled.Information}>
          <div className={styled.InfoItem}>
            <p className={styled.para}>
              I am a UI/UX Designer & Web Developer from Silicon Valley, USA. I
              am very passionate and dedicated to my work. I have 5 years more
              work experience. And enjoy working in a team or individual.
            </p>
            <div className={styled.Data}>
              <div>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>First Name - </strong>
                  <span>jason</span>
                </p>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Last Name - </strong>
                  <span>Smith</span>
                </p>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Date of Birth - </strong>
                  <span>08 June 1992</span>
                </p>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Nationality - </strong>
                  <span>United States</span>
                </p>
              </div>
              <div>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Phone - </strong>
                  <span>+76 21 19 34 20</span>
                </p>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Email - </strong>
                  <span>you@yourwebsite.com</span>
                </p>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Address - </strong>
                  <span>Silicon Valley, USA</span>
                </p>
                <p>
                  <KeyboardDoubleArrowRightIcon />
                  <strong>Languages - </strong>
                  <span>English, China</span>
                </p>
              </div>
            </div>
            <div className={styled.Icon}>
              <span>
                <FacebookRoundedIcon />
              </span>
              <span>
                <TwitterIcon />
              </span>
              <span>
                <InstagramIcon />
              </span>
              <span>
                <LinkedInIcon />
              </span>
            </div>
          </div>
          <div className={styled.Button}>
            <Button title={"DownLoad Cv"} Icon={<PictureAsPdfIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
