import { EnergyIcon } from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

export default function PanelScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();

  const handlePanelInfo = (item: any) => {
    router.push({
      pathname: "/panel-info",
      params: {
        id: item.id,
        name: item.name,
        efficiency: item.efficiency,
        power: item.power,
        status: item.status,
      },
    });
  };

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
    <ScrollView contentContainerStyle={styles.content}>
      {/* ===== HEADER ===== */}
      <View style={styles.appHeader}>
        {/* <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity> */}
        <Text style={[styles.appHeaderTitle, { color: theme.text }]}>
          Panel
        </Text>
        {/* <View style={{ width: 24 }} /> */}
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
            <Text style={[styles.summaryTitle, { color: theme.white }]}>
              {PANEL_SUMMARY.title}
            </Text>
            <Text style={[styles.summaryDesc, { color: theme.white }]}>
              {PANEL_SUMMARY.desc}
            </Text>
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
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Panels</Text>
        <Text style={{ color: theme.systemgray, fontSize: 13 }}>Total 32</Text>
      </View>
      {/* ===== PANEL LIST ===== */}
      {PANELS_DATA.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handlePanelInfo(item)}
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
            <Text style={[styles.panelEfficiency, { color: theme.systemgray }]}>
              Efficiency {item.efficiency}
            </Text>
          </View>

          <View style={styles.rightBlock}>
            <Text
              style={[styles.status, { color: getStatusColor(item.statusKey) }]}
            >
              {item.status}
            </Text>
            <View style={styles.leftBlock}>
              <EnergyIcon size={16} color={theme.gold} fill={theme.gold} />
              <Text style={[styles.leftBlockText, { color: theme.systemgray }]}>
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

      {/* ===== FEATURED SECTION ===== */}
      <View style={[styles.sectionHeader, { marginTop: 24 }]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Panels you may like
        </Text>
      </View>

      <View style={styles.recommendCardContainer}>
        <View
          style={[
            styles.recommendCard,
            { backgroundColor: isDark ? theme.lightblue : theme.blue },
          ]}
        >
          {/* ===== LEFT CONTENT ===== */}
          <View style={styles.recommendLeft}>
            {/* TITLE + POWER (ONE LINE) */}
            <View style={styles.titleRow}>
              <Text style={[styles.recommendTitle, { color: theme.white }]}>
                MicroSolar Mini-Panel
              </Text>
              <Text style={[styles.recommendPower, { color: theme.white }]}>
                150W
              </Text>
            </View>

            {/* FEATURES */}
            <View style={styles.featureItem}>
              <Ionicons name="checkmark" size={12} color={theme.white} />
              <Text style={[styles.featureText, { color: theme.white }]}>
                Small Size Panel
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark" size={12} color={theme.white} />
              <Text style={[styles.featureText, { color: theme.white }]}>
                Ideal for tinny house
              </Text>
            </View>

            {/* PRICE */}
            <Text style={[styles.price, { color: theme.white }]}>
              ₹ 1000 / Panel
            </Text>

            {/* BUTTON */}
            <TouchableOpacity
              style={[
                styles.viewButton,
                {
                  borderColor: theme.white,
                  backgroundColor: theme.opacitywhite,
                },
              ]}
            >
              <Text style={[styles.viewButtonText, { color: theme.white }]}>
                View Details
              </Text>
              <Ionicons
                name="share-outline"
                size={14}
                color={theme.white}
                style={{ marginLeft: 6, transform: [{ rotate: "45deg" }] }}
              />
            </TouchableOpacity>
          </View>

          {/* ===== RIGHT IMAGE ===== */}
          <View style={styles.recommendRight}>
            {/* ARROW ON IMAGE */}
            <View style={styles.imageArrow}>
              <Ionicons name="chevron-forward" size={20} color={theme.white} />
            </View>

            <Image
              source={require("@/assets/images/panel/home.png")}
              style={styles.houseImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  appHeaderTitle: {
    marginTop: 24,
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
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },
  summaryDesc: {
    fontSize: 12,
    lineHeight: 16,
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
  },
  recommendTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  featureText: {
    fontSize: 12,
    marginLeft: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 12,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignSelf: "flex-start",
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  recommendCard: {
    flexDirection: "row",
    borderRadius: 14,
    padding: 16,
    overflow: "hidden",
  },
  recommendLeft: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleRow: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  recommendTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  recommendPower: {
    fontSize: 15,
    fontWeight: "700",
  },
  recommendRight: {
    width: 150,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "relative",
  },
  imageArrow: {
    position: "absolute",
    top: 4,
    right: 4,
    zIndex: 10,
  },
  houseImage: {
    width: 140,
    height: 140,
  },
});
