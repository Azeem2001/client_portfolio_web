import React from "react";
import styled from "./Home.module.scss";
import Grid from "@mui/material/Grid";
import Card from "../../Components/Cards/Card";
import Profile from "../../Components/Profile/Profile";
const Home = ({ title, disc }) => {
  return (
    <div className={styled.HomeContainer}>
      <div className={styled.HomeItem}>
        <Grid container>
          <Grid item xs={12}>
            <div className={styled.RightSide}>
              <div className={styled.Cards}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <div className={styled.PersonalInfo}>
                      <h3>HI THERE ! I'M</h3>
                      <h1>LINDA SMITH</h1>
                      <h2>BLOGGER</h2>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Card title={"ABOUT"} disc={"ME"} />
                  </Grid>
                  <Grid item xs={6}>
                    <Card title={"MY"} disc={"PORTFOLIO"} />
                  </Grid>
                  <Grid item xs={6}>
                    <Card title={"GET"} disc={"IN TOUCH"} />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
