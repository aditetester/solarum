import { Blog } from "@/constants/blogs";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BlogCardProps = {
  blog: Blog;
  layout?: "compact" | "full";
};

export const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  layout = "compact",
}) => {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();

  const openBlog = () => {
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

  const FooterAction = ({ icon, label }: { icon: any; label: string }) => (
    <TouchableOpacity style={styles.footerAction}>
      <Ionicons name={icon} size={18} color={theme.text} />
      <Text style={[styles.footerActionText, { color: theme.systemgray }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  if (layout === "full") {
    return (
      <View
        style={[
          styles.fullContainer,
          {
            backgroundColor: isDark ? theme.carddark : theme.cardlight,
            borderColor: isDark ? theme.borderdark : theme.borderlight,
          },
        ]}
      >
        <TouchableOpacity onPress={openBlog}>
          <Image source={blog.image} style={styles.fullImage} />
          <View style={styles.fullContent}>
            <Text style={[styles.fullTitle, { color: theme.text }]}>
              {blog.title}
            </Text>
            <Text style={[styles.fullDesc, { color: theme.systemgray }]}>
              {blog.desc}
            </Text>
            <View style={styles.fullMeta}>
              <View style={styles.authorRow}>
                <Image source={blog.authorImage} style={styles.authorImage} />
                <View>
                  <Text style={[styles.authorName, { color: theme.text }]}>
                    {blog.author}
                  </Text>
                  <Text style={[styles.authorPos, { color: theme.systemgray }]}>
                    {blog.authorPosition}
                  </Text>
                </View>
              </View>
              <Text style={[styles.date, { color: theme.systemgray }]}>
                {blog.date}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* ACTIONS */}
        <View
          style={[
            styles.actions,
            { borderTopColor: isDark ? theme.borderdark : theme.borderlight },
          ]}
        >
          <FooterAction icon="thumbs-up-outline" label="Liked" />
          <FooterAction icon="chatbubble-outline" label="Comments" />
          <FooterAction icon="share-social-outline" label="Share" />
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={openBlog}
      style={[
        styles.compactContainer,
        { backgroundColor: isDark ? theme.carddark : theme.cardlight },
      ]}
    >
      <Image source={blog.image} style={styles.compactImage} />
      <Text style={[styles.compactTitle, { color: theme.text }]}>
        {blog.title}
      </Text>
      <Text style={[styles.compactDesc, { color: theme.systemgray }]}>
        {blog.desc}
      </Text>
      <View style={styles.compactFooter}>
        <Text style={[styles.compactTime, { color: theme.systemgray }]}>
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
  );
};

const styles = StyleSheet.create({
  /* COMPACT LAYOUT */
  compactContainer: {
    width: 220,
    marginRight: 12,
    borderRadius: 6,
    overflow: "hidden",
  },
  compactImage: {
    width: "100%",
    height: 120,
    borderRadius: 6,
  },
  compactTitle: {
    fontSize: 14,
    fontWeight: "700",
    margin: 6,
  },
  compactDesc: {
    fontSize: 12,
    margin: 6,
    textAlign: "justify",
  },
  compactFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 6,
  },
  compactTime: {
    fontSize: 12,
  },
  readMore: {
    fontSize: 12,
    margin: 4,
    borderBottomWidth: 2,
  },

  /* FULL LAYOUT */
  fullContainer: {
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    overflow: "hidden",
  },
  fullImage: {
    width: "100%",
    height: 180,
  },
  fullContent: {
    padding: 12,
  },
  fullTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  fullDesc: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  fullMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  authorImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  authorName: {
    fontSize: 14,
    fontWeight: "600",
  },
  authorPos: {
    fontSize: 12,
  },
  date: {
    fontSize: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  footerAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  footerActionText: {
    fontSize: 12,
  },
});
