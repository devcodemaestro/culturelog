import React from "react";

const Star = ({ num }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/images/icon_star_white.svg"}></img>
      <img src={process.env.PUBLIC_URL + "/images/icon_star_yellow.svg"}></img>
    </div>
  );
};

export default Star;
