import React from "react";
import Svg, { Path } from "react-native-svg";

const WindIcon = ({ size = 24, color = "#000", strokeWidth = 2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Top wind line */}
    <Path
      d="M3 8h7a3 3 0 100-6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Middle wind line */}
    <Path
      d="M3 11h15a3 3 0 100-6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Bottom wind line */}
    <Path
      d="M3 14h15a3 3 0 110 6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default WindIcon;
