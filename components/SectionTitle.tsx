import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface SectionTitleProps {
  title: string;
  style?: TextStyle;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  style,
  marginTop = 0,
  marginBottom = 12,
  marginHorizontal = 0,
}) => {
  const { theme: themeName } = useTheme();
  const theme = Colors[themeName];

  return (
    <Text
      style={[
        styles.title,
        { color: theme.text, marginTop, marginBottom, marginHorizontal },
        style,
      ]}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
