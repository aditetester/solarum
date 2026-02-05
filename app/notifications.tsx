import {
  EnergyIcon,
  RainIcon,
  ReportIcon,
  ServiceIcon,
} from "@/components/icons";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/context/ThemeContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const BackArrow = ({ color }: { color: string }) => (
//   <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
//     <Path
//       d="M15 18l-6-6 6-6"
//       stroke={color}
//       strokeWidth={2}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </Svg>
// );

const notificationsToday = [
  {
    id: "1",
    name: "Reports",
    title: "Energy Update!",
    desc: "Today's generation summary is available. Your system generated 7.8 kWh today.",
    time: "30 min ago",
    action: "View report",
  },
  {
    id: "2",
    name: "Environment",
    title: "Cloudy Day Ahead",
    desc: "There will be a thunderstorm in your area, better to turn off your solar panels.",
    time: "1 hr ago",
    action: "See forecast",
  },
  {
    id: "3",
    name: "Service Update",
    title: "Service Booking Update",
    desc: "A technician is assigned for your installation/service booking.",
    time: "2 hr ago",
    action: "Track booking",
  },
  {
    id: "4",
    name: "Service Alerts",
    title: "Service Reminder",
    desc: "It's been a while since your last solar system service.",
    time: "5 hr ago",
    action: "Book service",
  },
];

const notificationsYesterday = [
  {
    id: "5",
    name: "Energy Alerts",
    title: "Low Energy Alert",
    desc: "Your solar system generated lower energy than usual.",
    time: "1 day ago",
    action: "Check details",
  },
  {
    id: "6",
    name: "Energy Update",
    title: "Inverter Running Smoothly",
    desc: "Your inverter is operating normally. No issues found.",
    time: "1 day ago",
    action: "See status",
  },
];

export default function NotificationsScreen() {
  const { theme: themeName, isDark } = useTheme();
  const theme = Colors[themeName];
  const router = useRouter();

  const getIcon = (name: string) => {
    if (name === "Reports") {
      return <ReportIcon size={16} color={theme.green} />;
    } else if (name === "Environment") {
      return <RainIcon size={16} color={theme.lightblue} />;
    } else if (name === "Service Update") {
      return <ServiceIcon size={16} color={theme.green} />;
    } else if (name === "Service Alerts") {
      return <ServiceIcon size={16} color={theme.red} />;
    } else if (name === "Energy Update") {
      return <EnergyIcon size={16} color={theme.green} />;
    } else if (name === "Energy Alerts") {
      return <EnergyIcon size={16} color={theme.red} />;
    }
  };

  const renderCard = (item: any) => (
    <View
      key={item.id}
      style={[
        styles.card,
        {
          backgroundColor: isDark ? theme.carddark : theme.cardlight,
        },
      ]}
    >
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor:
                item.name === "Reports" ||
                item.name === "Service Update" ||
                item.name === "Energy Update"
                  ? theme.opacitygreen
                  : item.name === "Environment"
                    ? theme.opacityblue
                    : item.name === "Service Alerts" ||
                        item.name === "Energy Alerts"
                      ? theme.opacityred
                      : theme.cardlight,
              borderColor:
                item.name === "Reports" ||
                item.name === "Service Update" ||
                item.name === "Energy Update"
                  ? theme.green
                  : item.name === "Environment"
                    ? theme.lightblue
                    : item.name === "Service Alerts" ||
                        item.name === "Energy Alerts"
                      ? theme.red
                      : theme.cardlight,
            },
          ]}
        >
          {getIcon(item.name)}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>
            {item.title}
          </Text>
        </View>
        <Text style={[styles.time, { color: theme.systemgray }]}>
          {item.time}
        </Text>
      </View>

      <Text style={[styles.desc, { color: theme.gray }]}>{item.desc}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("Action clicked:", item.action);
        }}
      >
        <Text
          style={[
            styles.action,
            { color: theme.tint, borderColor: theme.tint },
          ]}
        >
          {item.action}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? theme.black : theme.white },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            console.log("Back arrow clicked");
            router.replace("/");
          }}
        >
          <Ionicons name="arrow-back" size={24} color={theme.text} />
          {/* <BackArrow color={colors.text} /> */}
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Notifications
        </Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={[
            styles.section,
            { color: isDark ? theme.white : theme.black },
          ]}
        >
          Today
        </Text>
        {notificationsToday.map(renderCard)}

        <Text
          style={[
            styles.section,
            { color: isDark ? theme.white : theme.black },
          ]}
        >
          Yesterday
        </Text>
        {notificationsYesterday.map(renderCard)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  time: {
    fontSize: 11,
  },
  desc: {
    fontSize: 13,
    marginBottom: 6,
    lineHeight: 18,
    marginLeft: 36,
  },
  action: {
    fontSize: 12,
    fontWeight: "500",
    borderBottomWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 36,
  },
});
