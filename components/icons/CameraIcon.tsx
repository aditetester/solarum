import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const CameraIcon: React.FC<IconProps> = ({
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
    {/* Camera body */}
    <Path
      d="M4 7a3 3 0 0 1 3-3h3l2-2h4l2 1h3a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7z"
      transform="scale(1.1 1.1) translate(-2.5 -2)"
    />

    {/* Camera lens */}
    <Circle cx="9" cy="11" r="4" />

    {/* Flash / indicator dot */}
    <Circle cx="18" cy="7" r="1" fill={color} stroke="none" />
  </Svg>
);

export default CameraIcon;
