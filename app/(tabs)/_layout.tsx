import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Text } from "@/components/atoms/Text";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Book library",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "library" : "library-outline"}
                size={24}
                color={focused ? Colors.secondary : Colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={24}
                color={focused ? Colors.secondary : Colors.primary}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
