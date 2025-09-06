import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function AboutScreen() {
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>
            {/* Header */}
            <ThemedView style={styles.header}>
                <ThemedView style={styles.menuBar}>
                    <Pressable
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                        style={{ padding: 8, borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        <Ionicons name="menu" size={28} color="#2E2E2E" />
                    </Pressable>
                </ThemedView>
                <ThemedText style={styles.headerTitle}>මෙම යෙදුම පිළිබඳව</ThemedText>
                <View style={{ width: 24 }} />
            </ThemedView>

            {/* Content Card */}
            <ThemedView style={styles.card}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ThemedText style={styles.cardTitle}>DP Education E - Marketing Paradise</ThemedText>

                    {/* Placeholder Image */}
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2' }}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />

                    <ThemedText style={styles.cardText}>
                        මෙම යෙදුම ශ්‍රී ලංකා රාමඤ්ඤය මහා නිකාය මඟින් පවත්වන ශ්‍රී ලංකා ත්‍රිපිටක විභාගයට පෙනී සිටින සියලු දෙනාට අවශ්‍ය පසුගිය ප්‍රශ්න පත්‍ර ලබා දීම සිදු කරයි.
                    </ThemedText>
                </View>

                {/* Bottom Version and Footer */}
                <View style={styles.bottomContainer}>
                    <ThemedText style={styles.version}>Version: 1.0.0</ThemedText>
                    <ThemedText style={styles.footer}>© 2024 DP Education. All rights reserved.</ThemedText>
                </View>
            </ThemedView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    headerTitle: { fontSize: 20, fontWeight: '700', color: '#000' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: 'transparent'
    },
    menuBar: {
        paddingTop: 0,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    card: {
        flex: 1,
        margin: 16,
        padding: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        shadowColor: '#d6d6d6ff',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 5,
        justifyContent: 'space-between',  
        alignItems: 'center',
        overflow: 'hidden',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: -60,
        color: '#333'
    },
    cardImage: {
        width: 350,
        height: 250,
        marginBottom: 16,
        borderRadius: 12,
    },
    cardText: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#555',
        fontWeight: '600',
        marginTop: 20,
    },
    bottomContainer: {
        alignItems: 'center',
        marginBottom: 0,
    },
    version: {
        fontSize: 14,
        textAlign: 'center',
        color: '#888',
        marginBottom: 4,
    },
    footer: {
        fontSize: 14,
        textAlign: 'center',
        color: '#AAA',
    }
});
