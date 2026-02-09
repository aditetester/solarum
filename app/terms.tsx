import { ScreenHeader } from "@/components/ScreenHeader";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function TermsScreen() {
  const { theme: themeName } = useTheme();
  const theme = Colors[themeName];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScreenHeader title="Terms & Conditions" showBackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.heading, { color: theme.text }]}>
          Introduction
        </Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>
          Welcome to Solarum. By using our app, you agree to comply with and be
          bound by the following terms and conditions. Please review them
          carefully.
        </Text>

        <Text style={[styles.heading, { color: theme.text }]}>
          Use of Service
        </Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>
          You agree to use the Solarum app only for lawful purposes. You are
          prohibited from using the app to violate any local, state, national,
          or international laws.
        </Text>

        <Text style={[styles.heading, { color: theme.text }]}>
          Privacy Policy
        </Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and share your personal information.
        </Text>

        <Text style={[styles.heading, { color: theme.text }]}>
          Modifications
        </Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>
          Solarum reserves the right to modify these terms at any time. Your
          continued use of the app after any such changes constitutes your
          acceptance of the new terms.
        </Text>

        <Text style={[styles.heading, { color: theme.text }]}>Contact Us</Text>
        <Text style={[styles.paragraph, { color: theme.text }]}>
          If you have any questions about these Terms, please contact us at
          support@solarum.com.
        </Text>
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
    paddingBottom: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,
    textAlign: "justify",
  },
});
