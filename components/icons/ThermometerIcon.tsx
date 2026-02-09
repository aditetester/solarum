import React from "react";
import Svg, { Circle, Line, Path } from "react-native-svg";

const ThermometerIcon = ({ size = 24, color = "#000", strokeWidth = 1.2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Thermometer outline */}
    <Path
      d="M14 14.76V5a2 2 0 10-4 0v9.76a4 4 0 104 0z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Inner mercury line */}
    <Line
      x1="12"
      y1="8"
      x2="12"
      y2="16"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />

    {/* Bulb */}
    <Circle cx="12" cy="18" r="2" stroke={color} strokeWidth={strokeWidth} />
  </Svg>
);

export default ThermometerIcon;
