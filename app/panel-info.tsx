import { AppButton } from "@/components/AppButton";
import { ArrowIcon, EnergyIcon } from "@/components/icons";
import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { AntDesign, Entypo, Fontisto, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//  CUSTOM SVG ICONS

// const BatteryIcon = ({ color }: { color: string }) => (
//   <View style={[styles.statIconContainer, { backgroundColor: "#1E4169" }]}>
//     <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//       <Path d="M23 12L20.56 14.44L11.56 5.44L14 3L23 12Z" fill={color} />
//       <Path d="M3 12L5.44 9.56L14.44 18.56L12 21L3 12Z" fill={color} />
//     </Svg>
//   </View>
// );

// const WifiIcon = ({ color }: { color: string }) => (
//   <View style={[styles.statIconContainer, { backgroundColor: "#4BB2E1" }]}>
//     <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//       <Path
//         d="M12 21C11.45 21 11 20.55 11 20C11 19.45 11.45 19 12 19C12.55 19 13 19.45 13 20C13 20.55 12.55 21 12 21ZM12 17C9.24 17 6.74 18.12 4.93 19.93C4.54 20.32 3.91 20.32 3.52 19.93C3.13 19.54 3.13 18.91 3.52 18.52C5.7 16.34 8.7 15 12 15C15.3 15 18.3 16.34 20.48 18.52C20.87 18.91 20.87 19.54 20.48 19.93C20.09 20.32 19.46 20.32 19.07 19.93C17.26 18.12 14.76 17 12 17ZM12 12C7.58 12 3.58 13.79 0.69 16.69C0.3 17.08 0.3 17.71 0.69 18.1C1.08 18.49 1.71 18.49 2.1 18.1C4.64 15.56 8.14 14 12 14C15.86 14 19.36 15.56 21.9 18.1C22.29 18.49 22.92 18.49 23.31 18.1C23.7 17.71 23.7 17.08 23.31 16.69C20.42 13.79 16.42 12 12 12Z"
//         fill="#FFF"
//       />
//     </Svg>
//   </View>
// );

// const WindIcon = ({ color }: { color: string }) => (
//   <View style={[styles.statIconContainer, { backgroundColor: "#4BB2E1" }]}>
//     <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//       <Path
//         d="M7 16C5.34 16 4 14.66 4 13C4 11.34 5.34 10 7 10H17V12H7C7.55 12 8 12.45 8 13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V12"
//         stroke="#FFF"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <Path
//         d="M10 8C10 6.34 11.34 5 13 5C14.66 5 16 6.34 16 8V9H10"
//         stroke="#FFF"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <Path
//         d="M20 16C20 17.66 18.66 19 17 19C15.34 19 14 17.66 14 16V15H20"
//         stroke="#FFF"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//     </Svg>
//   </View>
// );

// const TempIcon = ({ color }: { color: string }) => (
//   <View style={[styles.statIconContainer, { backgroundColor: "#1E4169" }]}>
//     <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//       <Path
//         d="M15 13V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V13C7.34 14.15 6.5 16.03 6.5 18C6.5 21.04 8.96 23.5 12 23.5C15.04 23.5 17.5 21.04 17.5 18C17.5 16.03 16.66 14.15 15 13ZM12 4C12.55 4 13 4.45 13 5V8H11V5C11 4.45 11.45 4 12 4Z"
//         fill={color}
//       />
//     </Svg>
//   </View>
// );

export default function PanelInfoScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];

  const STATS = [
    {
      id: "1",
      label: "Battery Charge",
      value: "80%",
      icon: <EnergyIcon color={theme.white} />,
    },
    {
      id: "2",
      label: "Wi-Fi Speed",
      value: "55 mb/s",
      icon: <Ionicons name="wifi" size={24} color={theme.white} />,
    },
    {
      id: "3",
      label: "Wind Speed",
      value: "140 m/s",
      icon: <Fontisto name="wind" size={24} color={theme.white} />,
    },
    {
      id: "4",
      label: "Temperature",
      value: "20°C",
      icon: <Ionicons name="thermometer" size={24} color={theme.white} />,
    },
  ];

  const params = useLocalSearchParams<{
    id: string;
    name: string;
    efficiency: string;
    power: string;
    status: string;
  }>();

  const handlePress = (label: string) => {
    console.log(`Pressed: ${label}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* HEADER */}
      <ScreenHeader title={params.name as string} showBackButton />

      <ScrollView contentContainerStyle={styles.content}>
        {/* PANEL STATUS BADGE */}
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: isDark ? theme.carddark : theme.cardlight },
          ]}
        >
          <View
            style={[
              styles.statusDot,
              { backgroundColor: isDark ? theme.lightblue : theme.blue },
            ]}
          />
          <Text style={[styles.connectedText, { color: theme.text }]}>
            {params.status === "Active"
              ? "Connected to 40 devices"
              : "Panel is offline"}
          </Text>
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
                { backgroundColor: isDark ? theme.carddark : theme.cardlight },
              ]}
              onPress={() => handlePress("Expand")}
            >
              <AntDesign name="expand-alt" size={20} color={theme.text} />
              {/* <Ionicons name="expand-outline" size={20} color={theme.text} /> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.actionBtn,
                { backgroundColor: isDark ? theme.carddark : theme.cardlight },
              ]}
              onPress={() => handlePress("Rotate")}
            >
              <Entypo name="cycle" size={20} color={theme.text} />
              {/* <Ionicons name="refresh-outline" size={20} color={theme.text} /> */}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[
              styles.powerBtn,
              { backgroundColor: isDark ? theme.lightblue : theme.systemblue },
            ]}
            onPress={() => handlePress("Power")}
          >
            <Ionicons
              name="power"
              size={20}
              color={isDark ? theme.black : theme.white}
            />
          </TouchableOpacity>
        </View>

        {/* PERFORMANCE CHART SECTION */}
        <View style={styles.sectionHeader}>
          <SectionTitle title="Performance Monitoring" marginBottom={0} />
          <TouchableOpacity>
            <Text style={[styles.manageText, { color: theme.systemgray }]}>
              Manage
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.performanceCard,
            { backgroundColor: isDark ? theme.carddark : theme.cardlight },
          ]}
        >
          <View style={styles.perfTop}>
            <View>
              <View style={styles.perfTopRow}>
                <EnergyIcon size={20} color={theme.gold} fill={theme.gold} />
                <Text style={[styles.performanceValue, { color: theme.text }]}>
                  {params.power}
                </Text>
              </View>
              <Text
                style={[styles.performanceLabel, { color: theme.systemgray }]}
              >
                Generating Averagely
              </Text>
            </View>
            <View
              style={[
                styles.powerLimitBadge,
                { borderColor: theme.systemgray },
              ]}
            >
              <Text style={[styles.powerLimitText, { color: theme.text }]}>
                Set power limit
              </Text>
              <ArrowIcon
                color={theme.text}
                size={10}
                style={{ transform: [{ rotate: "90deg" }] }}
              />
            </View>
          </View>

          <View style={styles.chartContainer}>
            {/* BAR BORDER WRAPPER */}
            <View
              style={[
                styles.barWrapper,
                { borderColor: isDark ? theme.lightblue : theme.systemblue },
              ]}
            >
              <View style={styles.barsRow}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <View
                    key={i}
                    style={[
                      styles.bar,
                      {
                        backgroundColor:
                          i < 7
                            ? isDark
                              ? theme.lightblue
                              : theme.systemblue
                            : theme.systemgray,
                      },
                    ]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.efficiencyBlock}>
              <Text style={[styles.efficiencyPercent, { color: theme.text }]}>
                {params.efficiency}
              </Text>
              <Text
                style={[styles.efficiencyLabel, { color: theme.systemgray }]}
              >
                Efficiency
              </Text>
            </View>
          </View>
        </View>

        {/* STATS */}
        <View style={styles.statsGrid}>
          {STATS.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handlePress(item.label)}
              style={[
                styles.statCard,
                {
                  backgroundColor: isDark ? theme.carddark : theme.cardlight,
                  borderColor: isDark ? theme.borderdark : theme.borderlight,
                  borderWidth: 1,
                },
              ]}
            >
              <View
                style={[
                  styles.statIcon,
                  {
                    backgroundColor: theme.systemblue,
                  },
                ]}
              >
                {item.icon}
              </View>
              <View style={styles.stateInfo}>
                <Text style={[styles.statValue, { color: theme.text }]}>
                  {item.value}
                </Text>
                <Text style={[styles.statLabel, { color: theme.systemgray }]}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* INVITE SECTION */}
        <TouchableOpacity style={styles.inviteCard}>
          <View
            style={[
              styles.inviteBg,
              {
                borderTopWidth: 15,
                borderTopColor: isDark ? theme.lightblue : theme.blue,
                backgroundColor: isDark ? theme.lightblue : theme.blue,
              },
            ]}
          >
            <View
              style={[
                styles.inviteOverlay,
                {
                  backgroundColor: isDark ? theme.systemblue : theme.systemblue,
                },
              ]}
            >
              <View>
                <Text style={[styles.inviteTitle, { color: theme.white }]}>
                  Invite your friends
                </Text>
                <View style={styles.avatarsRow}>
                  <Image
                    source={require("@/assets/images/panel/people-1.png")}
                    style={[styles.avatar, { borderColor: theme.white }]}
                  />
                  <Image
                    source={require("@/assets/images/panel/people-2.png")}
                    style={[styles.avatar, { borderColor: theme.white }]}
                  />
                  <Image
                    source={require("@/assets/images/panel/people-3.png")}
                    style={[styles.avatar, { borderColor: theme.white }]}
                  />
                </View>
              </View>
              <AppButton
                title="Invite Now"
                variant="outline"
                style={[
                  styles.inviteBtn,
                  {
                    borderColor: theme.white,
                    backgroundColor: theme.opacitywhite,
                  },
                ]}
                textStyle={[styles.inviteBtnText, { color: theme.white }]}
              />
              {/* <TouchableOpacity
                style={[
                  styles.inviteBtn,
                  {
                    backgroundColor: theme.opacitywhite,
                    borderColor: theme.white,
                  },
                ]}
              >
                <Text style={[styles.inviteBtnText, { color: theme.white }]}>
                  Invite Now
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
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
    paddingBottom: 40,
  },
  statusBadge: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 2,
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
  manageText: {
    fontSize: 12,
  },

  performanceCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
  },
  perfTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  perfTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  performanceValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  performanceLabel: {
    fontSize: 11,
    marginTop: 2,
  },
  powerLimitBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  powerLimitText: {
    fontSize: 10,
    marginRight: 4,
  },
  chartContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  barWrapper: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 6,
    padding: 4,
    marginRight: 56,
  },
  barsRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 25,
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
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statCard: {
    width: "48%",
    padding: 6,
    borderRadius: 4,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  statIcon: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 6,
  },
  stateInfo: {
    marginLeft: 10,
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
  },

  inviteCard: {
    borderRadius: 16,
    overflow: "hidden",
  },
  inviteBg: {
    borderRadius: 12,
    overflow: "hidden",
  },
  inviteOverlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  inviteTitle: {
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
    marginRight: -8,
  },
  inviteBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  inviteBtnText: {
    fontSize: 12,
    fontWeight: "700",
  },
});
