import React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ReportIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M8 17v-3" />
      <Path d="M12 17V7" />
      <Path d="M16 17v-8" />
    </Svg>
  );
};

export default ReportIcon;
