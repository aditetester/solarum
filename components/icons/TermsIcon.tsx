import React from "react";
import Svg, { Line, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const DocumentOutlineIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Document body with folded corner */}
    <Path
      d="M6 2
         h10
         a2 2 0 0 1 2 2
         v10
         l-6 6
         H6
         a2 2 0 0 1-2-2
         V4
         a2 2 0 0 1 2-2
         z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinejoin="round"
      fill="none"
    />

    {/* Folded corner detail */}
    <Path
      d="M12 20v-4a2 2 0 0 1 2-2h4"
      stroke={color}
      strokeWidth={1.2}
      strokeLinejoin="round"
      fill="none"
    />

    {/* Text lines */}
    <Line
      x1="8"
      y1="7"
      x2="14"
      y2="7"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <Line
      x1="8"
      y1="10"
      x2="13"
      y2="10"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
    />
    <Line
      x1="8"
      y1="13"
      x2="12"
      y2="13"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </Svg>
);

export default DocumentOutlineIcon;
