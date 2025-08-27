import { StyleSheet, } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
    return (
        <ThemedView style={styles.titleContainer}>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        marginTop: 16,
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 8,
    },
});
