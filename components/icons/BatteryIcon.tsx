import React from "react";
import Svg, { Rect, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const BatteryIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#4CAF50",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Battery body */}
      <Rect x="3" y="3" width="16" height="20" rx="2" ry="2" />

      {/* Battery top */}
      <Rect
        x="8"
        y="-1"
        width="5"
        height="5"
        rx="1"
        ry="1"
        fill={color}
        stroke="none"
      />

      {/* Battery bars */}
      <Rect x="6" y="18" width="10" height="2" fill={color} stroke="none" />
      <Rect x="6" y="15" width="10" height="2" fill={color} stroke="none" />
      <Rect x="6" y="12" width="10" height="2" fill={color} stroke="none" />
    </Svg>
  );
};

export default BatteryIcon;
