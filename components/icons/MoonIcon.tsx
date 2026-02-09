import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const MoonIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <Path
      d="M264 480A232 232 0 0132 248c0-94 56-176 136-212
         12-6 24 8 18 20a176 176 0 00246 246
         c12-6 26 6 20 18
         -36 80-118 136-212 136z"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export default MoonIcon;
