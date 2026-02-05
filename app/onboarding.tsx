import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";

import { useTheme } from "@/context/ThemeContext";
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ONBOARDING_DATA = [
  {
    id: "1",
    title: "Explore Solar",
    description:
      "Discover products, services, monitoring, learning — all inside Solarium.",
    imageLight: require("@/assets/images/onboarding/onboarding-1.png"),
    imageDark: require("@/assets/images/onboarding/onboarding-dark-1.png"),
  },
  {
    id: "2",
    title: "Easy Installation",
    description:
      "Book solar installation, repair, AMC, and expert technicians in minutes.",
    imageLight: require("@/assets/images/onboarding/onboarding-2.png"),
    imageDark: require("@/assets/images/onboarding/onboarding-dark-2.png"),
  },
  {
    id: "3",
    title: "Explore Solar Smarter",
    description:
      "Join discussions, learn solar concepts, share ideas, and become solar smart.",
    imageLight: require("@/assets/images/onboarding/onboarding-3.png"),
    imageDark: require("@/assets/images/onboarding/onboarding-dark-3.png"),
  },
];

export default function OnboardingScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboarding_completed", "true");
      router.replace("/login");
    } catch (error) {
      console.error("Error saving onboarding state:", error);
      router.replace("/login");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    } else {
      router.replace("/logo");
    }
  };

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      completeOnboarding();
    }
  };

  const renderItem = ({ item }: { item: (typeof ONBOARDING_DATA)[0] }) => (
    <View style={styles.slide}>
      {/* <View style={styles.backgroundContainer}>
        <Image
          source={require("@/assets/images/onboarding/background.png")}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View
          style={[
            styles.gradientOverlay,
            {
              backgroundColor: isDark
                ? "rgba(0, 0, 0, 0.3)"
                : "rgba(255, 255, 255, 0.3)",
            },
          ]}
        />
      </View> */}
      <View style={styles.imageContainer}>
        <View
          style={[
            styles.imageFrame,
            {
              backgroundColor: isDark
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(0, 0, 0, 0.02)",
            },
          ]}
        >
          <Image
            source={isDark ? item.imageDark : item.imageLight}
            style={styles.image}
            contentFit="cover"
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={[styles.title, { color: isDark ? theme.white : theme.black }]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.description,
            { color: isDark ? theme.lightgray : theme.gray },
          ]}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? theme.black : theme.white },
      ]}
    >
      {/* Single Background Image - Fixed behind everything */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require("@/assets/images/onboarding/background.png")}
          style={styles.backgroundImage}
          contentFit="cover"
        />
        {/* Bottom fade */}
        <LinearGradient
          colors={["transparent", isDark ? theme.black : theme.white]}
          locations={[0.4, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={isDark ? theme.white : theme.black}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={completeOnboarding}>
          <Text
            style={[
              styles.skipText,
              { color: isDark ? theme.white : theme.black },
            ]}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: height * 0.15 }}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {ONBOARDING_DATA.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor: isDark
                    ? currentIndex === index
                      ? theme.lightblue
                      : theme.borderdark
                    : currentIndex === index
                      ? theme.blue
                      : theme.borderlight,
                  width: currentIndex === index ? 20 : 8,
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isDark ? theme.lightblue : theme.blue },
          ]}
          onPress={handleNext}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isDark ? theme.black : theme.white },
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    zIndex: 10,
    elevation: 10,
  },

  skipText: {
    fontSize: 16,
    fontWeight: "500",
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.55,
    overflow: "hidden",
  },
  backgroundImage: {
    width: "100%",
    height: 500,
  },
  gradientOverlay: {
    flex: 1,
  },
  imageContainer: {
    width: width * 0.85,
    height: height * 0.55,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  imageFrame: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  button: {
    width: "60%",
    height: 70,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
