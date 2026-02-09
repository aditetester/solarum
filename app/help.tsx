import { ScreenHeader } from "@/components/ScreenHeader";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const FAQ_ITEMS = [
  {
    id: "1",
    question: "How do I pay my bill?",
    answer:
      "You can pay your bill directly through the app in the 'Bill' section using a credit card or solar credits.",
  },
  {
    id: "2",
    question: "How do I change my plan?",
    answer:
      "To change your plan, please contact our support team via the 'Contact Us' page or call our hotline.",
  },
  {
    id: "3",
    question: "What happens if I move?",
    answer:
      "If you are moving, you can transfer your service to your new address. Please notify us at least 30 days in advance.",
  },
  {
    id: "4",
    question: "How do I track my solar usage?",
    answer:
      "You can track your real-time solar usage on the dashboard 'Home' screen or view detailed reports in the 'Report' tab.",
  },
];

export default function HelpScreen() {
  const router = useRouter();
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScreenHeader title="Help Center" showBackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Frequently Asked Questions
        </Text>

        {FAQ_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.faqItem,
              {
                backgroundColor: isDark ? theme.carddark : theme.cardlight,
                borderColor: isDark ? theme.borderdark : theme.borderlight,
              },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.question, { color: theme.text }]}>
                {item.question}
              </Text>
              <Text
                style={[styles.answer, { color: theme.systemgray }]}
                numberOfLines={2}
              >
                {item.answer}
              </Text>
            </View>
            {/* <View style={{ transform: [{ rotate: "-90deg" }] }}>
              <ArrowIcon size={16} color={theme.systemgray} />
            </View> */}
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.moreHelp}
          onPress={() => router.push("/contact")}
        >
          <Text style={[styles.moreHelpText, { color: theme.tint }]}>
            Need more help? Contact Support
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
  },
  faqItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  answer: {
    fontSize: 14,
  },
  moreHelp: {
    marginTop: 24,
    alignItems: "center",
  },
  moreHelpText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
