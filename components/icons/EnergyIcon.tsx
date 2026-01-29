import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const EnergyIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#D32F2F",
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
      <Path d="M13 2L3 14h7l-1 9 10-12h-7l1-8Z" />
    </Svg>
  );
};

export default EnergyIcon;
