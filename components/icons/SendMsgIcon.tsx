import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SendMsgIcon: React.FC<IconProps> = ({
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
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Outer paper-plane / send shape */}
    <Path d="M2 12L22 2 16 12 22 22 2 12Z" />

    {/* Inner divider line */}
    <Path d="M2 12h14" />
  </Svg>
);

export default SendMsgIcon;
