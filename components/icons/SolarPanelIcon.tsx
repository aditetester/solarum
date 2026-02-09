import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SolarPanelIcon: React.FC<IconProps> = ({
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
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Panel frame (top shorter than bottom) */}
      <Path d="M6 4h12l3 8H3l3-8z" />

      {/* Vertical grid lines */}
      <Path d="M10 4L9 12" />
      <Path d="M14 4l1 8" />

      {/* Horizontal grid line */}
      <Path d="M5 8h14" />

      {/* Stand */}
      <Path d="M12 12v5" />
      <Path d="M8.5 17h7" />
    </Svg>
  );
};

export default SolarPanelIcon;
