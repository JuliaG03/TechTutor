import { Tabs, Redirect } from 'expo-router';
import { View, Image, Text } from 'react-native';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from '@/constants';

const TabIcon = ({ icon, color, name, focused }) => {
  const colorScheme = useColorScheme();

  return (
    <View className='items-center justify-center gap-2 mt-4'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text style={{fontSize: 9, color: focused ? Colors[colorScheme ?? 'light'].tint : Colors[colorScheme ?? 'light'].text}} className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].tabBackground
        }
      }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon = {icons.profile}
              color = {color}
              name = "Profile"
              focused = {focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon = {icons.friends}
              color = {color}
              name = "Friends"
              focused = {focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="learningpaths"
        options={{
          title: 'Learn',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon = {icons.learningpaths}
              color = {color}
              name = "Learn"
              focused = {focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: 'Leaderboard',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon = {icons.leaderboard}
              color = {color}
              name = "Leaderboard"
              focused = {focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon = {icons.chat}
              color = {color}
              name = "Chat"
              focused = {focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon = {icons.settings}
              color = {color}
              name = "Settings"
              focused = {focused}
            />
          ),
        }}
      />
    </Tabs>
    
  );
}
