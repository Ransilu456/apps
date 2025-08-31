import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PDFViewerFromAsset({ githubpdfUrl }: { githubpdfUrl: string }) {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const googleDocsUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(githubpdfUrl)}`;

  if (hasError) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>⚠️ PDF failed to load.</Text>
        <Text style={styles.fallbackHint}>
          Please check your internet connection or try again later.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0037ffff" />
          <Text style={styles.loadingText}>Loading PDF...</Text>
        </View>
      )}
      <WebView
        source={{ uri: googleDocsUrl }}
        onError={() => setHasError(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.webview}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ec',
  },
  webview: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#fff',
  },
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff7ec',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 20,
    color: '#000000ff',
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fffbe6',
  },
  fallbackText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#cc0000',
    marginBottom: 10,
  },
  fallbackHint: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});
