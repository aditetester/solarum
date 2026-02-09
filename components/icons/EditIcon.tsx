import React from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const EditIcon = ({ size = 24, color = "currentColor" }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 512 512" fill="none">
    <Path
      d="M384 224v184a56 56 0 01-56 56H104a56 56 0 01-56-56V184a56 56 0 0156-56h184"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M459.94 53.25a16 16 0 00-22.63 0L213.16 277.4a4 4 0 00-1 1.6l-16 48a4 4 0 005.06 5.06l48-16a4 4 0 001.6-1L474.74 75.88a16 16 0 000-22.63z"
      stroke={color}
      strokeWidth={32}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default EditIcon;
