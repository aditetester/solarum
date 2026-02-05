import React from "react";
import Svg, { Circle, G, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const OMIcon: React.FC<IconProps> = ({
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
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <G transform="translate(8, 3) scale(0.3)">
      {/* Gear */}
      <Path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58-1.92-3.32-2.39.96a7.07 7.07 0 0 0-1.63-.94l-.36-2.54h-3.78l-.36 2.54c-.58.23-1.12.53-1.63.94l-2.39-.96-1.92 3.32 2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58 1.92 3.32 2.39-.96c.51.41 1.05.71 1.63.94l.36 2.54h3.78l.36-2.54c.58-.23 1.12-.53 1.63-.94l2.39.96 1.92-3.32-2.03-1.58z" />

      {/* Center */}
      <Circle cx="13" cy="12" r="3.5" />
    </G>
    <G transform="translate(-2.5, 8) scale(0.5)">
      {/* Gear */}
      <Path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58-1.92-3.32-2.39.96a7.07 7.07 0 0 0-1.63-.94l-.36-2.54h-3.78l-.36 2.54c-.58.23-1.12.53-1.63.94l-2.39-.96-1.92 3.32 2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58 1.92 3.32 2.39-.96c.51.41 1.05.71 1.63.94l.36 2.54h3.78l.36-2.54c.58-.23 1.12-.53 1.63-.94l2.39.96 1.92-3.32-2.03-1.58z" />

      {/* Center */}
      <Circle cx="13" cy="12" r="3.5" />
    </G>

    {/* Warning triangle */}
    <Path d="M14 11l-6 10h12l-6-10z" />

    {/* Exclamation */}
    <Path d="M14 14v3" />
    <Circle cx="14" cy="18.5" r="0.6" />
  </Svg>
);

export default OMIcon;
