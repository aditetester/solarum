import { AppButton } from "@/components/AppButton";
import { RupeeIcon } from "@/components/icons";
import { ScreenHeader } from "@/components/ScreenHeader";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Alert, FlatList, Linking, StyleSheet, Text, View } from "react-native";

type Bill = {
  id: string;
  month: string;
  amount: string;
  status: "Paid" | "Unpaid" | "Pending";
  date: string;
};

const BILL_HISTORY: Bill[] = [
  {
    id: "1",
    month: "October 2025",
    amount: "120.50",
    status: "Unpaid",
    date: "Due Oct 25, 2025",
  },
  {
    id: "2",
    month: "September 2025",
    amount: "115.00",
    status: "Paid",
    date: "Paid Sep 24, 2025",
  },
  {
    id: "3",
    month: "August 2025",
    amount: "130.20",
    status: "Paid",
    date: "Paid Aug 23, 2025",
  },
  {
    id: "4",
    month: "October 2025",
    amount: "150.50",
    status: "Unpaid",
    date: "Due Oct 25, 2025",
  },
  {
    id: "5",
    month: "July 2025",
    amount: "110.00",
    status: "Paid",
    date: "Paid Jul 22, 2025",
  },
];

export default function BillScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  const handlePayNow = (amount: string) => {
    const upiUrl = `upi://pay?pa=merchant@upi&pn=Solarum&am=${amount}&cu=INR`;

    Linking.canOpenURL(upiUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(upiUrl);
        } else {
          Alert.alert(
            "UPI Not Supported",
            "No UPI app found on your device. Please install one to proceed.",
          );
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  const renderItem = ({ item }: { item: Bill }) => (
    <View
      style={[
        styles.billCard,
        {
          backgroundColor: isDark ? theme.carddark : theme.cardlight,
          borderColor: isDark ? theme.borderdark : theme.borderlight,
        },
      ]}
    >
      <View style={styles.billHeader}>
        <Text style={[styles.month, { color: theme.text }]}>{item.month}</Text>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                item.status === "Paid"
                  ? theme.green + "20"
                  : item.status === "Unpaid"
                    ? theme.brightred + "20"
                    : theme.red + "20",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color:
                  item.status === "Paid"
                    ? theme.green
                    : item.status === "Unpaid"
                      ? theme.brightred
                      : theme.red,
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>

      <View style={styles.billDetails}>
        <View>
          <Text style={[styles.label, { color: theme.systemgray }]}>
            Amount
          </Text>
          <Text style={[styles.amount, { color: theme.text }]}>
            <RupeeIcon color={theme.text} size={14} />
            {item.amount}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.label, { color: theme.systemgray }]}>Date</Text>
          <Text style={[styles.date, { color: theme.text }]}>{item.date}</Text>
        </View>
      </View>

      {item.status === "Unpaid" && (
        <AppButton
          title="Pay Now"
          onPress={() => handlePayNow(item.amount)}
          style={{ marginTop: 10 }}
          textStyle={{ fontSize: 16 }}
        />
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScreenHeader title="My Bills" showBackButton />
      <FlatList
        data={BILL_HISTORY}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  billCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  billHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  month: {
    fontSize: 16,
    fontWeight: "700",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  billDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: "700",
  },
  date: {
    fontSize: 14,
    fontWeight: "500",
  },
});
