import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const GridIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#1E4169",
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
      <Circle cx="12" cy="12" r="2" />
      <Path d="M12 10a4 4 0 0 0-4 4" />
      <Path d="M12 6a8 8 0 0 0-8 8" />
      <Path d="M12 2a12 12 0 0 0-12 12" />
      <Path d="M12 10a4 4 0 0 1 4 4" />
      <Path d="M12 6a8 8 0 0 1 8 8" />
      <Path d="M12 2a12 12 0 0 1 12 12" />
    </Svg>
  );
};

export default GridIcon;
