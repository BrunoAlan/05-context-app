import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        headerShadowVisible: false,
        headerStatusBarHeight: 0,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ size }) => <Ionicons name='home' size={size} />,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ size }) => <Ionicons name='person' size={size} />,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ size }) => <Ionicons name='settings' size={size} />,
        }}
      />
    </Tabs>
  );
}
