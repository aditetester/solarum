import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const CameraIcon = ({ size = 24, color = "#000", strokeWidth = 2 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Camera body */}
    <Path
      d="M4 7h3l2-2h6l2 2h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Lens */}
    <Circle cx="12" cy="13" r="3.5" stroke={color} strokeWidth={strokeWidth} />
  </Svg>
);

export default CameraIcon;
