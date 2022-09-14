import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";
import Login from "../routes/Login";

const AuthRoutes = () => {
  const user = useRecoilValue(userState);
  console.log("user at AuthRoute: ", user);
  return user ? <Outlet /> : <Login />;
};

export default AuthRoutes;
