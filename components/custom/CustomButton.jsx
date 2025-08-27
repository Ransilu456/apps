import { Pressable, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress, style, pressedStyle  }) {
  return (
    <Pressable style={({ pressed }) => [
        styles.button,
        pressed && (pressedStyle || styles.buttonPressed),, style]} 
        onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F4B400', 
    paddingVertical: 12,
    paddingHorizontal: 104,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
   buttonPressed: {
    backgroundColor: '#F48400', 
    transform: [{ scale: 0.98 }], 
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
