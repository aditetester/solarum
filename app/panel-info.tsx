import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

/* ================= CUSTOM SVG ICONS ================= */

const BatteryIcon = ({ color }: { color: string }) => (
  <View style={[styles.statIconContainer, { backgroundColor: "#1E4169" }]}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path d="M23 12L20.56 14.44L11.56 5.44L14 3L23 12Z" fill={color} />
      <Path d="M3 12L5.44 9.56L14.44 18.56L12 21L3 12Z" fill={color} />
    </Svg>
  </View>
);

const WifiIcon = ({ color }: { color: string }) => (
  <View style={[styles.statIconContainer, { backgroundColor: "#4BB2E1" }]}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21C11.45 21 11 20.55 11 20C11 19.45 11.45 19 12 19C12.55 19 13 19.45 13 20C13 20.55 12.55 21 12 21ZM12 17C9.24 17 6.74 18.12 4.93 19.93C4.54 20.32 3.91 20.32 3.52 19.93C3.13 19.54 3.13 18.91 3.52 18.52C5.7 16.34 8.7 15 12 15C15.3 15 18.3 16.34 20.48 18.52C20.87 18.91 20.87 19.54 20.48 19.93C20.09 20.32 19.46 20.32 19.07 19.93C17.26 18.12 14.76 17 12 17ZM12 12C7.58 12 3.58 13.79 0.69 16.69C0.3 17.08 0.3 17.71 0.69 18.1C1.08 18.49 1.71 18.49 2.1 18.1C4.64 15.56 8.14 14 12 14C15.86 14 19.36 15.56 21.9 18.1C22.29 18.49 22.92 18.49 23.31 18.1C23.7 17.71 23.7 17.08 23.31 16.69C20.42 13.79 16.42 12 12 12Z"
        fill="#FFF"
      />
    </Svg>
  </View>
);

