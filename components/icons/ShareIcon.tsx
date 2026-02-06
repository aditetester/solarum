import React from "react";
import Svg, { Circle, Line, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ShareIcon: React.FC<IconProps> = ({
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
    {/* Top right circle */}
    <Circle cx="18" cy="5" r="3" />

    {/* Bottom right circle */}
    <Circle cx="18" cy="19" r="3" />

    {/* Left circle */}
    <Circle cx="6" cy="12" r="3" />

    {/* Connecting lines */}
    <Line x1="8.7" y1="10.8" x2="15.3" y2="6.2" />
    <Line x1="8.7" y1="13.2" x2="15.3" y2="17.8" />
  </Svg>
);

export default ShareIcon;
