import React from "react";

import turbsPortfolio from "./assets/particles-image.svg";

const style = {
  position: "absolute",
  top: "25%",
  left: "4%",
  width: "92%",
  margin: "auto"
};

export default function Banner() {
  return (
    <div style={style} className="Banner">
      <img src={turbsPortfolio} alt="turbs" />
    </div>
  );
}
