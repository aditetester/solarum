import { BlogCard } from "@/components/BlogCard";
import { SearchIcon } from "@/components/icons";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BLOGS } from "@/constants/blogs";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function BlogsScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredBlogs = BLOGS.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* HEADER */}
      <ScreenHeader
        title="All Blogs"
        showBackButton
        onBackPress={() => router.replace("/(tabs)/profile")}
      />

      {/* SEARCH */}
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: isDark ? theme.carddark : theme.cardlight },
        ]}
      >
        <SearchIcon color={theme.systemgray} size={20} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
