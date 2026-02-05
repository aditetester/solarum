import React from "react";
import Svg, { Line, Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ProductsIcon: React.FC<IconProps> = ({
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
    {/* Front face */}
    <Path d="M4 9v10l8 3 8-3V9" />

    {/* Top face */}
    <Path d="M4 9l8-4 8 4-8 4-8-4z" />

    {/* Vertical edges */}
    <Path d="M12 13v9" />

    {/* Tape on top */}
    <Path d="M14 7v5" />

    {/* Side markings */}
    <Line x1="6" y1="14" x2="8" y2="15" />
    <Line x1="6" y1="16" x2="8" y2="17" />
  </Svg>
);

export default ProductsIcon;
