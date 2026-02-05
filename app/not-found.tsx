import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  const { theme: themeName } = useTheme();
  const theme = Colors[themeName];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Ionicons
        name="alert-circle-outline"
        size={80}
        color={theme.lightblue}
        style={{ marginBottom: 16 }}
      />

      <Text style={[styles.title, { color: theme.text }]}>Page Not Found</Text>

      <Text style={[styles.desc, { color: theme.systemgray }]}>
        The page you’re looking for doesn’t exist.
      </Text>

      <Link href="/" style={[styles.link, { color: theme.lightblue }]}>
        Go back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
  },
});
