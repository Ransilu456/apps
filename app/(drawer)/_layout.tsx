import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import SidebarContent from '@/components/custom/CustomSidebarContent';
import { StyleSheet } from 'react-native';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: { backgroundColor: '#fff', width: 250 },
                drawerActiveTintColor: '#F4B400',
                drawerInactiveTintColor: '#555',
                drawerItemStyle: {
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: '#e5e7eb',
                }
            }}
            drawerContent={(props) => <SidebarContent {...props} />}
        >
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="about"
                options={{
                    drawerLabel: 'About',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="wallet-outline" size={size} color={color} />
                    ),
                }}
            />

            <Drawer.Screen
                name="services"
                options={{
                    drawerLabel: 'Our Services',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="construct-outline" size={size} color={color} />
                    ),
                }}
            />

        </Drawer>
    );
}
