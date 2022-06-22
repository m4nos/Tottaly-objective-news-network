import React, { Fragment } from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Fragment>
      <TopBar />
      <Navigation />
    </Fragment>
  );
};

export default Header;
