import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/images/web.png";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common name="Get started" visit="/service" imgSrc={web}/>
    </>
  );
};

export default Home;
