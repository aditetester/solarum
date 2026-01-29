import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ServiceIcon: React.FC<IconProps> = ({
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* The Wrench Path */}
      <Path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
      {/* <Path d="M9.3 17.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-3.77 3.77a6 6 0 0 1 7.94-7.94l6.91-6.91a2.12 2.12 0 0 1 3 3l-6.91 6.91a6 6 0 0 1-7.94 7.94l3.77-3.77z" /> */}

      {/* <Path
        d="M19 4a1 1 0 0 0 0 1.4l1 1a1 1 0 0 0 1.4 0l1.1-1.1a5 5 0 0 1-6.9 6.9l-3.5 3.5a2 2 0 0 1-2.8-2.8l3.5-3.5a5 5 0 0 1 6.9-6.9l-1.1 1.1z 
     M5 20a1 1 0 0 0 0-1.4l-1-1a1 1 0 0 0-1.4 0l-1.1 1.1a5 5 0 0 1 6.9-6.9l3.5-3.5a2 2 0 0 1 2.8 2.8l-3.5 3.5a5 5 0 0 1-6.9 6.9l1.1-1.1z"
        strokeLinecap="round"
        strokeLinejoin="round"
      /> */}
    </Svg>
  );
};

export default ServiceIcon;
