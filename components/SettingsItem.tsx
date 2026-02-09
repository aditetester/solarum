import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowIcon } from "./icons";

interface SettingsItemProps {
  label: string;
  icon?: React.ReactNode;
  iconColor?: string;
  iconBackgroundColor?: string;
  onPress?: () => void;
  rightComponent?: React.ReactNode;
  showChevron?: boolean;
}

export const SettingsItem: React.FC<SettingsItemProps> = ({
  label,
  icon,
  iconColor,
  iconBackgroundColor,
  onPress,
  rightComponent,
  showChevron = true,
}) => {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  const defaultIconBg = isDark ? theme.lightblue : theme.systemblue;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: isDark ? theme.borderdark : theme.borderlight,
          backgroundColor: isDark ? theme.carddark : theme.cardlight,
        },
      ]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.leftContent}>
        {icon && (
          <View
            style={[
              styles.icon,
              { backgroundColor: iconBackgroundColor || defaultIconBg },
            ]}
          >
            {React.cloneElement(icon as React.ReactElement<any>, {
              color: iconColor || theme.white,
            })}
          </View>
        )}

        <Text style={[styles.label, { color: theme.text }]}>{label}</Text>
      </View>

      <View style={styles.rightContent}>
        {rightComponent}
        {showChevron && !rightComponent && (
          <ArrowIcon color={theme.systemgray} size={18} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    padding: 8,
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
