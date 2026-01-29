import { EnergyIcon } from "@/components/icons";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
import { SafeAreaView } from "react-native-safe-area-context";

const PANEL_SUMMARY = {
  title: "All 32 panel are online",
  desc: "It's a cloudy day, But all panels are online and in good condition.",
};

const PANELS_DATA = [
  {
    id: "1",
    name: "SOLAR S-784",
    efficiency: "80%",
    status: "Active",
    power: "1.3 kw/h",
    statusKey: "active",
  },
  {
    id: "2",
    name: "SOLAR S-780",
    efficiency: "0%",
    status: "Offline",
    power: "-- kw/h",
    statusKey: "offline",
  },
  {
    id: "3",
    name: "SOLAR S-789",
    efficiency: "85%",
    status: "Active",
    power: "1.2 kw/h",
    statusKey: "active",
  },
  {
    id: "4",
    name: "SOLAR S-791",
    efficiency: "0%",
    status: "Cleaning Mode",
    power: "-- kw/h",
    statusKey: "cleaning",
  },
];

/* ================= SCREEN ================= */

export default function PanelScreen() {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const isDark = scheme === "dark";
  const router = useRouter();

  const getStatusColor = (key: string) => {
    switch (key) {
      case "active":
        return theme.green;
      case "offline":
        return theme.red;
      case "cleaning":
        return theme.orange;
      default:
        return theme.systemgray;
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView contentContainerStyle={styles.content}>
        {/* ===== HEADER ===== */}
        <View style={styles.appHeader}>
          {/* <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity> */}
          <Text style={[styles.appHeaderTitle, { color: theme.text }]}>
            Panel
          </Text>
          <View style={{ width: 24 }} />
        </View>
        {/* ===== SUMMARY CARD ===== */}
        <View
          style={[
            styles.summaryCard,
            { backgroundColor: isDark ? theme.lightblue : theme.blue },
          ]}
        >
          <View style={styles.summaryContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.summaryTitle}>{PANEL_SUMMARY.title}</Text>
              <Text style={styles.summaryDesc}>{PANEL_SUMMARY.desc}</Text>
            </View>
            <Image
              source={require("@/assets/images/panel/header.png")}
              style={styles.summaryImage}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* ===== LIST HEADER ===== */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Panels
          </Text>
          <Text style={{ color: theme.systemgray, fontSize: 13 }}>
            Total 32
          </Text>
        </View>
        {/* ===== PANEL LIST ===== */}
        {PANELS_DATA.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push("/panel-info")}
            style={[
              styles.panelRow,
              { backgroundColor: isDark ? theme.carddark : theme.cardlight },
            ]}
          >
            <View
              style={[
                styles.panelImageContainer,
                {
                  backgroundColor: isDark ? theme.black : theme.white,
                  borderColor: theme.systemgray,
                },
              ]}
            >
              <Image
                source={require("@/assets/images/panel/panel.png")}
                style={styles.panelIcon}
                resizeMode="contain"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={[styles.panelName, { color: theme.text }]}>
                {item.name}
              </Text>
              <Text style={styles.panelEfficiency}>
                Efficiency {item.efficiency}
              </Text>
            </View>

            <View style={styles.rightBlock}>
              <Text
                style={[
                  styles.status,
                  { color: getStatusColor(item.statusKey) },
                ]}
              >
                {item.status}
              </Text>
              <View style={styles.leftBlock}>
                <EnergyIcon size={16} color={theme.gold} fill={theme.gold} />
                <Text
                  style={[styles.leftBlockText, { color: theme.systemgray }]}
                >
                  {item.power}
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.chevronContainer,
                {
                  backgroundColor: isDark ? theme.black : theme.white,
                  borderColor: theme.systemgray,
                },
              ]}
            >
              <Ionicons
                name="chevron-forward"
                size={16}
                color={theme.systemgray}
              />
            </View>
          </TouchableOpacity>
        ))}
        ===== FEATURED SECTION =====
        <View style={[styles.sectionHeader, { marginTop: 20 }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Panels you may like
          </Text>
        </View>
        <View style={styles.recommendCardContainer}>
          <View style={[styles.recommendCard, { backgroundColor: theme.blue }]}>
            <View style={{ flex: 1 }}>
              {/* TITLE + ARROW */}
              <View style={styles.recommendTitleRow}>
                <Text style={styles.recommendTitle}>MicroSolar Mini-Panel</Text>

                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color={theme.white}
                />
              </View>

              {/* POWER */}
              <Text style={styles.recommendPower}>150W</Text>

              {/* FEATURES */}
              <Text style={styles.feature}>✓ Small Size Panel</Text>
              <Text style={styles.feature}>✓ Ideal for tiny house</Text>

              {/* PRICE */}
              <Text style={styles.price}>₹ 1000 / Panel</Text>

              {/* BUTTON */}
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View Details ↗</Text>
              </TouchableOpacity>
            </View>

            {/* Right Image Placeholder */}
            <View style={styles.houseImageContainer}>
              <Image
                style={styles.houseImage}
                source={require("@/assets/images/panel/home.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 100 },

  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    justifyContent: "center",
    marginBottom: 20,
  },
  appHeaderTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  summaryCard: {
    height: 120,
    marginBottom: 24,
    overflow: "hidden",
    borderRadius: 14,
  },
  summaryContent: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)", // Subtle overlay
  },
  summaryTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  summaryDesc: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
    opacity: 0.9,
    width: "80%",
  },
  summaryImage: {
    width: 100,
    height: 80,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
  },
  panelRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  panelImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    position: "relative",
  },
  panelIcon: {
    width: 40,
    height: 40,
  },
  panelName: {
    fontSize: 14,
    fontWeight: "700",
  },
  panelEfficiency: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  rightBlock: {
    alignItems: "flex-end",
    marginRight: 12,
  },
  leftBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  leftBlockText: {
    fontSize: 12,
    marginTop: 2,
  },
  status: {
    fontSize: 12,
    fontWeight: "700",
  },
  chevronContainer: {
    width: 24,
    height: 24,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  recommendCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  recommendCard: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 14,
    marginTop: 12,
  },
  recommendTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recommendTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  recommendPower: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 8,
  },
  feature: {
    color: "#EAF6FF",
    fontSize: 12,
    marginBottom: 2,
  },
  price: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 6,
  },
  viewButton: {
    marginTop: 10,
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  houseImageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  houseImage: {
    width: 130,
    height: 130,
  },
});
