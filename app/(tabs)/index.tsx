import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

import examsDataRaw from '../../data/data.json';
import CustomButton from '@/components/custom/CustomButton';

type ExamCategory = {
  name: string;
  papers: string[];
};

type Exam = {
  title: string;
  categories: ExamCategory[];
};

const examsData = examsDataRaw as Exam[];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedExam, setSelectedExam] = useState<string>(examsData[0]?.title ?? '');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPaper, setSelectedPaper] = useState<string>('');
  const router = useRouter();

  // Filter exams based on search
  const filteredExams = useMemo(() => {
    if (!searchText.trim()) return examsData;
    return examsData.filter(exam =>
      exam.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  // Get selected exam object
  const selectedExamObj = examsData.find(e => e.title === selectedExam);
  const categories = selectedExamObj?.categories ?? [];
  const papers = categories.find(c => c.name === selectedCategory)?.papers ?? [];

  return (
    <LinearGradient colors={['#F7F4EF', '#ffeac6ff']} style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ThemedView style={styles.headerContainer}>
          <Pressable onPress={() => router.push('/_sitemap')} style={styles.backButton}>
            <Ionicons name="arrow-back" size={28} color="#2E2E2E" />
          </Pressable>
        </ThemedView>

        <Ionicons name="leaf" size={100} color="rgba(255, 166, 1, 0.1)" style={styles.leafIcon} />

        <ThemedView style={styles.container}>
          <ThemedText style={styles.title}>ශ්‍රී ලංකා ත්‍රිපිටක විභාගයට අදාළ ප්‍රශ්න පත්‍ර</ThemedText>

          {/* Search Bar 
          <ThemedView style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="සෙවීම (2018-2025)......"
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Pressable onPress={() => console.log('Search:', searchText)} style={styles.searchBtn}>
              <Ionicons name="search" size={24} color="#666" />
            </Pressable>
          </ThemedView>*/}

          <ThemedView style={styles.section}>
            <ThemedText style={styles.sectionTitle}>ඔබගේ විභාගය තෝරන්න</ThemedText>

            {/* Exam Dropdown */}
            <View style={styles.dropdownWrapper}>
              <Picker
                selectedValue={selectedExam}
                onValueChange={(itemValue: string) => {
                  setSelectedExam(itemValue);
                  setSelectedCategory('');
                  setSelectedPaper('');
                }}
                style={styles.dropdown}
              >
                {filteredExams.map((exam, index) => (
                  <Picker.Item key={index} label={exam.title} value={exam.title} />
                ))}
              </Picker>
            </View>

            {/* Category Dropdown */}
              <View style={styles.dropdownWrapper}>
                <Picker
                  selectedValue={selectedCategory}
                  onValueChange={(itemValue: string) => {
                    setSelectedCategory(itemValue);
                    setSelectedPaper('');
                  }}
                  style={styles.dropdown}
                >
                  <Picker.Item label="Select Category..." value="" />
                  {categories.map((cat, index) => (
                    <Picker.Item key={index} label={cat.name} value={cat.name} />
                  ))}
                </Picker>
              </View>
        
            {/* Paper Dropdown */}
              <View style={styles.dropdownWrapper}>
                <Picker
                  selectedValue={selectedPaper}
                  onValueChange={(itemValue: string) => setSelectedPaper(itemValue)}
                  style={styles.dropdown}
                >
                  <Picker.Item label="Select Paper..." value="" />
                  {papers.map((paper, index) => (
                    <Picker.Item key={index} label={paper} value={paper} />
                  ))}
                </Picker>
              </View>
       

            {/* Selected Info */}
            <ThemedText style={{ marginTop: 20, textAlign: 'center', fontSize: 16 }}>
              {selectedExam && selectedCategory && selectedPaper
                ? `ඔබ තෝරාගත්තේ: ${selectedExam} → ${selectedCategory} → ${selectedPaper}`
                : "කරුණාකර සියල්ල තෝරන්න"}
            </ThemedText>

            {/* Next Button */}
            <CustomButton
              title="Next"
              style={{ marginTop: 20 }}
              pressedStyle={{ backgroundColor: '#000000' }}
              onPress={() => {
                if (selectedExam && selectedCategory && selectedPaper) {
                  router.push({
                    pathname: '/paper',
                    params: {
                      exam: selectedExam,
                      category: selectedCategory,
                      paper: selectedPaper,
                    },
                  });
                } else {
                  alert('කරුණාකර විභාගය, කාණ්ඩය, සහ පත්‍රය තෝරන්න.');
                }
              }}
            />
          </ThemedView>

        </ThemedView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 0,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignSelf: 'flex-start',
  },
  leafIcon: {
    position: 'absolute',
    top: -20,
    right: -20,
    zIndex: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F2937',
    lineHeight: 42,
  },
  section: {
    marginTop: 80,
    backgroundColor: 'transparent',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1F2937',
    borderRadius: 12,
  },
  searchBtn: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 10,
    textAlign: 'center',
  },
  dropdownWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: 10,
  },
  dropdown: {
    height: 60,
    color: '#1F2937',
  },
});
