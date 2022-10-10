import React from "react";
import styled from "./ContactMe.module.scss";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import CustomButton from "../../Components/Button/CustomButton";
import LanguageIcon from "@mui/icons-material/Language";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { height } from "@mui/system";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

const ContactMe = () => {
  const women1 = "./images/woman.jpg";
  const navigate = useNavigate();
  return (
    <div className={styled.ContactMeContainer}>
      <Grid container >
        <Grid item xl={0.7}  >
          <div className={styled.LeftSide}>
            <div className={styled.Icon}>
              <EmailIcon />
            </div>
            <div className={styled.text}>
              <h1>
                CONTACT <span>ME</span>
              </h1>
            </div>
          </div>
        </Grid>
        <Grid item xl={11.3} lg={11.3} md={11.3} sm={11.3} xs={11.3}>
          <div className={styled.RightSide}>
            <h2>
              CONTACT <span>INFO</span>
            </h2>
            <div className={styled.CrossButton}>
              <button onClick={() => navigate("/")}>
                <CancelIcon />
              </button>
            </div>
            <div className={styled.PersonalData}>
              <h3>Personal Info</h3>
              <p className={styled.Border}></p>
              <div className={styled.content}>
                <div className={styled.PersonalInfo}>
                  <div className={styled.InfoLeft}>
                    <h4>Address</h4>
                    <p>
                      <LocationOnIcon />
                      <span>Silicon Valley, USA</span>
                    </p>
                    <h4>Email</h4>
                    <p>
                      <EmailIcon />
                      <span>you@yourwebsite.com</span>
                    </p>
                  </div>
                  <div className={styled.InfoRight}>
                    <h4>Phone</h4>
                    <p>
                      <StayPrimaryPortraitIcon />
                      <span>+76 21 19 34 20</span>
                    </p>
                    <h4>Website</h4>
                    <p>
                      <LanguageIcon />
                      <span>www.yourwebsite.com</span>
                    </p>
                  </div>
                </div>
                <div className={styled.Icon}>
                  <h4>Social Media</h4>
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
            </div>
             <div className={styled.ContactForm}>
              <div className={styled.PersonalData}>
                <h3>Contact Form</h3>
                <p className={styled.Border}></p>
                <div className={styled.Form}>
                  <p>Want to chat? Send me a message!</p>
                  <div className={styled.FormInput}>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "35ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "72ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Subject"
                        variant="outlined"
                      />
                    </Box>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": {
                          m: 1,
                          width: "64ch",
                          border: "none",
                        },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Message"
                        style={{
                          height: "15vh",
                          borderRadius: 5,
                          padding: "1rem",
                          fontSize: "18px",
                          fontFamily: "sans-serif",
                        }}
                      />
                    </Box>

                    <div className={styled.FormButton}>
                      <CustomButton
                        Icon={<NearMeIcon />}
                        title={"Send"}
                        item={"Message"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactMe;
