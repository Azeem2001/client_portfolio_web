import React, { useState } from "react";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import styled from "./Comments.module.scss";
const Comments = () => {
  const [data, setData] = useState([
    // {
    //   userId: "01a",
    //   comId: "012",
    //   fullName: "Riya Negi",
    //   avatarUrl: "https://ui-avatars.com/api/name=Riya&background=random",
    //   userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
    //   text: "Hey, Loved your blog! ",

    //   replies: [],
    // },

    // {
    //   userId: "02b",
    //   comId: "017",
    //   fullName: "Lily",
    //   userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
    //   text: "I have a doubt about the 4th point🤔",
    //   avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
    //   replies: [],
    // },
    // {
    //     userId: "02b",
    //     comId: "017",
    //     fullName: "Bulle",
    //     userProfile: "https://www.linkedin.com/in/riya-negi-8879631a9/",
    //     text: "I have a doubt about the 4th point🤔",
    //     avatarUrl: "https://ui-avatars.com/api/name=Lily&background=random",
    //     replies: [],
    //   },
  ]);

  return (
    <div className={styled.Wrapper}>
      <CommentSection
    
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Riya Negi",
        }}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
        commentData={data}
        onSubmitAction={() =>
          setData([
            {
              comId: "015",
              fullName: "Robert Jae",
              text: "",
              replies: [
                {
                  userId: "01b",
                  comId: "016",
                  userProfile:
                    "https://www.linkedin.com/in/riya-negi-8879631a9/",
                  fullName: "Adam Scott",
                  text: "Thanks! refer to this link -> acs.com",
                  avatarUrl:
                    "https://ui-avatars.com/api/name=Adam&background=random",
                },
              ],
            },
          ])
        }
        onDeleteAction={() => window.prompt("Are you sure?")}
        onReplyAction={() => alert("Reply was posted")}
        onEditAction={() => alert("Reply was edited!")}
      />
    </div>
  );
};

export default Comments;
