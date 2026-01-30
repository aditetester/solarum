import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

export default function BlogScreen() {
  const { title, desc, author, date, image } = useLocalSearchParams();
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={[styles.desc, { color: theme.text }]}>
        {desc} {"\n\n"}
        Solar energy is transforming how we power our homes and businesses by
        offering clean, renewable and affordable solutions for the future.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  backButton: {
    position: "absolute",
    left: 8,
    top: 26,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: { width: "100%", height: 220, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 8 },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  author: { fontSize: 12, fontWeight: "600", color: "#666" },
  date: { fontSize: 12, color: "#999" },
  desc: { fontSize: 14, lineHeight: 22 },
});
