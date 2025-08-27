import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import CustomButton from '@/components/custom/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function App() {
    const router = useRouter();
    return (
        <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>

            {/* --- Top Menu --- */}
            <ThemedView style={styles.menuBar}>
                <Pressable onPress={() => console.log('Menu tapped')} style={{ padding: 8, borderRadius: 8, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
                    <Ionicons name="menu" size={28} color="#2E2E2E" />
                </Pressable>
            </ThemedView>

            {/* --- Contents --- */}
            <ThemedView style={styles.container}>
                <Ionicons name="book" size={48} color="#FFA500" />
                <ThemedText style={styles.title}>
                    ශ්‍රී ලංකා ත්‍රිපිටක විභාගය
                </ThemedText>
                <ThemedText style={styles.subtitle}>යමෙක් තම සිත පාලනය කරන්නේ නම්, ඔහු සැමවිටම නිවන් පථයේ සිටී.</ThemedText>
            </ThemedView>

            {/* --- Logo --- */}
            <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', marginTop: 50 }}>
                <Image
                    source={require('@/assets/logo.png')}
                    style={styles.logo}
                />
            </ThemedView>

            {/* --- Button --- */}
            <ThemedView style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 0, backgroundColor: 'transparent' }}>
                <CustomButton title="ආරම්භ කරන්න" style={{ backgroundColor: '#F4B400' }} pressedStyle={{ backgroundColor: '#F48400' }} onPress={() => router.replace('/(tabs)')} />
            </ThemedView>

            {/* --- Footer --- */}
            <ThemedView style={{ padding: 16, backgroundColor: 'transparent', alignItems: 'center' }}>
                <ThemedText style={styles.footertitle}>
                    © v1.0.0 • Powered by DP Education..
                </ThemedText>
            </ThemedView>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    menuBar: {
        paddingTop: 0,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'transparent',
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: -80,
    },
    title: {
        fontSize: 34,
        color: '#2E2E2E',
        textAlign: 'center',
        fontWeight: '600',
        lineHeight: 42,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 8,
        lineHeight: 24,
    },
    footertitle: {
        fontSize: 10,
        color: '#6B7280',
        textAlign: 'center',
        marginTop: 0,
        lineHeight: 20,
    }
});
