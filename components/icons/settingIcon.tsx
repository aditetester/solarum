import React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const SettingsIcon: React.FC<IconProps> = ({
  size = 24,
  color = "#000",
  ...props
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Gear */}
      <Path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58-1.92-3.32-2.39.96a7.07 7.07 0 0 0-1.63-.94l-.36-2.54h-3.78l-.36 2.54c-.58.23-1.12.53-1.63.94l-2.39-.96-1.92 3.32 2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58 1.92 3.32 2.39-.96c.51.41 1.05.71 1.63.94l.36 2.54h3.78l.36-2.54c.58-.23 1.12-.53 1.63-.94l2.39.96 1.92-3.32-2.03-1.58z" />

      {/* Center circle (perfectly centered) */}
      <Circle cx="13" cy="12" r="3.5" />
    </Svg>
  );
};

export default SettingsIcon;
