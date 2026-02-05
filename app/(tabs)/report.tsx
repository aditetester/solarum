import { EnergyIcon, GridIcon, HomeIcon, SolarIcon } from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Circle, Defs, Marker, Path } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function ReportScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const [activeTab, setActiveTab] = useState("Daily");

  const renderTab = (label: string) => (
    <TouchableOpacity
      key={label}
      onPress={() => setActiveTab(label)}
      style={[
        styles.tabButton,
        activeTab === label &&
          (isDark ? styles.tabButtonActiveDark : styles.tabButtonActiveLight),
      ]}
    >
      <Text
        style={[
          styles.tabText,
          {
            color: theme.text,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={isDark ? ["#1E4169", "#000000"] : ["#99D6F2", "#F0F9FF"]}
      style={styles.container}
    >
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity> */}
        <Text style={[styles.headerTitle, { color: theme.text }]}>Report</Text>
        {/* <View style={{ width: 44 }} /> */}
      </View>

      <View style={styles.content}>
        <View
          style={[
            styles.tabContainer,
            isDark ? styles.tabContainerDark : styles.tabContainerLight,
          ]}
        >
          {["Daily", "Weekly", "Monthly"].map(renderTab)}
        </View>

        <View style={styles.liveReportHeader}>
          <View>
            <Text style={[styles.liveReportTitle, { color: theme.text }]}>
              Live Report
            </Text>
            <View style={styles.statusBadge}>
              <View
                style={[styles.statusDot, { backgroundColor: theme.green }]}
              />
              <Text style={[styles.statusText, { color: theme.green }]}>
                On Grid
              </Text>
            </View>
          </View>
          <Text style={[styles.timeText, { color: theme.text }]}>12:00 PM</Text>
        </View>

        <View
          style={[
            styles.infoCard,
            isDark ? styles.infoCardDark : styles.infoCardLight,
          ]}
        >
          <View style={styles.infoSection}>
            <EnergyIcon size={32} color={theme.green} />
            <View style={styles.infoDetails}>
              <Text style={[styles.infoLabel, { color: theme.gray }]}>
                Charge
              </Text>
              <Text style={[styles.infoValue, { color: theme.text }]}>77%</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoSection}>
            <View style={styles.infoDetails}>
              <Text style={[styles.infoLabel, { color: theme.gray }]}>
                Profile{" "}
                <Ionicons
                  name="settings-outline"
                  size={14}
                  color={theme.text}
                  style={{ marginLeft: 4 }}
                />
              </Text>
              <Text style={[styles.infoValue, { color: theme.text }]}>
                Self - Consumption
              </Text>
            </View>
          </View>
          {/* <View style={styles.infoSection}>
            <View style={styles.profileIconLabel}>
              <Text style={[styles.infoLabel, { color: theme.gray }]}>
                Profile
              </Text>
              <Ionicons
                name="settings-outline"
                size={14}
                color={theme.gray}
                style={{ marginLeft: 4 }}
              />
            </View>
            <Text style={[styles.infoValue, { color: theme.text }]}>
              Self - Consumption
            </Text>
          </View> */}
        </View>

        <View style={styles.powerFlowContainer}>
          {/* SVG Power Flow Lines */}
          <View style={styles.svgOverlay}>
            <Svg
              height="400"
              width={width - 40}
              viewBox={`0 0 ${width - 40} 400`}
            >
              <Defs>
                {/* Arrow Marker Definitions */}
                <Marker
                  id="arrowGreen"
                  viewBox="0 0 10 10"
                  refX="10"
                  refY="5"
                  markerWidth="10"
                  markerHeight="10"
                  orient="auto"
                >
                  <Path d="M 0 0 L 10 5 L 0 10 z" fill={theme.green} />
                </Marker>
                <Marker
                  id="arrowBlue"
                  viewBox="0 0 10 10"
                  refX="10"
                  refY="5"
                  markerWidth="10"
                  markerHeight="10"
                  orient="auto"
                >
                  <Path d="M 0 0 L 10 5 L 0 10 z" fill={theme.lightblue} />
                </Marker>
              </Defs>

              {/* Define Constants for easier positioning */}
              {(() => {
                const cx = (width - 40) / 2;
                const cy = 188;
                const off = 6;
                const yTop = 135;
                const yBottom = 265;
                const xLeft = 85;
                const xRight = width - 125;
                const r = 15;

                return (
                  <>
                    {/* Path 1: Solar Left -> Battery (Orange to Green) */}
                    <Path
                      d={`M ${cx - off} ${yTop - 10} L ${cx - off} ${cy - r} Q ${cx - off} ${cy} ${cx - off - r} ${cy}`}
                      stroke={theme.orange}
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <Path
                      d={`M ${cx - off - r} ${cy} L ${xLeft} ${cy}`}
                      stroke={theme.green}
                      strokeWidth="1.5"
                      fill="none"
                      markerEnd="url(#arrowGreen)"
                    />
                    <Circle cx={cx - 60} cy={cy} r="2.5" fill={theme.green} />

                    {/* Path 2: Solar Right -> House Right (Orange to Blue) */}
                    <Path
                      d={`M ${cx + (off - 5)} ${yTop - 10} L ${cx + (off - 5)} ${cy}`}
                      stroke={theme.orange}
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <Path
                      d={`M ${cx + (off - 5)} ${cy} L ${cx + (off - 5)} ${yBottom}`}
                      stroke={theme.lightblue}
                      strokeWidth="1.5"
                      fill="none"
                      markerEnd="url(#arrowBlue)"
                    />

                    {/* Path 3: Grid -> House Left (Grey to Blue) */}
                    <Path
                      d={`M ${xRight} ${cy} L ${cx - (off - 25)} ${cy} Q ${cx - (off - 15)} ${cy} ${cx - (off - 15)} ${cy + r}`}
                      stroke={isDark ? "#555" : "#999"}
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <Path
                      d={`M ${cx - (off - 15)} ${cy + r} L ${cx - (off - 15)} ${yBottom}`}
                      stroke={theme.lightblue}
                      strokeWidth="1.5"
                      fill="none"
                      markerEnd="url(#arrowBlue)"
                    />
                    <Circle
                      cx={xRight - 45}
                      cy={cy}
                      r="2.5"
                      fill={isDark ? "#555" : "#999"}
                    />

                    {/* Central Junction Dot */}
                    <Circle cx={cx} cy={cy} r="4" fill="#333" />
                    <Circle cx={cx} cy={cy} r="2" fill="#666" />
                  </>
                );
              })()}
            </Svg>
          </View>

          {/* Nodes */}
          <View style={styles.nodeColumn}>
            <View style={[styles.node, styles.topNode]}>
              <View
                style={[
                  styles.nodeIconBg,
                  {
                    backgroundColor: isDark
                      ? "rgba(255, 152, 0, 0.1)"
                      : "rgba(255, 152, 0, 0.05)",
                  },
                ]}
              >
                <SolarIcon size={24} color={theme.orange} />
              </View>
              <Text style={[styles.nodeValue, { color: theme.orange }]}>
                1.057 kw
              </Text>
              <Text style={[styles.nodeLabel, { color: theme.gray }]}>
                Producing
              </Text>
            </View>

            <View style={styles.middleNodes}>
              <View style={[styles.node, styles.leftNode]}>
                <View
                  style={[
                    styles.nodeIconBg,
                    {
                      backgroundColor: isDark
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(76, 175, 80, 0.05)",
                    },
                  ]}
                >
                  <EnergyIcon size={24} color={theme.green} />
                </View>
                <Text style={[styles.nodeValue, { color: theme.green }]}>
                  0.041 kw
                </Text>
                <Text style={[styles.nodeLabel, { color: theme.gray }]}>
                  Charging
                </Text>
              </View>

              <View style={[styles.node, styles.rightNode]}>
                <View
                  style={[
                    styles.nodeIconBg,
                    {
                      backgroundColor: isDark
                        ? "rgba(30, 65, 105, 0.1)"
                        : "rgba(30, 65, 105, 0.05)",
                    },
                  ]}
                >
                  <GridIcon
                    size={24}
                    color={isDark ? theme.lightblue : theme.blue}
                  />
                </View>
                <Text
                  style={[
                    styles.nodeValue,
                    { color: isDark ? theme.lightblue : theme.blue },
                  ]}
                >
                  0.829 kw
                </Text>
                <Text style={[styles.nodeLabel, { color: theme.gray }]}>
                  Exporting
                </Text>
              </View>
            </View>

            <View style={[styles.node, styles.bottomNode]}>
              <View
                style={[
                  styles.nodeIconBg,
                  {
                    backgroundColor: isDark
                      ? "rgba(75, 178, 225, 0.1)"
                      : "rgba(75, 178, 225, 0.05)",
                  },
                ]}
              >
                <HomeIcon size={24} color={theme.lightblue} />
              </View>
              <Text style={[styles.nodeValue, { color: theme.text }]}>
                0.187 kw
              </Text>
              <Text style={[styles.nodeLabel, { color: theme.text }]}>
                Consuming
              </Text>
            </View>
          </View>
        </View>

        <BlurView
          intensity={isDark ? 20 : 60}
          style={[
            styles.statsCard,
            isDark ? styles.statsCardDark : styles.statsCardLight,
          ]}
        >
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.text }]}>
              2.98 <Text style={styles.statUnit}>kWh</Text>
            </Text>
            <Text style={[styles.statLabel, { color: theme.gray }]}>Today</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.text }]}>
              89.4 <Text style={styles.statUnit}>kWh</Text>
            </Text>
            <Text style={[styles.statLabel, { color: theme.gray }]}>
              This month
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.text }]}>
              536.4 <Text style={styles.statUnit}>kWh</Text>
            </Text>
            <Text style={[styles.statLabel, { color: theme.gray }]}>Total</Text>
          </View>
        </BlurView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 4,
    marginBottom: 15,
  },
  tabContainerLight: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  tabContainerDark: {
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tabButtonActiveLight: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  tabButtonActiveDark: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  liveReportHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  liveReportTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  timeText: {
    fontSize: 12,
  },
  infoCard: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoCardLight: {
    backgroundColor: "#FFFFFF",
  },
  infoCardDark: {
    backgroundColor: "#1A1A1A",
  },
  infoSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  infoDetails: {
    marginLeft: 10,
  },
  infoLabel: {
    fontSize: 12,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "700",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 15,
  },
  profileIconLabel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  powerFlowContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  svgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  nodeColumn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  middleNodes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 30,
  },
  node: {
    alignItems: "center",
  },
  topNode: {
    marginBottom: 0,
  },
  leftNode: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightNode: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomNode: {
    marginTop: 0,
  },
  nodeIconBg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  nodeValue: {
    fontSize: 14,
    fontWeight: "700",
  },
  nodeLabel: {
    fontSize: 10,
  },
  statsCard: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  statsCardLight: {
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  statsCardDark: {
    backgroundColor: "rgba(30, 65, 105, 0.4)",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  statUnit: {
    fontSize: 12,
    fontWeight: "400",
  },
  statLabel: {
    fontSize: 12,
  },
});
