import React from "react";
import Svg, { Circle, Line, Rect, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const CleaningIcon: React.FC<IconProps> = ({
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
    {/* Solar panel */}
    <Rect x="5" y="9" width="14" height="7" rx="1" />

    {/* Panel grid */}
    <Line x1="9" y1="9" x2="9" y2="16" />
    <Line x1="13" y1="9" x2="13" y2="16" />
    <Line x1="5" y1="12.5" x2="19" y2="12.5" />

    {/* Stand */}
    <Line x1="12" y1="16" x2="12" y2="19" />
    <Line x1="9" y1="20" x2="15" y2="20" />

    {/* Cleaning bubbles */}
    <Circle cx="15.5" cy="6" r="0.7" />
    <Circle cx="18" cy="7.5" r="0.6" />
    <Circle cx="16.5" cy="9" r="0.5" />
  </Svg>
);

export default CleaningIcon;
