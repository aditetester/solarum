import { AppButton } from "@/components/AppButton";
import {
  ArrowIcon,
  BillIcon,
  BlogIcon,
  FeedbackIcon,
  HelpIcon,
  LanguageIcon,
  MoonIcon,
  PhoneIcon,
  TermsIcon,
} from "@/components/icons";
import SunnyIcon from "@/components/icons/SunIcon";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { SettingsItem } from "@/components/SettingsItem";
import { Colors } from "@/constants/theme";
import { useProfile } from "@/context/ProfileContext";
import { useTheme } from "@/context/ThemeContext";
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
  icon: React.ReactNode;
  route?: string;
};

const PROFILE_ITEMS: Item[] = [
  {
    label: "Blog",
    icon: <BlogIcon size={22} />,
    route: "/blogs",
  },
  {
    label: "Feedback",
    icon: <FeedbackIcon size={22} />,
    route: "/feedback",
  },
  {
    label: "Bill",
    icon: <BillIcon size={22} />,
    route: "/bill",
  },
  {
    label: "Language",
    icon: <LanguageIcon size={22} />,
    route: "/language",
  },
  {
    label: "Contact us",
    icon: <PhoneIcon size={22} />,
    route: "/contact",
  },
  {
    label: "Help",
    icon: <HelpIcon size={22} />,
    route: "/help",
  },
  {
    label: "Terms & Conditions",
    icon: <TermsIcon size={22} />,
    route: "/terms",
  },
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
      <ScreenHeader title="Profile" />

      <ScrollView contentContainerStyle={styles.content}>
        {/* PROFILE CARD */}
        <TouchableOpacity
          style={[
            styles.profileCard,
            {
              borderColor: isDark ? theme.white : theme.systemgray,
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
          <ArrowIcon color={theme.text} size={20} />
        </TouchableOpacity>

        <SectionTitle title="Other Settings" style={styles.sectionTitle} />

        {PROFILE_ITEMS.map((item, index) => (
          <SettingsItem
            key={index}
            label={item.label}
            icon={item.icon}
            iconColor={theme.white}
            onPress={() =>
              router.push(item.route ? (item.route as any) : "/not-found")
            }
          />
        ))}

        {/* THEME MODE */}
        <SettingsItem
          label={isDark ? "Light Mode" : "Dark Mode"}
          icon={
            isDark ? (
              <SunnyIcon color={theme.white} size={20} />
            ) : (
              <MoonIcon color={theme.white} size={20} />
            )
          }
          showChevron={false}
          rightComponent={
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={toggleTheme}
              style={[
                styles.customToggle,
                {
                  backgroundColor: isDark ? theme.lightblue : theme.systemgray,
                },
              ]}
            >
              <View style={styles.toggleIcons}>
                <SunnyIcon color={theme.white} size={14} />
                <MoonIcon color={theme.white} size={14} />
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
          }
        />

        <AppButton
          title="Log Out"
          variant="logout"
          onPress={() => router.replace("/logo")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
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
  rowText: {
    fontSize: 14,
    fontWeight: "500",
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
