import React from "react";
import Svg, { Line, Rect, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const HorizontalBatteryIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#3FAE49",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Device frame */}
      <Rect x="3" y="4" width="16" height="14" rx="2" />

      {/* Inside bars */}
      <Line x1="7" y1="7" x2="7" y2="15" />
      <Line x1="10" y1="7" x2="10" y2="15" />

      {/* Side indicator */}
      <Line x1="22" y1="7" x2="22" y2="15" />
    </Svg>
  );
};

export default HorizontalBatteryIcon;
