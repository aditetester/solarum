import React from "react";
import Svg, { Path } from "react-native-svg";

const AttachIcon = ({ size = 24, color = "#000", strokeWidth = 2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 12.5l-8.5 8.5a6 6 0 01-8.5-8.5l9-9a4 4 0 115.5 5.5l-9 9a2 2 0 01-3-3l8.5-8.5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default AttachIcon;
