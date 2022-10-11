import React from "react";
import BlogCard from "./BlogCard";
import styled from "./BlogCard.module.scss";

const MyBlogCard = ({ posts }) => {
  // console.log(posts);
  return (
    <div>
      <>
        {posts?.map((article, index) => (
          <BlogCard article={article} key={index} />
        ))}
       
      </>
    </div>
  );
};

export default MyBlogCard;
