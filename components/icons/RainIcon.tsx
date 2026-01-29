import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const RainIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#1A73E8",
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
      <Path d="M6 15a4 4 0 1 1 .8-7.9A5 5 0 0 1 18 9a3 3 0 0 1-1 6H6Z" />
      <Path d="M6 20l-1 2" />
      <Path d="M11 20l-1 2" />
      <Path d="M16 20l-1 2" />
    </Svg>
  );
};

export default RainIcon;
