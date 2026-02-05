import React from "react";
import Svg, { Circle, Line, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const HelpCenterIcon: React.FC<IconProps> = ({
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
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Rectangle */}
    <Path d="M3 4h18v11H3z" />

    {/* Horizontal divider */}
    <Line x1="4" y1="12" x2="20" y2="12" />

    {/* Center dots on horizontal lines */}
    <Circle cx="12" cy="13.5" r="0.3" />

    {/* Bottom stand */}
    <Path d="M8 20h8" />
    <Path d="M10 15v5" />
    <Path d="M14 15v5" />
  </Svg>
);

export default HelpCenterIcon;
