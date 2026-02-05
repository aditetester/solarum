import React from "react";
import Svg, { Line, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SignalTowerIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#1E1E1E",
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
      {/* Signal waves */}
      <Path d="M4.5 7.9a7.5 7.5 0 0 1 15 0" />
      <Path d="M7.5 8.5a4.5 4.5 0 0 1 9 0" />

      {/* Tower */}
      <Line x1="12" y1="7" x2="5" y2="21" />
      <Line x1="12" y1="7" x2="19" y2="21" />

      {/* Tower bars */}
      <Line x1="9" y1="13" x2="15" y2="13" />
      <Line x1="8" y1="17" x2="16" y2="17" />
    </Svg>
  );
};

export default SignalTowerIcon;
