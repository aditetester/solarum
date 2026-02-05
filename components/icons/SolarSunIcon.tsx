import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SolarSunIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#FF7A00",
  ...props
}) => {
  return (
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
      {/* Sun */}
      <Path d="M8 9a4 4 0 0 1 8 0" />

      {/* Rays */}
      <Path d="M12 1l0 2" />
      <Path d="M6.2 3l1.4 1.4" />
      <Path d="M17.8 3l-1.4 1.4" />
      <Path d="M3.5 9h2" />
      <Path d="M18.5 9h2" />

      {/* Solar panel frame */}
      <Path d="M4 13h16l-2.5 8h-11L4 13z" />

      {/* Vertical grid lines */}
      <Path d="M9 13l1 8" />
      <Path d="M15 13l-1 8" />

      {/* Horizontal grid line */}
      <Path d="M5.5 17h13" />
    </Svg>
  );
};

export default SolarSunIcon;
