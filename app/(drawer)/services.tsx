import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function ServicesScreen() {

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>
            {/* --- Top Menu --- */}
            <ThemedView style={styles.menuBar}>
                <Pressable 
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    style={styles.menuButton}>
                    <Ionicons name="menu" size={28} color="#2E2E2E" />
                </Pressable>
            </ThemedView>

            <ScrollView contentContainerStyle={styles.container}>
                <ThemedText type="title" style={styles.title}>Our Services</ThemedText>

                <ThemedText style={styles.description}>
                    Welcome to **E Marketing Paradise**!  
                    We specialize in:  
                    - Social Media Management  
                    - Web Development  
                    - Mobile App Development  
                    - Graphic Designing  
                    - Digital Marketing
                    - Type Settings
                    - Other Computer-Related Work  
                    Our mission is to help your business grow digitally with creative and reliable solutions.
                </ThemedText>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: 'transparent',
    },
    menuBar: {
        paddingTop: 0,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    menuButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    title: {
        marginBottom: 16,
        color: '#2E2E2E',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#2E2E2E',
    },
});
