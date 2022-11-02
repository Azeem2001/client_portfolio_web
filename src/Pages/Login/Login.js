import React from "react";
import { UserAuth } from "../../Components/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db,
} from "../../firebase";
const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();
  const [UserInfo, SetUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    SetUserInfo({ ...UserInfo, [name]: value });
  };

  const postData = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        UserInfo.email,
        UserInfo.password
      );
      const ref = doc(db, "user", user?.uid);
      const response = await setDoc(ref, {
        email: user.email,
        name: UserInfo.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <button
        onClick={handleGoogleSignIn}
        persentage={"100%"}
        title={"Home"}
        method="POST"
      >
        Login with Google
      </button> */}
      <br />
      <br />
      <input
        width={"100%"}
        type="text"
        placeholder="Enter Your Name"
        value={UserInfo.name}
        autoComplete="off"
        name="name"
        required
        onChange={getUserData}
      />
      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Your Email"
        value={UserInfo.email}
        name="email"
        autoComplete="off"
        required
        onChange={getUserData}
      />
      <br />
      <br />

      <input
        type="password"
        placeholder="Enter Your Password"
        value={UserInfo.password}
        autoComplete="off"
        required
        name="password"
        onChange={getUserData}
      />
      <br />

      <br />
      <button onClick={postData}>Submit form</button>
    </div>
  );
};

export default Login;
