import React from "react";
import Particles from "react-particles-js";
import Navigation from "../../components/Navigation/Navigation";
import Banner from "../../components/Banner/Banner";

import "./MainHeader.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000"
    },

    line_linked: {
      color: "#000000"
    }
  }
};

export default function MainHeader() {
  return (
    <header className="Main-Header">
      <Particles
        className="particles"
        params={particlesOptions}
        // style={{
        //   height: "100vh",
        //   backgroundColor: "white"
        // }}
      />

      <Navigation />
      <Banner />
    </header>
  );
}
