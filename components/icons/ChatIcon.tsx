import Svg, { Path, SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ChatIcon: React.FC<IconProps> = ({
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
    <Path d="M3 5h12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-4 4v-4H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" />
    <Path d="M9 9h.01M12 9h.01M15 9h.01" />
    {/* <Path d="M14 13a3 3 0 0 0 6 0" /> */}
  </Svg>
);

export default ChatIcon;
