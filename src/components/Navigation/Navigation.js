import React from "react";

import "./Navigation.css";

import turbs from "./assets/turbs-logo.svg";
import behance from "./assets/behance-icon.svg";
import linkedin from "./assets/linkedin-icon.svg";
import github from "./assets/github-icon.svg";
import dribbble from "./assets/dribbble-icon.svg";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <figure>
        <img src={turbs} alt="turbs-logo" />
      </figure>
      <ul className="social">
        <a href="/">
          <img src={behance} alt="behance" />
        </a>
        <a href="/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="/">
          <img src={github} alt="github" />
        </a>
        <a href="/">
          <img src={dribbble} alt="dribbble" />
        </a>
      </ul>
      <ul className="menu">
        <a href="#about">About</a>
        <a href="#about">P1</a>
        <a href="#about">
          <ul>
            <a href="#about">P1</a>
            <a href="#about">P2</a>
            <a href="#about">P3</a>
            <a href="#about">P4</a>
          </ul>
          menu
        </a>
      </ul>
    </nav>
  );
}