const WindIcon = ({ color }: { color: string }) => (
  <View style={[styles.statIconContainer, { backgroundColor: "#4BB2E1" }]}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 16C5.34 16 4 14.66 4 13C4 11.34 5.34 10 7 10H17V12H7C7.55 12 8 12.45 8 13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V12"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M10 8C10 6.34 11.34 5 13 5C14.66 5 16 6.34 16 8V9H10"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <Path
        d="M20 16C20 17.66 18.66 19 17 19C15.34 19 14 17.66 14 16V15H20"
        stroke="#FFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

const TempIcon = ({ color }: { color: string }) => (
  <View style={[styles.statIconContainer, { backgroundColor: "#1E4169" }]}>
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        d="M15 13V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V13C7.34 14.15 6.5 16.03 6.5 18C6.5 21.04 8.96 23.5 12 23.5C15.04 23.5 17.5 21.04 17.5 18C17.5 16.03 16.66 14.15 15 13ZM12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z"
        fill={color}
      />
    </Svg>
  </View>
);

/* ================= SCREEN ================= */

const PANEL_INFO = {
  name: "SOLAR S-784",
  connected: "Connected to 40 devices",
  efficiency: "80%",
  power: "1.1 kw/h",
  stats: [
    { id: "1", label: "Battery Charge", value: "80%", icon: BatteryIcon },
    { id: "2", label: "Wi-Fi Speed", value: "55 mb/s", icon: WifiIcon },
    { id: "3", label: "Wind Speed", value: "140 m/s", icon: WindIcon },
    { id: "4", label: "Temperature", value: "20°C", icon: TempIcon },
  ],
};

export default function PanelInfoScreen() {
  const scheme = useColorScheme();
  const theme = Colors[scheme ?? "light"];
  const isDark = scheme === "dark";
  const router = useRouter();

  const handlePress = (label: string) => {
    console.log(`Pressed: ${label}`);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          {PANEL_INFO.name}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* PANEL STATUS BADGE */}
        <View style={styles.statusBadge}>
          <View
            style={[styles.statusDot, { backgroundColor: theme.lightblue }]}
          />
          <Text style={styles.connectedText}>{PANEL_INFO.connected}</Text>
        </View>

        {/* PANEL IMAGE */}
        <View style={styles.panelImageContainer}>
          <Image
            source={require("@/assets/images/panel/panel.png")}
            style={styles.panelImageLarge}
            resizeMode="contain"
          />
        </View>

        {/* ACTION BUTTONS */}
        <View style={styles.actionButtonsRow}>
          <View style={styles.leftActions}>
            <TouchableOpacity
              style={[
                styles.actionBtn,
                { backgroundColor: isDark ? "#222" : "#F5F5F5" },
              ]}
              onPress={() => handlePress("Expand")}
            >
              <Ionicons name="expand-outline" size={20} color={theme.text} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.actionBtn,
                { backgroundColor: isDark ? "#222" : "#F5F5F5" },
              ]}
              onPress={() => handlePress("Refresh")}
            >
              <Ionicons name="refresh-outline" size={20} color={theme.text} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.powerBtn, { backgroundColor: "#1E4169" }]}
            onPress={() => handlePress("Power")}
          >
            <Ionicons name="power" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* PERFORMANCE */}
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Performance Monitoring
          </Text>
          <TouchableOpacity>
            <Text style={styles.manageText}>Manage</Text>
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={require("@/assets/images/panel/header.png")}
          style={styles.performanceCard}
          imageStyle={{ borderRadius: 12, opacity: 0.1 }}
        >
          <View style={styles.perfTop}>
            <View>
              <Text style={styles.performanceValue}>⚡ {PANEL_INFO.power}</Text>
              <Text style={styles.performanceLabel}>Generating Averagely</Text>
            </View>
            <View style={styles.powerLimitBadge}>
              <Text style={styles.powerLimitText}>Set power limit</Text>
              <Ionicons name="chevron-down" size={10} color="#777" />
            </View>
          </View>

          <View style={styles.chartContainer}>
            <View style={styles.barsRow}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <View
                  key={i}
                  style={[
                    styles.bar,
                    { backgroundColor: i < 7 ? "#1E4169" : "#DDD" },
                  ]}
                />
              ))}
            </View>
            <View style={styles.efficiencyBlock}>
              <Text style={styles.efficiencyPercent}>
                {PANEL_INFO.efficiency}
              </Text>
              <Text style={styles.efficiencyLabel}>Efficiency</Text>
            </View>
          </View>
        </ImageBackground>

        {/* STATS */}
        <View style={styles.statsGrid}>
          {PANEL_INFO.stats.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handlePress(item.label)}
              style={[
                styles.statCard,
                {
                  backgroundColor: isDark ? "#1E1E1E" : "#FFF",
                  borderColor: isDark ? "#333" : "#EEE",
                  borderWidth: 1,
                },
              ]}
            >
              <item.icon color={theme.lightblue} />
              <View>
                <Text style={[styles.statValue, { color: theme.text }]}>
                  {item.value}
                </Text>
                <Text style={styles.statLabel}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* INVITE SECTION */}
        <TouchableOpacity style={styles.inviteCard}>
          <ImageBackground
            source={require("@/assets/images/panel/header.png")}
            style={styles.inviteBg}
            imageStyle={{ borderRadius: 14 }}
          >
            <View style={styles.inviteOverlay}>
              <View>
                <Text style={styles.inviteTitle}>Invite your friends</Text>
                <View style={styles.avatarsRow}>
                  <Image
                    source={require("@/assets/images/panel/people-1.png")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("@/assets/images/panel/people-2.png")}
                    style={styles.avatar}
                  />
                  <Image
                    source={require("@/assets/images/panel/people-3.png")}
                    style={styles.avatar}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.inviteBtn}>
                <Text style={styles.inviteBtnText}>Invite Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  content: {
    padding: 16,
    paddingBottom: 40,
  },
  statusBadge: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(75, 178, 225, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 20,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  connectedText: {
    fontSize: 11,
    color: "#666",
    fontWeight: "600",
  },

  panelImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  panelImageLarge: {
    width: "100%",
    height: 200,
  },

  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  leftActions: {
    flexDirection: "row",
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  powerBtn: {
    width: 36,
    height: 36,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  manageText: {
    color: "#AAA",
    fontSize: 12,
  },

  performanceCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#F9F9F9",
    overflow: "hidden",
  },
  perfTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  performanceValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  performanceLabel: {
    fontSize: 11,
    color: "#888",
    marginTop: 2,
  },
  powerLimitBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  powerLimitText: {
    fontSize: 10,
    color: "#777",
    marginRight: 4,
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  barsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    height: 30,
    paddingRight: 40,
  },
  bar: {
    flex: 1,
    height: "100%",
    marginRight: 4,
    borderRadius: 2,
  },
  efficiencyBlock: {
    alignItems: "flex-end",
  },
  efficiencyPercent: {
    fontSize: 16,
    fontWeight: "700",
  },
  efficiencyLabel: {
    fontSize: 10,
    color: "#888",
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statCard: {
    width: "48%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  statValue: {
    fontSize: 15,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 11,
    color: "#888",
  },

  inviteCard: {
    borderRadius: 16,
    overflow: "hidden",
  },
  inviteBg: {
    width: "100%",
  },
  inviteOverlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  inviteTitle: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  avatarsRow: {
    flexDirection: "row",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#FFF",
    marginRight: -8,
  },
  inviteBtn: {
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
  },
  inviteBtnText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "700",
  },
});
