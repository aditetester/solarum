import React from "react";
import Svg, { Line, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const BillReceiptIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Receipt body with zig-zag bottom */}
    <Path
      d="M6 2
         h10
         a2 2 0 0 1 2 2
         v14
         l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5
         V4
         a2 2 0 0 1 2-2
         z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinejoin="round"
      fill="none"
    />

    {/* Right-side tab / fold */}
    <Path
      d="M16 2
         h2
         a2 2 0 0 1 2 2
         v4
         h-4
         z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinejoin="round"
      fill="none"
    />

    {/* Text lines */}
    <Line
      x1="8"
      y1="7"
      x2="13"
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
      x2="13"
      y2="13"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
    />
  </Svg>
);

export default BillReceiptIcon;
