import React from "react";
import Svg, { Circle, Line, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SearchIcon: React.FC<IconProps> = ({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Circle cx="11" cy="11" r="7" />
      <Line x1="16.65" y1="16.65" x2="21" y2="21" />
    </Svg>
  );
};

export default SearchIcon;
