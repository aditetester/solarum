import { ScreenHeader } from "@/components/ScreenHeader";
import { CheckmarkIcon } from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const LANGUAGES = [
  { id: "en", name: "English", nativeName: "English" },
  { id: "es", name: "Spanish", nativeName: "Español" },
  { id: "fr", name: "French", nativeName: "Français" },
  { id: "de", name: "German", nativeName: "Deutsch" },
  { id: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { id: "zh", name: "Chinese", nativeName: "中文" },
  { id: "ja", name: "Japanese", nativeName: "日本語" },
];

export default function LanguageScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScreenHeader title="Language" showBackButton />
      <ScrollView contentContainerStyle={styles.content}>
        {LANGUAGES.map((lang) => (
          <TouchableOpacity
            key={lang.id}
            style={[
              styles.langItem,
              {
                backgroundColor: isDark ? theme.carddark : theme.cardlight,
                borderColor:
                  selectedLang === lang.id
                    ? theme.tint
                    : isDark
                      ? theme.borderdark
                      : theme.borderlight,
              },
            ]}
            onPress={() => setSelectedLang(lang.id)}
            activeOpacity={0.7}
          >
            <View>
              <Text style={[styles.langName, { color: theme.text }]}>
                {lang.name}
              </Text>
              <Text style={[styles.nativeName, { color: theme.systemgray }]}>
                {lang.nativeName}
              </Text>
            </View>
            {selectedLang === lang.id && (
              <View style={styles.checkWrapper}>
                <CheckmarkIcon size={16} color={theme.tint} />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  langItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  langName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  nativeName: {
    fontSize: 14,
  },
  checkWrapper: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
