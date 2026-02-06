import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

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
    viewBox="-1 -1 26 26" // padding to prevent stroke clipping
    fill="none"
    stroke={color}
    strokeWidth={1.3}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Document outline with folded corner */}
    <Path d="M6 2h12l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <Path d="M16 2v5h5" />

    {/* Checkboxes */}
    <Rect x="6" y="8" width="3" height="3" rx="0.5" />
    <Rect x="6" y="13" width="3" height="3" rx="0.5" />
    <Rect x="6" y="18" width="3" height="3" rx="0.5" />

    {/* Text lines */}
    <Path d="M11 9h5" />
    <Path d="M11 14h5" />
    <Path d="M11 19h5" />

    {/* Pencil (edit icon) */}
    <Path d="M18 14l5-5 3 3-5 5-3 .5.5-3z" />
  </Svg>
);

export default SiteSurveyIcon;
