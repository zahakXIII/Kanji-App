/**
 * Carte simple pour afficher un kanji (optionnel)
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuizCard({ kanji, radical, strokes }) {
  return (
    <View style={styles.card}>
      <Text style={styles.kanji}>{kanji}</Text>
      <Text style={styles.meta}>Radical: {radical} | Traits: {strokes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  kanji: { fontSize: 80, fontWeight: '700', color: '#111', marginBottom: 8 },
  meta: { fontSize: 14, color: '#666' },
});
