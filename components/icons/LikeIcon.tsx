import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const LikeIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
  ...props
}) => (
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
    {/* Thumb + Hand outline (single continuous shape) */}
    <Path
      d="
      M2 11
      v10
      h4
      V11
      Z
      M6 11
      l5-7
      c.5-.7 1.5-1 2.4-.7
      1 .4 1.6 1.4 1.6 2.5
      V9
      h4
      c1.7 0 3 1.3 3 3
      v6
      c0 1.7-1.3 3-3 3
      H6
    "
    />
  </Svg>
);

export default LikeIcon;
