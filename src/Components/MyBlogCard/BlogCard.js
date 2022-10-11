import React, { useState } from "react";
import styled from "./BlogCard.module.scss";
import CustomButton from "../Button/CustomButton";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import AddLinkIcon from "@mui/icons-material/AddLink";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const BlogCard = ({ article }) => {
  const { blogHeading, blogImage, blogContent } = article?.fields;

  return (
    <>
      {blogHeading ? (
        <div className={styled.BlogCardContainer}>
          <h2>{blogHeading}</h2>
          {blogImage ? (
            <img src={blogImage?.fields?.file?.url} alt={blogHeading} />
          ) : null}
          <p>{blogContent}</p>
          <div>
            <CustomButton title={"Read"} item={"More"} />
          </div>
          <div className={styled.footer}>
            <div className={styled.footerItem}>
              <p>
                <SupervisorAccountIcon /> <span>admin</span>
              </p>
              <p>
                <CalendarMonthIcon /> <strong>9 Jan 2017</strong>
              </p>
              <p>
                <MessageIcon /> <span>18</span>
              </p>
              <p>
                <LocalOfferIcon /> <strong>js, php, html</strong>
              </p>
              <p>
                <AddLinkIcon /> <span>permalink</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BlogCard;
