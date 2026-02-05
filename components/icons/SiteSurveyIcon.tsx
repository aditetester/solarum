import React from "react";
import Svg, { Circle, Path, Rect, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SiteSurveyIcon: React.FC<IconProps> = ({
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
    {/* Clipboard */}
    <Rect x="4" y="4" width="16" height="16" rx="2" />
    <Path d="M9 2h6v4H9z" />

    {/* Magnifying glass */}
    <Circle cx="15" cy="15" r="3" />
    <Path d="M17.5 17.5L20 20" />

    {/* Lines on clipboard */}
    <Path d="M7 10h5" />
    <Path d="M7 14h3" />
  </Svg>
);

export default SiteSurveyIcon;
