import styled from "@emotion/styled";
import React from "react";

const Star = ({ num, width }) => {
  const starView = num * 10 + "px";
  const StarWrap = styled.div`
    overflow: hidden;
    width: ${starView};

    .point-star {
      z-index: 10;
      height: 19px;
      width: ${width ? width : "100"}px;
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
