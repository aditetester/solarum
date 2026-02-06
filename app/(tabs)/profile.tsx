import { Colors } from "@/constants/theme";
import { useProfile } from "@/context/ProfileContext";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Item = {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  route?: string;
};

const PROFILE_ITEMS: Item[] = [
  { label: "Blog", icon: "document-text-outline", route: "/blogs" },
  { label: "Feedback", icon: "chatbox-ellipses-outline", route: "/feedback" },
  { label: "Bill", icon: "receipt-outline", route: "/bill" },
  { label: "Language", icon: "language-outline", route: "/language" },
  { label: "Contact us", icon: "call-outline", route: "/contact" },
  { label: "Help", icon: "help-circle-outline", route: "/help" },
  { label: "Terms & Conditions", icon: "document-outline", route: "/terms" },
];

export default function ProfileScreen() {
  const { theme: themeName, isDark, toggleTheme } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();
  const { profile } = useProfile();

  const translateX = useRef(new Animated.Value(isDark ? 28 : 2)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: isDark ? 28 : 2,
      useNativeDriver: true,
      bounciness: 4,
    }).start();
  }, [isDark, translateX]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* PROFILE CARD */}
        <TouchableOpacity
          style={[
            styles.profileCard,
            {
              borderColor: isDark ? theme.borderdark : theme.borderlight,
              backgroundColor: isDark ? theme.carddark : theme.cardlight,
            },
          ]}
          onPress={() => router.push("/edit-profile")}
        >
          <Image
            source={require("@/assets/images/profile/avatar.png")}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={[styles.name, { color: theme.text }]}>
              {profile.name}
            </Text>
            <Text style={{ color: theme.systemgray }}>{profile.email}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Other Settings
        </Text>

        {PROFILE_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.row,
              {
                borderColor: isDark ? theme.borderdark : theme.borderlight,
                backgroundColor: isDark ? theme.carddark : theme.cardlight,
              },
            ]}
            onPress={() =>
              router.push(item.route ? (item.route as any) : "/not-found")
            }
          >
            <View style={styles.rowLeft}>
              <Ionicons
                name={item.icon}
                size={20}
                color={theme.white}
                style={[
                  styles.icon,
                  {
                    backgroundColor: isDark
                      ? theme.lightblue
                      : theme.systemblue,
                  },
                ]}
              />
              <Text style={[styles.rowText, { color: theme.text }]}>
                {item.label}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={theme.systemgray}
            />
          </TouchableOpacity>
        ))}

        {/* THEME MODE */}
        <View
          style={[
            styles.row,
            {
              borderColor: isDark ? theme.borderdark : theme.borderlight,
              backgroundColor: isDark ? theme.carddark : theme.cardlight,
            },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons
              name={isDark ? "sunny-outline" : "moon-outline"}
              size={20}
              color={theme.white}
              style={[
                styles.icon,
                {
                  backgroundColor: isDark ? theme.lightblue : theme.systemblue,
                },
              ]}
            />
            <Text style={[styles.rowText, { color: theme.text }]}>
              {isDark ? "Light Mode" : "Dark Mode"}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleTheme}
            style={[
              styles.customToggle,
              { backgroundColor: isDark ? theme.lightblue : theme.systemgray },
            ]}
          >
            <View style={styles.toggleIcons}>
              <Ionicons
                name="sunny-outline"
                size={14}
                color={theme.white}
                style={{ opacity: isDark ? 1 : 0 }}
              />
              <Ionicons
                name="moon-outline"
                size={14}
                color={theme.white}
                style={{ opacity: isDark ? 0 : 1 }}
              />
            </View>
            <Animated.View
              style={[
                styles.toggleThumb,
                {
                  transform: [{ translateX }],
                },
              ]}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.logoutBtn,
            { backgroundColor: isDark ? theme.systemblue : theme.blue },
          ]}
        >
          <Text style={[styles.logoutText, { color: theme.white }]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    padding: 16,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 13,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  icon: {
    padding: 8,
    borderRadius: 4,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowText: {
    fontSize: 14,
    fontWeight: "500",
  },
  logoutBtn: {
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: {
    fontWeight: "700",
  },
  customToggle: {
    width: 52,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  toggleIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
});
