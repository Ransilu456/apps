import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons, } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            position: 'absolute',
            height: 64,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: '#FFFFFF',
            elevation: 20,
            borderColor: '#e5e7eb',
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: '#ffa601ff',
          tabBarInactiveTintColor: '#111827',
          tabBarButton: (props) => (
            <TouchableOpacity
              activeOpacity={0.8}
              {...Object.fromEntries(Object.entries(props).filter(([_, v]) => v !== null))}
            />
          ),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="paper"
          options={{
            title: "Papers",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
