import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const WifiIcon = ({ size = 24, color = "#000", strokeWidth = 2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Outer wave */}
    <Path
      d="M2.5 9.5a14 14 0 0119 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Middle wave */}
    <Path
      d="M6 13a9 9 0 0112 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner wave */}
    <Path
      d="M9.5 16.5a4.5 4.5 0 015 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Dot */}
    <Circle cx="12" cy="20" r="1.5" fill={color} />
  </Svg>
);

export default WifiIcon;
