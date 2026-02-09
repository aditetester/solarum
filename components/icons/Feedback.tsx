import React from "react";
import Svg, { Path, Polygon } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const RatingOutlineIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Middle star (already moved up) */}
    <Polygon
      points="12 0.1 13 2.8 15.2 3.2 13.6 4.8 14 7 12 5.9 10 7 10.4 4.8 8.8 3.2 11 2.8"
      stroke={color}
      strokeWidth={1.2}
      fill="none"
      strokeLinejoin="round"
    />

    {/* Left star */}
    <Polygon
      points="5 3.2 5.6 4.6 7.1 4.8 6 5.8 6.3 7.2 5 6.4 3.7 7.2 4 5.8 2.9 4.8 4.4 4.6"
      stroke={color}
      strokeWidth={1.2}
      fill="none"
      strokeLinejoin="round"
    />

    {/* Right star */}
    <Polygon
      points="19 3.2 19.6 4.6 21.1 4.8 20 5.8 20.3 7.2 19 6.4 17.7 7.2 18 5.8 16.9 4.8 18.4 4.6"
      stroke={color}
      strokeWidth={1.2}
      fill="none"
      strokeLinejoin="round"
    />

    {/* Thumbs up (moved DOWN slightly more) */}
    <Path
      d="M9 24h6c.8 0 1.5-.5 1.7-1.3l1.3-6.2
         c.2-1-.5-2-1.6-2h-4V7.8
         c0-.6-.7-1-1.2-.6L9 10.1V24z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Thumb base (moved DOWN slightly more) */}
    <Path
      d="M5 14v8.5c0 .6.4 1 1 1h3v-10H6c-.6 0-1 .4-1 1z"
      stroke={color}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

export default RatingOutlineIcon;
