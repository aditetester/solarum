import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const BlogIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <Path
      d="M368 416H144c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h224c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32z"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M176 176h160M176 240h160M176 304h80"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BlogIcon;
