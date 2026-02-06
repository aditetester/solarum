import * as Icons from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline" | "danger" | "logout";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  iconName?: keyof typeof Icons;
  iconSize?: number;
  iconColor?: string;
  iconPosition?: "left" | "right";
  iconStyle?: StyleProp<ViewStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  style,
  textStyle,
  disabled = false,
  iconName,
  iconSize = 20,
  iconColor,
  iconPosition = "right",
  iconStyle,
}) => {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: isDark ? theme.lightblue : theme.blue,
        };
      case "secondary":
        return {
          backgroundColor: theme.lightblue,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: isDark ? theme.lightblue : theme.blue,
        };
      case "danger":
        return {
          backgroundColor: theme.red,
        };
      case "logout":
        return {
          backgroundColor: isDark ? theme.systemblue : theme.blue,
          marginTop: 24,
        };
      default:
        return {
          backgroundColor: theme.blue,
        };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "outline":
        return isDark ? theme.lightblue : theme.blue;
      default:
        return isDark ? theme.black : theme.white;
    }
  };

  const textColor = getTextColor();
  const finalIconColor = iconColor || textColor;
  const IconComponent = iconName ? (Icons as any)[iconName] : null;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {IconComponent && iconPosition === "left" && (
          <IconComponent
            size={iconSize}
            color={finalIconColor}
            style={[styles.leftIcon, iconStyle]}
          />
        )}
        <Text style={[styles.text, { color: textColor }, textStyle]}>
          {title}
        </Text>
        {IconComponent && iconPosition === "right" && (
          <IconComponent
            size={iconSize}
            color={finalIconColor}
            style={[styles.rightIcon, iconStyle]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});
