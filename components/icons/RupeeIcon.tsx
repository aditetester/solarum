import Svg, { Path } from "react-native-svg";

const RupeeIcon = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M6 3h12v2H11.6c1.7.7 2.9 2.2 3.2 4H18v2h-3.1c-.4 2.7-2.7 5-5.6 5H9l6.5 7H13l-7-7v-2h3.2c1.9 0 3.6-1.2 4-3H6V9h7.2c-.4-1.8-2.1-3-4-3H6V3z"
      fill={color}
    />
  </Svg>
);

export default RupeeIcon;
