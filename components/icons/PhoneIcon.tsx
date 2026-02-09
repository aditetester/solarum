import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const PhoneIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <Path
      d="M391 351c-20.8 0-41-3.4-60.2-9.9a32 32 0 00-31.1 7.3l-46.4 34.9a352 352 0 01-160-160l34.9-46.4a32 32 0 007.3-31.1A240.9 240.9 0 01125 121c0-17.7-14.3-32-32-32H56a32 32 0 00-32 32c0 203.9 165.1 369 369 369a32 32 0 0032-32v-37c0-17.7-14.3-32-32-32z"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PhoneIcon;
