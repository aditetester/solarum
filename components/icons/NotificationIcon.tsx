import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const NotificationsIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#2EA0E6",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Bell body (moved DOWN) */}
      <Path d="M18 11a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />

      {/* Bell bottom line (moved DOWN) */}
      <Path d="M4 18h16" />

      {/* Clapper (touching bottom line) */}
      <Path d="M9 18a3 3 0 006 0" />
    </Svg>
  );
};

export default NotificationsIcon;
