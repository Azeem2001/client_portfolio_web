import React from "react";
import styled from "./Profile.module.scss";

const Profile = () => {
  const women = "./images/woman.jpg";

  return (
    <>
   
          <div className={styled.LeftSide}>
            <img src={women} alt="women" />
          </div>
      
    </>
  );
};

export default Profile;
