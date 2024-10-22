import React from "react";
import {Navigate } from "react-router-dom";
import AuthHandler from "./Authhandler";
import MainComponent from "../components/MainComponents";

const PrivateRouteNew = ({ page, activepage, ...rest }) => {
  return AuthHandler.loggedIn() ? (
    <MainComponent page={page} activepage={activepage} {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouteNew;