import { AppButton } from "@/components/AppButton";
import { ScreenHeader } from "@/components/ScreenHeader";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ContactScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  const handleCall = () => {
    Linking.openURL("tel:+1234567890");
  };

  const handleEmail = () => {
    Linking.openURL("mailto:support@solarum.com");
  };

  const handleLocation = () => {
    Linking.openURL("https://maps.google.com");
  };

  const handleSendMessage = () => {
    Linking.openURL("https://wa.me/1234567890");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScreenHeader title="Contact Us" showBackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? theme.carddark : theme.cardlight,
              borderColor: isDark ? theme.borderdark : theme.borderlight,
            },
          ]}
        >
          <TouchableOpacity style={styles.row} onPress={handleCall}>
            <View
              style={[styles.iconBox, { backgroundColor: theme.tint + "20" }]}
            >
              <PhoneIcon size={24} color={theme.tint} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.label, { color: theme.systemgray }]}>
                Phone Number
              </Text>
              <Text style={[styles.value, { color: theme.text }]}>
                +1 234 567 890
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.divider,
              {
                backgroundColor: isDark ? theme.borderdark : theme.borderlight,
              },
            ]}
          />

          <TouchableOpacity style={styles.row} onPress={handleEmail}>
            <View
              style={[styles.iconBox, { backgroundColor: theme.tint + "20" }]}
            >
              <EmailIcon size={24} color={theme.tint} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.label, { color: theme.systemgray }]}>
                Email Address
              </Text>
              <Text style={[styles.value, { color: theme.text }]}>
                support@solarum.com
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.divider,
              {
                backgroundColor: isDark ? theme.borderdark : theme.borderlight,
              },
            ]}
          />

          <TouchableOpacity style={styles.row} onPress={handleLocation}>
            <View
              style={[styles.iconBox, { backgroundColor: theme.tint + "20" }]}
            >
              <LocationIcon size={24} color={theme.tint} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.label, { color: theme.systemgray }]}>
                Office Address
              </Text>
              <Text style={[styles.value, { color: theme.text }]}>
                123 Solarum St, Energy City, Earth
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <AppButton
          title="Send Message"
          style={{ marginTop: 24 }}
          onPress={handleSendMessage}
        />
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
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    width: "100%",
    marginVertical: 4,
  },
});
