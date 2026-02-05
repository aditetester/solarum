import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ReferEarnIcon: React.FC<IconProps> = ({
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
    {/* Gift box */}
    <Path d="M3 8h18v13H3z" />

    {/* Lid */}
    <Path d="M3 12h18" />

    {/* Vertical ribbon */}
    <Path d="M12 8v13" />

    {/* Bow */}
    <Path d="M12 8s-4-2-4-4a2 2 0 0 1 4 0" />
    <Path d="M12 8s4-2 4-4a2 2 0 0 0-4 0" />
  </Svg>
);

export default ReferEarnIcon;
