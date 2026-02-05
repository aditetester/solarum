import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function BlogScreen() {
  const { title, desc, author, date, image, authorImage, authorPosition } =
    useLocalSearchParams();
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();

  const getImage = () => {
    switch (image) {
      case "1":
        return require("@/assets/images/service/blog-1.png");
      case "2":
        return require("@/assets/images/service/blog-2.png");
      case "3":
        return require("@/assets/images/service/blog-3.png");
    }
  };

  const FooterItem = ({ icon, label }: any) => (
    <TouchableOpacity style={styles.footerItem}>
      <Ionicons name={icon} size={18} color={theme.text} />
      <Text style={[styles.footerText, { color: theme.systemgray }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>Blogs</Text>
      </View>

      {/* IMAGE */}
      <Image source={getImage()} style={styles.image} />

      {/* CONTENT */}
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

      <View style={styles.meta}>
        <View style={styles.authorRow}>
          <Image
            source={authorImage as any}
            style={[
              styles.authorImage,
              { borderColor: isDark ? theme.lightblue : theme.blue },
            ]}
          />
          <Text style={[styles.author, { color: theme.text }]}>{author}</Text>
          <Text style={[styles.authorPosition, { color: theme.systemgray }]}>
            ({authorPosition})
          </Text>
        </View>
        <Text style={[styles.date, { color: theme.systemgray }]}>{date}</Text>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Text style={[styles.desc, { color: theme.text }]}>
          {desc}
          {"\n\n"}
          Solar energy is the radiant energy from the Suns light and heat, which
          can be harnessed using a range of technologies such as solar
          electricity, solar thermal energy (including solar water heating) and
          solar architecture. It is an essential source of renewable energy, and
          its technologies are broadly characterized as either passive solar or
          active solar depending on how they capture and distribute solar energy
          or convert it into solar power. {"\n\n"}Active solar techniques
          include the use of photovoltaic systems, concentrated solar power, and
          solar water heating to harness the energy. Passive solar techniques
          include designing a building for better daylighting, selecting
          materials with favorable thermal mass or light-dispersing properties,
          and organizing spaces that naturally circulate air. In 2011, the
          International Energy Agency said that the development of affordable,
          inexhaustible and clean solar energy technologies will have huge
          longer-term benefits. {"\n\n"}It will increase countries energy
          security through reliance on an indigenous, inexhaustible, and mostly
          import-independent resource, enhance sustainability, reduce pollution,
          lower the costs of mitigating global warming .... these advantages are
          global
        </Text>
      </ScrollView>
      {/* FOOTER ACTIONS */}
      <View style={[styles.footer, { backgroundColor: theme.background }]}>
        <FooterItem icon="thumbs-up-outline" label="500+ Liked" />
        <View style={[styles.divider, { backgroundColor: theme.systemgray }]} />
        <FooterItem icon="chatbubble-outline" label="25 comments" />
        <View style={[styles.divider, { backgroundColor: theme.systemgray }]} />
        <FooterItem icon="bookmark-outline" label="Add to reading list" />
        <View style={[styles.divider, { backgroundColor: theme.systemgray }]} />
        <FooterItem icon="share-social-outline" label="Share" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 28,
    marginBottom: 12,
  },

  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  authorImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
  },
  author: {
    fontSize: 13,
    fontWeight: "600",
  },
  authorPosition: {
    fontSize: 12,
  },
  date: {
    fontSize: 12,
  },

  desc: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 30,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    paddingBottom: 40,
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
  },
  divider: {
    width: 1,
    height: 28,
    opacity: 0.6,
  },
});
