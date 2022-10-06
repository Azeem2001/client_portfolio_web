import React from "react";
import styled from "./Home.module.scss";
import Grid from "@mui/material/Grid";
import Card from "../../Components/Cards/Card";
import Profile from "../../Components/Profile/Profile";
import { useNavigate } from "react-router-dom";
const Home = ({ title, disc }) => {
  const navigate = useNavigate();
  return (
    <div className={styled.HomeContainer}>
      <div className={styled.HomeItem}>
        <div className={styled.RightSide}>
          <div className={styled.Cards}>
            <Grid container spacing={1}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <div className={styled.PersonalInfo}>
                  <h3>HI THERE ! I'M</h3>
                  <h1>LINDA SMITH</h1>
                  <h2>BLOGGER</h2>
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                <div onClick={() => navigate("/about")}>
                  <Card title={"ABOUT"} disc={"ME"} />
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div onClick={() => navigate("/myResume")}>
                <Card title={"MY"} disc={"PORTFOLIO"} xs={12} />
                </div>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
              <div onClick={() => navigate("/contactme")}>

                <Card title={"CONTACT"} disc={"ME"} />
                </div>

              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
