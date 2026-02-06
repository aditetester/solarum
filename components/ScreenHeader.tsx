import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: React.ReactNode;
  centerTitle?: boolean;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
  rightComponent,
  centerTitle = true,
}) => {
  const { theme: themeName } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  return (
    <View style={[styles.header, { marginTop: insets.top }]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={[
          styles.titleContainer,
          !centerTitle && styles.titleContainerLeft,
        ]}
      >
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        {rightComponent || <View style={{ width: 24 }} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 50,
  },
  leftContainer: {
    width: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainerLeft: {
    alignItems: "flex-start",
    paddingLeft: 4,
  },
  rightContainer: {
    width: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 4,
  },
});
