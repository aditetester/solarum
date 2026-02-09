// import React from "react";
// import Svg, { Path } from "react-native-svg";

// type Props = {
//   size?: number;
//   color?: string;
// };

// const LanguageIcon = ({ size = 24, color = "currentColor" }: Props) => (
//   <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
//     <Path
//       d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h137"
//       stroke={color}
//       strokeWidth={32}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <Path
//       d="M281.3 112S257 206 199 277c-52.1 63.7-121 106-121 106M256 336s-35-27-72-75"
//       stroke={color}
//       strokeWidth={32}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </Svg>
// );

// export default LanguageIcon;

import React from "react";
import Svg, { Circle, Line, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const LanguageIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* Outer circle */}
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={2} fill="none" />

    {/* Horizontal line */}
    <Line
      x1="4"
      y1="15"
      x2="20"
      y2="15"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />

    {/* Horizontal line */}
    <Line
      x1="4"
      y1="9"
      x2="20"
      y2="9"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />

    {/* Vertical curved lines */}
    <Path
      d="M10 2
         a6 10 0 0 1 0 20"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
    <Path
      d="M14 2
         a6 10 0 0 0 0 20"
      stroke={color}
      strokeWidth={2}
      fill="none"
    />
  </Svg>
);

export default LanguageIcon;
