import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import CustomButton from '@/components/custom/CustomButton';


export default function PaperScreen() {
  const { exam, category, paper } = useLocalSearchParams<{ exam: string; category: string; paper: string }>();


  if (!exam) {
    return (
      <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>
        <ThemedView style={styles.container}>
          <ThemedText style={styles.title}>📄 No papper selected</ThemedText>
        </ThemedView>
      </LinearGradient>
    )
  }

  return (
    <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>📄 Paper Details</ThemedText>
        <ThemedText style={styles.info}>Exam: {exam}</ThemedText>
        <ThemedText style={styles.info}>Category: {category}</ThemedText>
        <ThemedText style={styles.info}>Paper: {paper}</ThemedText>


   
      <CustomButton
        title="Download"
        style={{ marginTop: 20 }}
        pressedStyle={{ backgroundColor: '#000000' }} 
        onPress={() => {}}></CustomButton>
      </ThemedView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
});
