import React from "react";
import Svg, { Circle, Line, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const HelpIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Outer circle */}
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={2} fill="none" />

    {/* Question mark curve */}
    <Path
      d="M9 9
         a3 3 0 1 1 4.5 2.6
         c-.8.6-1.5 1.1-1.5 2.4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Dot */}
    <Line
      x1="12"
      y1="17"
      x2="12"
      y2="17"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default HelpIcon;
