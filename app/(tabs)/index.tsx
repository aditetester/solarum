import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const isDark = colorScheme === "dark";

  const [isOn, setIsOn] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    Animated.timing(anim, {
      toValue: isOn ? 0 : 1,
      duration: 180,
      useNativeDriver: false,
    }).start();

    setIsOn(!isOn);
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={
              isDark
                ? require("@/assets/images/home/solarum-dark.png")
                : require("@/assets/images/home/solarum.png")
            }
            style={styles.logo}
          />
        </View>

        {/* SEARCH BAR */}
        <View style={styles.searchContainer}>
          <View
            style={[
              styles.searchBox,
              {
                backgroundColor: isDark ? theme.carddark : theme.cardlight,
                borderColor: theme.borderlight,
              },
            ]}
          >
            <Ionicons name="search" size={18} color={theme.placeholderlight} />
            <TextInput
              placeholder="Search..."
              placeholderTextColor={theme.placeholderlight}
              style={[styles.searchInput, { color: theme.text }]}
            />
          </View>
          <View
            style={[
              styles.notificationbox,
              {
                backgroundColor: isDark ? theme.carddark : theme.cardlight,
                borderColor: theme.borderlight,
              },
            ]}
          >
            <Ionicons
              name="notifications-outline"
              size={18}
              color={theme.placeholderlight}
            />
          </View>
        </View>

        {/* SOLAR CARD */}
        <View
          style={[
            styles.solarCard,
            {
              backgroundColor: isDark ? theme.carddark : theme.cardlight,
            },
          ]}
        >
          <View style={styles.solarHeader}>
            {/* LEFT */}
            <View style={styles.solarLeft}>
              <Image
                source={
                  isDark
                    ? require("@/assets/images/home/panel-dark.png")
                    : require("@/assets/images/home/panel.png")
                }
                style={styles.panelImage}
              />
              <View>
                <Text
                  style={[
                    styles.solarTitle,
                    { color: isDark ? theme.white : theme.black },
                  ]}
                >
                  32 Panel
                </Text>
                <Text
                  style={[
                    styles.solarSubtitle,
                    { color: isDark ? theme.white : theme.black },
                  ]}
                >
                  Total solar panel
                </Text>
              </View>
            </View>

            {/* RIGHT – custom toggle */}
            <Pressable
              onPress={toggleSwitch}
              style={[
                styles.toggle,
                {
                  backgroundColor: theme.lightblue,
                },
              ]}
            >
              {/* TEXT */}
              <Animated.Text
                style={[
                  styles.toggleText,
                  {
                    color: isDark ? theme.black : theme.white,
                    transform: [
                      {
                        translateX: anim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [6, 28], // OFF left → ON right
                        }),
                      },
                    ],
                  },
                ]}
              >
                {isOn ? "ON" : "OFF"}
              </Animated.Text>

              {/* DOT */}
              <Animated.View
                style={[
                  styles.toggleDot,
                  {
                    backgroundColor: isDark ? theme.black : theme.white,
                    transform: [
                      {
                        translateX: anim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [34, 4], // OFF right → ON left
                        }),
                      },
                    ],
                  },
                ]}
              />
            </Pressable>
          </View>
          <View
            style={[styles.progressLine, { backgroundColor: theme.systemgray }]}
          >
            <View
              style={[
                styles.progressFill,
                { backgroundColor: theme.lightblue },
              ]}
            />
          </View>

          <View style={styles.solarStats}>
            <View style={styles.statsRow}>
              {[
                { label: "Solar", value: "3.58 kW" },
                { label: "Grid", value: "4.46 kW" },
                { label: "Battery", value: "1.57 kW" },
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <View style={styles.statItem}>
                    <Text
                      style={[styles.statLabel, { color: theme.lightgray }]}
                    >
                      {item.label}
                    </Text>
                    <Text style={[styles.statValue, { color: theme.text }]}>
                      {item.value}
                    </Text>
                  </View>

                  {index !== 2 && <View style={styles.verticalDivider} />}
                </React.Fragment>
              ))}
            </View>

            <Image
              source={require("@/assets/images/home/solar.png")}
              style={styles.solarImage}
              resizeMode="contain"
            />
          </View>

          <View
            style={[
              styles.alertBox,
              { backgroundColor: isDark ? theme.lightblue : theme.blue },
            ]}
          >
            <Text style={[styles.alertText, { color: theme.white }]}>
              There will be a thunderstorm in your area, better to turn off your
              solar panels.
            </Text>
            <Ionicons name="arrow-forward" size={18} color={theme.white} />
          </View>
        </View>

        {/* SUMMARY */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Summery
        </Text>

        <View style={styles.summaryGrid}>
          {[
            { title: "Total energy", value: "80.40 kw/h" },
            { title: "Consumed", value: "60.12 kw/h" },
            { title: "Capacity", value: "10.80 kw/h" },
            { title: "CO2 reduction", value: "14.60 ton" },
          ].map((item) => (
            <View
              key={item.title}
              style={[
                styles.summaryCard,
                {
                  borderColor: theme.lightblue,
                  backgroundColor: isDark ? theme.carddark : theme.white,
                },
              ]}
            >
              <Text style={[styles.summaryTitle, { color: theme.lightgray }]}>
                {item.title}
              </Text>
              <Text style={[styles.summaryValue, { color: theme.text }]}>
                {item.value}
              </Text>
            </View>
          ))}
        </View>

        {/* BEST OFFER */}
        <Text
          style={[
            styles.sectionTitle,
            { color: theme.text, marginTop: 20, marginBottom: 0 },
          ]}
        >
          Best Offers
        </Text>
        <View
          style={[
            styles.offerCard,
            {
              borderColor: theme.lightblue,
              backgroundColor: isDark ? theme.carddark : theme.cardlight,
            },
          ]}
        >
          {/* IMAGE SECTION */}
          <View style={styles.offerImageWrapper}>
            <Image
              source={require("@/assets/images/home/best-offer.png")}
              style={styles.offerImage}
              resizeMode="cover"
            />

            {/* Arrow Icon */}
            <TouchableOpacity style={styles.offerArrow}>
              <Ionicons name="chevron-forward" size={20} color={theme.white} />
            </TouchableOpacity>
          </View>

          {/* CONTENT SECTION */}
          <View style={styles.offerContent}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.offerTitle, { color: theme.text }]}>
                Flat 20% OFF on Solar Installation
              </Text>
              <Text style={[styles.offerSubtitle, { color: theme.lightgray }]}>
                Book before 30 Dec & save big
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.offerButton, { borderColor: theme.lightblue }]}
            >
              <Text
                style={[styles.offerButtonText, { color: theme.lightblue }]}
              >
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: {
    height: 30,
    width: 140,
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
  },
  notificationbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderWidth: 1,
    borderRadius: 8,
  },
  solarCard: {
    margin: 20,
    borderRadius: 14,
    overflow: "hidden",
  },
  solarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
  },
  solarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  panelImage: {
    width: 38,
    height: 38,
  },
  solarTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  solarStats: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  statLabel: {
    fontSize: 12,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 15,
    fontWeight: "600",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  solarImage: {
    width: 90,
    height: 90,
    marginLeft: 10,
  },
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  alertText: {
    flex: 1,
    color: "#fff",
    fontSize: 12,
    marginRight: 8,
  },
  solarSubtitle: {
    fontSize: 12,
  },
  toggle: {
    width: 64,
    height: 34,
    borderRadius: 20,
    padding: 2,
    justifyContent: "center",
  },
  toggleDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
  },
  toggleText: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "600",
  },
  progressLine: {
    height: 6,
    marginHorizontal: 14,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 14,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    width: "60%", // adjust to match progress shown
    borderRadius: 10,
  },
  statItem: {
    alignItems: "flex-start",
    paddingHorizontal: 8,
  },
  verticalDivider: {
    width: 1,
    height: 28,
    backgroundColor: "#E0E0E0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 20,
    marginBottom: 12,
  },
  summaryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
  },
  summaryCard: {
    width: "48%",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    margin: "1%",
  },
  summaryTitle: {
    fontSize: 12,
    marginBottom: 6,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  offerCard: {
    marginHorizontal: 20,
    marginTop: 12,
    borderRadius: 14,
    overflow: "hidden",
    elevation: 3, // Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  offerImageWrapper: {
    position: "relative",
  },
  offerImage: {
    width: "100%",
    height: 170,
  },
  offerArrow: {
    position: "absolute",
    top: 12,
    right: 12,
    borderRadius: 20,
    padding: 4,
  },
  offerContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  offerTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  offerSubtitle: {
    fontSize: 12,
    marginTop: 4,
  },
  offerButton: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  offerButtonText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
