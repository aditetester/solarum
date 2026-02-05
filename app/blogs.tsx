import { BlogCard } from "@/components/BlogCard";
import { BLOGS } from "@/constants/blogs";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BlogsScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredBlogs = BLOGS.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          All Blogs
        </Text>
      </View>

      {/* SEARCH */}
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: isDark ? theme.carddark : theme.cardlight },
        ]}
      >
        <Ionicons name="search-outline" size={20} color={theme.systemgray} />
        <TextInput
          style={[styles.searchInput, { color: theme.text }]}
          placeholder="Search blogs..."
          placeholderTextColor={theme.systemgray}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* BLOG LIST */}
      <FlatList
        data={filteredBlogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BlogCard blog={item} layout="full" />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: theme.systemgray }]}>
              No blogs found matching your search.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  listContent: {
    padding: 16,
    paddingTop: 0,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 14,
  },
});
