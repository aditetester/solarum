/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const LIGHTBLUE = "#4BB2E1";
const SYSTEMBLUE = "#2B759C";
const BLUE = "#1E4169";
const MIDNIGHT = "#0F2034";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GRAY = "#666666";
const LIGHTGRAY = "#B3B3B3";
const SYSTEMGRAY = "#8E8E93";
const BORDERLIGHT = "#CCCCCC";
const BORDERDARK = "#333333";
const PLACEHOLDERLIGHT = "#999999";
const PLACEHOLDERDARK = "#666666";
const CARDLIGHT = "#F5F5F5";
const CARDDARK = "#1A1A1A";
const RED = "#F44336";
const BRIGHTRED = "#E53935";
const ORANGE = "#FF9800";
const GOLD = "#FFD700";
const GREEN = "#4CAF50";
const OPACITYGREEN: string = "rgba(12, 215, 43, 0.3)";
const OPACITYBLUE: string = "rgba(13, 189, 216, 0.3)";
const OPACITYRED: string = "rgba(229, 9, 9, 0.3)";
const OPACITYWHITE: string = "rgba(255, 255, 255, 0.2)";

const light = {
  lightblue: LIGHTBLUE,
  blue: BLUE,
  midnight: MIDNIGHT,
  white: WHITE,
  black: BLACK,
  gray: GRAY,
  lightgray: LIGHTGRAY,
  systemgray: SYSTEMGRAY,
  borderlight: BORDERLIGHT,
  borderdark: BORDERDARK,
  placeholderlight: PLACEHOLDERLIGHT,
  placeholderdark: PLACEHOLDERDARK,
  cardlight: CARDLIGHT,
  carddark: CARDDARK,
  red: RED,
  brightred: BRIGHTRED,
  orange: ORANGE,
  gold: GOLD,
  green: GREEN,
  opacitygreen: OPACITYGREEN,
  opacityblue: OPACITYBLUE,
  opacityred: OPACITYRED,
  opacitywhite: OPACITYWHITE,
  systemblue: SYSTEMBLUE,
  // Standard functional mappings for compatibility
  text: BLACK,
  background: WHITE,
  tint: LIGHTBLUE,
  icon: GRAY,
  tabIconDefault: SYSTEMGRAY,
  tabIconSelected: LIGHTBLUE,
};

const dark = {
  lightblue: LIGHTBLUE,
  blue: BLUE,
  midnight: MIDNIGHT,
  white: WHITE,
  black: BLACK,
  gray: GRAY,
  lightgray: LIGHTGRAY,
  systemgray: SYSTEMGRAY,
  borderlight: BORDERLIGHT,
  borderdark: BORDERDARK,
  placeholderlight: PLACEHOLDERLIGHT,
  placeholderdark: PLACEHOLDERDARK,
  cardlight: CARDLIGHT,
  carddark: CARDDARK,
  red: RED,
  brightred: BRIGHTRED,
  orange: ORANGE,
  gold: GOLD,
  green: GREEN,
  opacitygreen: OPACITYGREEN,
  opacityblue: OPACITYBLUE,
  opacityred: OPACITYRED,
  opacitywhite: OPACITYWHITE,
  systemblue: SYSTEMBLUE,
  // Standard functional mappings for compatibility
  text: WHITE,
  background: BLACK,
  tint: LIGHTBLUE,
  icon: LIGHTGRAY,
  tabIconDefault: SYSTEMGRAY,
  tabIconSelected: LIGHTBLUE,
};

export const Colors = { light, dark };

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
