import React, { Fragment } from "react";
import Heading from "../UI/Heading";
import PasswordComponent from "../Layout/PasswordComponent";

const Home = () => {
  return (
    <Fragment>
      <Heading className="m-6 text-5xl">Password Generator</Heading>
      <PasswordComponent />
    </Fragment>
  );
};

export default Home;
