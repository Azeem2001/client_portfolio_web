import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "./Myblog.module.scss";
import CustomButton from "../../Components/Button/CustomButton";
import CottageIcon from "@mui/icons-material/Cottage";
import TextField from "@mui/material/TextField";
import MyBlogCard from "../../Components/MyBlogCard/MyBlogCard";
import { client } from "../../client";

const MyBlog = () => {
  const blog_1 = "./images/blog-post-small-1.jpg";
  const [article, setArticle] = useState([]);

  const fetchData = async () => {
    try {
      const { items } = await client.getEntries();
      setArticle(items);
      // console.log(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styled.MyBlogContainer}>
      <div className={styled.MyBlog}>
        <h1>
          MY <span>BLOG</span>
        </h1>
        <Grid container gap={2}>
          <Grid item xl={7.5}>
            <MyBlogCard posts={article} />
          </Grid>
          <Grid item xl={4}>
            <div className={styled.leftSide}>
              <CustomButton
                Icon={<CottageIcon />}
                persentage={"100%"}
                title={"Home"}
              />
              <div className={styled.Input}>
                <input type="text" placeholder="Search In my Blog..." />
              </div>
              <div className={styled.posts}>
                <h3>RECENT POSTS</h3>
                <div className={styled.recentPosts}>
                  <div className={styled.img}>
                    <img src={blog_1} alt="blog_1" />
                  </div>
                  <div className={styled.text}>
                    <h3>Why Theme Forest in the Best</h3>
                    <p>Augest 03 2017</p>
                  </div>
                </div>
                <div className={styled.recentPosts}>
                  <div className={styled.img}>
                    <img src={blog_1} alt="blog_1" />
                  </div>
                  <div className={styled.text}>
                    <h3>Why Theme Forest in the Best</h3>
                    <p>Augest 03 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MyBlog;
