import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const LineArrowIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="-1 -1 26 26"
    fill="none"
    stroke={color}
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Horizontal line */}
    <Path d="M22 12H4" />

    {/* Arrow head */}
    <Path d="M10 6L4 12l6 6" />
  </Svg>
);

export default LineArrowIcon;
