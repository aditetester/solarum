import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const services: { label: string; icon: IoniconName }[] = [
  { label: "Site Survey", icon: "document-text-outline" },
  { label: "Installation", icon: "construct-outline" },
  { label: "Cleaning", icon: "basket-outline" },
  { label: "O & M", icon: "settings-outline" },
  { label: "Products", icon: "cube-outline" },
  { label: "Refer & Earn", icon: "gift-outline" },
  { label: "Help Centre", icon: "help-circle-outline" },
  { label: "Chats", icon: "chatbubble-ellipses-outline" },
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

const BLOGS = [
  {
    id: "1",
    title: "Solar for a Better Tomorrow",
    desc: "Solar panels convert sunlight into electricity helping reduce power bills.",
    image: require("@/assets/images/service/blog-1.png"),
    author: "Julius Cooper",
    authorImage: require("@/assets/images/panel/people-1.png"),
    authorPosition: "CEO, Solarum",
    date: "25 Dec, 2025",
    time: "1 hr ago",
  },
  {
    id: "2",
    title: "Go Green with Solar Energy",
    desc: "Solar power provides renewable and sustainable energy for homes.",
    image: require("@/assets/images/service/blog-2.png"),
    author: "lusi jofer",
    authorImage: require("@/assets/images/panel/people-2.png"),
    authorPosition: "Manager, Solarum",
    date: "24 Dec, 2025",
    time: "3 hr ago",
  },
  {
    id: "3",
    title: "Save More with Solar",
    desc: "Switch to solar and enjoy long-term savings with clean energy.",
    image: require("@/assets/images/service/blog-3.png"),
    author: "john doe",
    authorImage: require("@/assets/images/panel/people-3.png"),
    authorPosition: "Engineer, Solarum",
    date: "23 Dec, 2025",
    time: "1 day ago",
  },
];

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = SCREEN_WIDTH - 32;

export default function ServiceScreen() {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const isDark = scheme === "dark";
  const router = useRouter();

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

  const openBlog = (blog: any) => {
    router.push({
      pathname: "/blog",
      params: {
        title: blog.title,
        desc: blog.desc,
        author: blog.author,
        authorImage: blog.authorImage,
        authorPosition: blog.authorPosition,
        date: blog.date,
        image: blog.id,
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* FIXED HEADER (NOT SCROLLING) */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Services
        </Text>
      </View>

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
            <TouchableOpacity
              style={[
                styles.heroButton,
                {
                  borderColor: theme.white,
                  backgroundColor: theme.opacitywhite,
                },
              ]}
            >
              <Text style={[styles.heroButtonText, { color: theme.white }]}>
                Request Service
              </Text>
            </TouchableOpacity>

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
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Our Services
        </Text>

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
              <Ionicons
                name={item.icon}
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
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Blogs</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {BLOGS.map((blog) => (
            <TouchableOpacity
              key={blog.id}
              onPress={() => openBlog(blog)}
              style={[
                styles.blogCard,
                { backgroundColor: isDark ? theme.carddark : theme.cardlight },
              ]}
            >
              <Image source={blog.image} style={styles.blogImage} />
              <Text style={[styles.blogTitle, { color: theme.text }]}>
                {blog.title}
              </Text>
              <Text style={[styles.blogDesc, { color: theme.systemgray }]}>
                {blog.desc}
              </Text>
              <View style={styles.blogFooter}>
                <Text style={[styles.blogTime, { color: theme.systemgray }]}>
                  {blog.time}
                </Text>
                <Text
                  style={[
                    styles.readMore,
                    { color: theme.blue, borderBottomColor: theme.blue },
                  ]}
                >
                  Read more...
                </Text>
              </View>
            </TouchableOpacity>
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

  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
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

  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 12,
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
