import { ScreenHeader } from "@/components/ScreenHeader";
import { SectionTitle } from "@/components/SectionTitle";
import {
  EnergyIcon,
  RainIcon,
  ReportIcon,
  ServiceIcon,
} from "@/components/icons";
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
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? theme.black : theme.white },
      ]}
    >
      {/* Header */}
      <ScreenHeader
        title="Notifications"
        showBackButton
        onBackPress={() => router.replace("/")}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <SectionTitle title="Today" marginTop={16} marginBottom={8} />
        {notificationsToday.map(renderCard)}

        <SectionTitle title="Yesterday" marginTop={16} marginBottom={8} />
        {notificationsYesterday.map(renderCard)}
      </ScrollView>
    </View>
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
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
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
