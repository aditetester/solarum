import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const EmailIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <Rect
      x="48"
      y="96"
      width="416"
      height="320"
      rx="40"
      ry="40"
      stroke={color}
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M112 160l144 112 144-112"
      stroke={color}
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EmailIcon;
