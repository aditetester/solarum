import { Colors } from "@/constants/theme";
import { useProfile } from "@/context/ProfileContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

type Item = {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  route?: string;
};

const PROFILE_ITEMS: Item[] = [
  { label: "Blog", icon: "document-text-outline", route: "/blog" },
  { label: "Feedback", icon: "chatbox-ellipses-outline", route: "/feedback" },
  { label: "Bill", icon: "receipt-outline", route: "/bill" },
  { label: "Language", icon: "language-outline", route: "/language" },
  { label: "Contact us", icon: "call-outline", route: "/contact" },
  { label: "Help", icon: "help-circle-outline", route: "/help" },
  { label: "Terms & Conditions", icon: "document-outline", route: "/terms" },
];

export default function ProfileScreen() {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const isDark = scheme === "dark";
  const router = useRouter();
  const { profile } = useProfile();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* <Ionicons
          name="arrow-back"
          size={22}
          color={theme.text}
          onPress={() => router.back()}
        /> */}
        <Text style={[styles.headerTitle, { color: theme.text }]}>Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* PROFILE CARD */}
        <TouchableOpacity
          style={[
            styles.profileCard,
            {
              borderColor: theme.systemgray,
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
                borderColor: theme.systemgray,
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
              borderColor: theme.systemgray,
            },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons
              name={isDark ? "moon-outline" : "sunny-outline"}
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
              {isDark ? "Dark Mode" : "Light Mode"}
            </Text>
          </View>

          <Switch
            value={isDark}
            disabled
            trackColor={{
              false: theme.systemgray,
              true: theme.lightblue,
            }}
            thumbColor={theme.white}
          />
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
});
