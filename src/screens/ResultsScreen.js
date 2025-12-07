/**
 * Écran de résultats
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultsScreen({ route, navigation }) {
  const { score = 0, total = 0 } = route.params || {};
  const percentage = total ? Math.round((score / total) * 100) : 0;

  const message = percentage >= 90 ? '🎉 Excellent !'
    : percentage >= 70 ? '👍 Très bien !'
    : percentage >= 50 ? '👌 Pas mal !'
    : '💪 Continue à pratiquer !';

  return (
    <View style={styles.container}>
      <View style={styles.bgBlobA} />
      <View style={styles.bgBlobB} />

      <Text style={styles.title}>Résultats</Text>

      <View style={styles.card}>
        <Text style={styles.score}>{score} / {total}</Text>
        <Text style={styles.percent}>{percentage}%</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Bonnes</Text>
            <Text style={styles.statValue}>{score}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Restantes</Text>
            <Text style={styles.statValue}>{Math.max(total - score, 0)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.replace('Quiz', { questionCount: total || 10 })}>
          <Text style={styles.buttonText}>Rejouer le même quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGhost} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonGhostText}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f8ff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  bgBlobA: {
    position: 'absolute',
    top: -140,
    left: -100,
    width: 280,
    height: 280,
    borderRadius: 200,
    backgroundColor: '#ffe8ef',
    opacity: 0.85,
  },
  bgBlobB: {
    position: 'absolute',
    bottom: -160,
    right: -120,
    width: 320,
    height: 320,
    borderRadius: 200,
    backgroundColor: '#dff3ff',
    opacity: 0.9,
  },
  title: { fontSize: 28, fontWeight: '800', color: '#0f172a', marginBottom: 20 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#eef2ff',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 12 },
    width: '100%',
    maxWidth: 340,
    gap: 6,
  },
  score: { fontSize: 40, fontWeight: '800', color: '#ff6b6b' },
  percent: { fontSize: 32, fontWeight: '700', color: '#0f172a' },
  message: { fontSize: 16, color: '#475569', textAlign: 'center', marginTop: 6 },
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 12 },
  statBox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  statLabel: { color: '#475569', fontSize: 13, fontWeight: '700' },
  statValue: { color: '#0f172a', fontSize: 20, fontWeight: '800' },
  actions: { width: '100%', maxWidth: 340, gap: 10 },
  buttonPrimary: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#ff6b6b',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    borderWidth: 1,
    borderColor: '#ff9aa8',
  },
  buttonGhost: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '800', textAlign: 'center' },
  buttonGhostText: { color: '#0f172a', fontSize: 16, fontWeight: '800' },
});
