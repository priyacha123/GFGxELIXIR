"use client"

import React from "react";
import { useState } from "react";
import { WindowSizeStarField } from "starfield-react"

const props = {
  count: 939,
  speed: 2.8,
  starRatio: 81,
  starSize: 2,
  randomColor: false,
  starStyle: "#fff",
  starShape: "round",
  clear: true,
  bgStyle: "#000",
  noBackground: false,
  fps: 60,
};

const StarField = () => {
  const [propsState] = useState(props);

  return (
    <div>
      <WindowSizeStarField {...propsState} />
    </div>
  );
};

export default StarField;
