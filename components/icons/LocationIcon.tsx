import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const LocationIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <Path
      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.75 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.75 400 272.07 400 185c0-75.61-64.5-137-144-137z"
      stroke={color}
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="256"
      cy="192"
      r="48"
      stroke={color}
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LocationIcon;
