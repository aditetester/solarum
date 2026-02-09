import React from "react";
import Svg, { Circle } from "react-native-svg";

const EllipsisVerticalIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="5" r="1.8" fill={color} />
    <Circle cx="12" cy="12" r="1.8" fill={color} />
    <Circle cx="12" cy="19" r="1.8" fill={color} />
  </Svg>
);

export default EllipsisVerticalIcon;
