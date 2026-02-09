import React from "react";
import Svg, { Circle, Line } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const SunnyIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    {/* Center sun */}
    <Circle
      cx="256"
      cy="256"
      r="80"
      stroke={color}
      strokeWidth={32}
      fill="none"
    />

    {/* Rays */}
    <Line
      x1="256"
      y1="48"
      x2="256"
      y2="96"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />
    <Line
      x1="256"
      y1="416"
      x2="256"
      y2="464"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />

    <Line
      x1="48"
      y1="256"
      x2="96"
      y2="256"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />
    <Line
      x1="416"
      y1="256"
      x2="464"
      y2="256"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />

    <Line
      x1="96"
      y1="96"
      x2="136"
      y2="136"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />
    <Line
      x1="376"
      y1="376"
      x2="416"
      y2="416"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />

    <Line
      x1="96"
      y1="416"
      x2="136"
      y2="376"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />
    <Line
      x1="376"
      y1="136"
      x2="416"
      y2="96"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
    />
  </Svg>
);

export default SunnyIcon;
