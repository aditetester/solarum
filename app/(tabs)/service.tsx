import { AppButton } from "@/components/AppButton";
import { BlogCard } from "@/components/BlogCard";
import {
  ChatIcon,
  CleaningIcon,
  HelpCenterIcon,
  InstallationIcon,
  OMIcon,
  ProductsIcon,
  ReferEarnIcon,
  SiteSurveyIcon,
} from "@/components/icons";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { BLOGS } from "@/constants/blogs";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const services = [
  { label: "Site Survey", icon: SiteSurveyIcon },
  { label: "Installation", icon: InstallationIcon },
  { label: "Cleaning", icon: CleaningIcon },
  { label: "O & M", icon: OMIcon },
  { label: "Products", icon: ProductsIcon },
  { label: "Refer & Earn", icon: ReferEarnIcon },
  { label: "Help Centre", icon: HelpCenterIcon },
  { label: "Chats", icon: ChatIcon },
];

const HERO_SLIDES = [
  {
    id: "1",
    image: require("@/assets/images/service/header.png"),
    title: "Reliable maintenance that helps your system perform at its best.",
  },
  {
    id: "2",
    image: require("@/assets/images/service/blog-2.png"),
    title:
      "Professional solar services to keep your system running efficiently.",
  },
  {
    id: "3",
    image: require("@/assets/images/service/blog-3.png"),
    title: "Quick support and trusted solar maintenance solutions.",
  },
];

// Shared BLOGS data is now imported from @/constants/blogs

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH - 32;

export default function ServiceScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        activeIndex === HERO_SLIDES.length - 1 ? 0 : activeIndex + 1;

      scrollRef.current?.scrollTo({
        x: nextIndex * CARD_WIDTH,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Navigation logic is now handled inside BlogCard component

  return (
    <View style={styles.container}>
      {/* FIXED HEADER (NOT SCROLLING) */}
      <ScreenHeader title="Services" />

      {/* SCROLLABLE CONTENT */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.headerDesc, { color: theme.text }]}>
          Quick, reliable solar support.
        </Text>

        {/* HERO CARD */}
        <View style={styles.heroWrapper}>
          {/* IMAGE SCROLLER */}
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(e) => {
              const index = Math.round(
                e.nativeEvent.contentOffset.x / CARD_WIDTH,
              );
              setActiveIndex(index);
            }}
            scrollEventThrottle={16}
          >
            {HERO_SLIDES.map((item) => (
              <Image
                key={item.id}
                source={item.image}
                style={styles.heroImage}
              />
            ))}
          </ScrollView>

          {/* FIXED OVERLAY (does NOT scroll) */}
          <View style={styles.heroFixedOverlay}>
            {/* TEXT */}
            <Text style={[styles.heroText, { color: theme.white }]}>
              {HERO_SLIDES[activeIndex].title}
            </Text>

            {/* BUTTON */}
            <AppButton
              title="Request Service"
              variant="outline"
              style={[
                styles.heroButton,
                {
                  backgroundColor: theme.opacitywhite,
                  borderColor: theme.white,
                },
              ]}
              textStyle={[styles.heroButtonText, { color: theme.white }]}
            />

            {/* DOTS */}
            <View style={styles.dotsOverlay}>
              {HERO_SLIDES.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    activeIndex === index && styles.activeDot,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        {/* OUR SERVICES */}
        <SectionTitle title="Our Services" />

        <View style={[styles.grid, { borderColor: theme.white }]}>
          {services.map((item, index) => (
            <View
              key={index}
              style={[
                styles.gridItem,
                {
                  borderRightWidth: (index + 1) % 4 === 0 ? 0 : 1,
                  borderBottomWidth: index < 4 ? 1 : 0,
                  borderColor: isDark ? theme.borderdark : theme.borderlight,
                },
              ]}
            >
              <item.icon
                size={22}
                color={theme.text}
                style={{ marginBottom: 6 }}
              />
              <Text style={[styles.gridText, { color: theme.text }]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        {/* BLOGS */}
        <SectionTitle title="Blogs" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} blog={blog} layout="compact" />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },

  headerDesc: {
    fontSize: 18,
    marginBottom: 14,
  },
  heroWrapper: {
    marginBottom: 24,
    borderRadius: 12,
    overflow: "hidden",
  },

  heroImage: {
    width: CARD_WIDTH,
    height: 180,
  },
  heroFixedOverlay: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
  },

  heroText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    maxWidth: "90%",
  },

  heroButton: {
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  heroButtonText: {
    fontWeight: "600",
  },

  /* DOTS ON IMAGE */
  dotsOverlay: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 4,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 14,
    backgroundColor: "#fff",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  gridItem: {
    width: "25%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  gridText: {
    fontSize: 12,
    textAlign: "center",
  },
  blogCard: {
    width: 220,
    marginRight: 12,
    borderRadius: 6,
    overflow: "hidden",
  },
  blogImage: {
    width: "100%",
    height: 120,
    borderRadius: 6,
  },
  blogTitle: {
    fontSize: 14,
    fontWeight: "700",
    margin: 6,
  },
  blogDesc: {
    fontSize: 12,
    margin: 6,
    textAlign: "justify",
  },
  blogFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6,
  },
  blogTime: {
    fontSize: 12,
  },
  readMore: {
    fontSize: 12,
    margin: 4,
    borderBottomWidth: 2,
  },
});
