import {
  HomeIcon,
  PanelIcon,
  ProfileIcon,
  ReportIcon,
  ServiceIcon,
} from "@/components/icons";
import { Colors } from "@/constants/theme";
import * as NavigationBar from "expo-navigation-bar";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();

  const isDark = colorScheme === "dark";

  useEffect(() => {
    if (isDark) {
      NavigationBar.setBackgroundColorAsync(theme.black);
      NavigationBar.setButtonStyleAsync("light");
    } else {
      NavigationBar.setBackgroundColorAsync(theme.white);
      NavigationBar.setButtonStyleAsync("dark");
    }
  }, [isDark, theme]);

  const TabItem = ({
    Icon,
    label,
    focused,
    color,
  }: {
    Icon: any;
    label: string;
    focused: boolean;
    color: string;
  }) => {
    const activeBg = isDark ? theme.lightblue : theme.blue;
    const activeText = isDark ? theme.black : theme.white;

    return (
      <View
        style={[
          styles.tabItemContainer,
          focused && { backgroundColor: activeBg },
        ]}
      >
        <Icon size={20} color={focused ? activeText : color} />
        <Text
          style={[styles.tabLabelText, { color: focused ? activeText : color }]}
        >
          {label}
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.tint,
          tabBarInactiveTintColor: theme.tabIconDefault,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingTop: 12,
            backgroundColor: theme.background,
            elevation: 0,
            shadowOpacity: 0,
            paddingHorizontal: 10,
            paddingBottom: insets.bottom,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabItem
                Icon={HomeIcon}
                label="Home"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="panel"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabItem
                Icon={PanelIcon}
                label="Panel"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="service"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabItem
                Icon={ServiceIcon}
                label="Service"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabItem
                Icon={ReportIcon}
                label="Report"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabItem
                Icon={ProfileIcon}
                label="Profile"
                focused={focused}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabItemContainer: {
    borderRadius: 12,
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
    minHeight: 60,
  },
  tabLabelText: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
});
