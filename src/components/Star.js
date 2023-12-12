import styled from "@emotion/styled";
import React from "react";

const Star = ({ num }) => {
  const starView = num * 10 + "px";
  const StarWrap = styled.div`
    overflow: hidden;
    width: ${starView};
    background: url(${process.env.PUBLIC_URL + "/images/icon_star_white.svg"})
      no-repeat;

    .point-star {
      z-index: 10;
      height: 19px;
      width: 100px;
    }
  `;
  return (
    <StarWrap>
      <img
        src={process.env.PUBLIC_URL + "/images/icon_star_yellow.svg"}
        className="point-star"
      />
    </StarWrap>
  );
};

export default Star;
