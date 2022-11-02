import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "./Myblog.module.scss";
import CustomButton from "../../Components/Button/CustomButton";
import CottageIcon from "@mui/icons-material/Cottage";
import TextField from "@mui/material/TextField";
import MyBlogCard from "../../Components/MyBlogCard/MyBlogCard";
import { client } from "../../client";
import Comments from "../../Components/Comments/Comment";
import { useNavigate } from "react-router-dom";
const MyBlog = () => {
  const blog_1 = "./images/blog-post-small-1.jpg";
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();
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
  }, [setArticle]);
  console.log(article[0]?.fields);
  return (
    <div className={styled.MyBlogContainer}>
      <div className={styled.MyBlog}>
        <h1>
          MY <span>BLOG</span>
        </h1>
        <Grid container gap={2}>
          <Grid item xl={7.5}>
            <MyBlogCard posts={article} />
            <Comments />

          </Grid>
          <Grid item xl={4}>
            <div className={styled.leftSide}>
              <CustomButton
                Icon={<CottageIcon />}
                persentage={"100%"}
                title={"Home"}
                onClick={() => navigate("/")}
              />
              <div className={styled.Input}>
                <input type="text" placeholder="Search In my Blog..." />
              </div>
              <div className={styled.posts}>
                <h3>RECENT POSTS</h3>

                {article.map((items, index) =>
                  items?.fields?.blogImage ? (
                    <div className={styled.recentPosts}>
                      <div className={styled.img}>
                        {console.log(
                          items?.fields.blogImage?.fields?.file?.url
                        )}
                        {items?.fields.blogImage ? (
                          <img
                            src={items?.fields.blogImage?.fields?.file?.url}
                            alt={items?.fields?.blogHeading}
                          />
                        ) : null}
                      </div>
                      <div className={styled.text}>
                        <h3>{items.fields?.blogHeading}</h3>
                        <p>{items.fields?.blogDate}</p>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>

          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default MyBlog;
