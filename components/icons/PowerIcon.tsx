import React from "react";
import Svg, { Line, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const PowerIcon = ({ size = 24, color = "#000" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Outer circle with TOP gap */}
    <Path
      d="M4.5 8
         a8 8 0 1 0 15 0"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      fill="none"
    />

    {/* Vertical power line */}
    <Line
      x1="12"
      y1="5"
      x2="12"
      y2="11"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default PowerIcon;
