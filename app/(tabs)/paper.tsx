import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Platform,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CustomButton from '@/components/custom/CustomButton';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function PaperScreen() {
  const router = useRouter();

  const { exam, category, paperTitle, paperLink } = useLocalSearchParams<{
    exam: string;
    category: string;
    paperTitle: string;
    paperLink: string;
  }>();

  const handleDownload = async () => {
    try {
      const fileName = paperTitle.replace(/\s+/g, '_') + '.pdf';
      const downloadUri = FileSystem.documentDirectory + fileName;

      const downloadResult = await FileSystem.downloadAsync(paperLink, downloadUri);
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(downloadResult.uri);
      } else {
        alert('📁 Downloaded file saved, but sharing is not available.');
      }
    } catch (err) {
      console.error('❌ Error downloading file:', err);
      alert('Failed to download the file.');
    }
  };

  if (!exam || !category || !paperTitle) {
    return (
      <LinearGradient colors={['#fff9f0', '#ffeac6']} style={styles.gradient}>
        <ThemedView style={styles.centered}>
          <Ionicons name="alert-circle-outline" size={70} color="#444" style={{ marginBottom: 16 }} />
          <ThemedText style={styles.title}>📁 No paper selected</ThemedText>
          <ThemedText style={styles.subtitle}>Please go back and select a paper.</ThemedText>
        </ThemedView>
      </LinearGradient>
    );
  }

  if (!paperLink) {
    return (
      <LinearGradient colors={['#fff9f0', '#ffeac6']} style={styles.gradient}>
        <ThemedView style={styles.centered}>
          <Ionicons name="alert-circle-outline" size={70} color="#444" style={{ marginBottom: 16 }} />
          <ThemedText style={styles.title}>🚫 Paper not found</ThemedText>
          <ThemedText style={styles.subtitle}>Sorry, this paper is not available.</ThemedText>
        </ThemedView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#fff9f0', '#ffeac6']} style={styles.gradient}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <ThemedView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <ThemedText style={styles.headerTitle}>Paper Details</ThemedText>
            <View style={{ width: 24 }} />
          </View>

          {/* Paper Preview */}
          <View style={styles.imageWrapper}>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2' }}
              style={styles.imageHeader}
              imageStyle={styles.imageRounded}
            >
              <BlurView intensity={60} tint="dark" style={styles.overlay}>
                <ThemedText style={styles.placeName}>{paperTitle}</ThemedText>
                <ThemedText style={styles.placeLocation}>{category}</ThemedText>
                <ThemedText style={styles.placePrice}>Free</ThemedText>
              </BlurView>
            </ImageBackground>
          </View>

          {/* Info Card */}
          <ThemedView style={styles.card}>
            <ThemedView style={styles.row}>
              <Ionicons name="school-outline" size={22} color="#333" />
              <ThemedText style={styles.info}>Exam: {exam}</ThemedText>
            </ThemedView>

            <ThemedView style={styles.separator} />

            <ThemedView style={styles.row}>
              <Ionicons name="layers-outline" size={22} color="#333" />
              <ThemedText style={styles.info}>Category: {category}</ThemedText>
            </ThemedView>

            <ThemedView style={styles.separator} />

            <ThemedView style={styles.row}>
              <Ionicons name="document-text-outline" size={22} color="#333" />
              <ThemedText style={styles.info}>Paper: {paperTitle}</ThemedText>
            </ThemedView>
          </ThemedView>

          {/* Buttons */}
          <CustomButton
            title="View Paper"
            icon={<Ionicons name="eye" size={20} color="#fff" style={{ marginRight: 8 }} />}
            style={[styles.button, styles.viewButton]}
            onPress={() => {
              const encodedLink = encodeURIComponent(paperLink);
              router.push(`/pdf_viewer?paperLink=${encodedLink}`);
            }}
            pressedStyle={{ backgroundColor: '#444' }}
          />

          <CustomButton
            title="Download Paper"
            icon={<Ionicons name="download" size={20} color="#fff" style={{ marginRight: 8 }} />}
            style={[styles.button, styles.downloadButton]}
            onPress={handleDownload}
            pressedStyle={{ backgroundColor: '#000' }}
          />
        </ThemedView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',

  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-between',
    width: '100%',
  },
  backBtn: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    padding: 8,
    borderRadius: 10,
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#000' },
  title: { fontSize: 24, fontWeight: '700', color: '#000', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#555', marginTop: 6, textAlign: 'center' },
  info: { fontSize: 16, color: '#333', marginLeft: 10, },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  separator: {
    height: 1,
    backgroundColor: '#ececec',
    marginVertical: 6,
  },
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 14,
  },
  viewButton: {
    backgroundColor: '#ffc400',
  },
  downloadButton: {
    backgroundColor: '#000',
  },
  imageWrapper: {
    width: '100%',
    marginVertical: 20,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  imageHeader: {
    height: 260,
    justifyContent: 'flex-end',
  },
  imageRounded: {
    borderRadius: 24,
  },
  overlay: {
    backgroundColor: Platform.OS === 'android' ? 'rgba(0,0,0,0.45)' : 'transparent',
    borderRadius: 16,
    padding: 16,
  },
  placeName: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  placeLocation: {
    fontSize: 15,
    color: '#ddd',
    marginTop: 2,
  },
  placePrice: {
    fontSize: 18,
    color: '#fff',
    marginTop: 8,
    fontWeight: '600',
  },
});
