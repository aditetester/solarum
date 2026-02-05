import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function LogoScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace("/onboarding");
  };

  //   const handleGetStarted = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("onboarding_completed");
  //       if (value === "true") {
  //         // If onboarding is already completed, go directly to login
  //         router.replace("/login");
  //       } else {
  //         // Otherwise, show onboarding
  //         router.replace("/onboarding");
  //       }
  //     } catch (error) {
  //       console.error("Error checking onboarding status:", error);
  //       // Default to showing onboarding if there's an error
  //       router.replace("/onboarding");
  //     }
  //   };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? theme.black : theme.white },
      ]}
    >
      <View style={styles.logoContainer}>
        <Image
          source={
            isDark
              ? require("@/assets/images/logo/logo-dark.png")
              : require("@/assets/images/logo/logo.png")
          }
          style={styles.logo}
          contentFit="contain"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isDark ? theme.lightblue : theme.blue },
          ]}
          onPress={handleGetStarted}
          activeOpacity={0.85}
        >
          {/* Left icon container */}
          <View
            style={[
              styles.leftIconContainer,
              { backgroundColor: isDark ? theme.black : theme.white },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              size={18}
              color={isDark ? theme.lightblue : theme.blue}
            />
          </View>

          {/* Button text */}
          <Text
            style={[
              styles.buttonText,
              { color: isDark ? theme.black : theme.white },
            ]}
          >
            Get Started
          </Text>

          {/* Right chevrons */}
          <View style={styles.doubleChevron}>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={isDark ? theme.black : theme.white}
              opacity={0.3}
            />
            <Ionicons
              name="chevron-forward"
              size={22}
              color={isDark ? theme.black : theme.white}
              style={{ opacity: 0.6, marginLeft: -15 }}
            />
            <Ionicons
              name="chevron-forward"
              size={26}
              color={isDark ? theme.black : theme.white}
              style={styles.frontChevron}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.3,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  button: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  leftIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 12,
  },
  doubleChevron: {
    flexDirection: "row",
    alignItems: "center",
  },

  frontChevron: {
    marginLeft: -18,
  },
});
