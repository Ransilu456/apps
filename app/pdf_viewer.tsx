import { LinearGradient } from 'expo-linear-gradient';
import PDFViewerFromAsset from '@/components/custom/PDFViewer';
import { useLocalSearchParams } from 'expo-router';

export default function PDFViewerScreen() {
  const { paperLink } = useLocalSearchParams<{ paperLink: string }>();

  return (
    <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>
      <PDFViewerFromAsset githubpdfUrl={paperLink || ''} />
    </LinearGradient>
  );
}