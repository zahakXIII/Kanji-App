/**
 * Écran d'accueil simple
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bgBlobA} />
      <View style={styles.bgBlobB} />

      <View style={styles.headerCard}>
        <Text style={styles.badge}>KANJI LAB</Text>
        <Text style={styles.title}>Apprends plus vite, teste-toi en continu.</Text>
        <Text style={styles.subtitle}>Des sessions rapides, un feedback clair, un suivi fluide.</Text>
        <View style={styles.tagsRow}>
          <View style={styles.tag}><Text style={styles.tagText}>+2 136 kanji</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Mode rapide</Text></View>
          <View style={styles.tag}><Text style={styles.tagText}>Révisions ciblées</Text></View>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Quiz', { questionCount: 10 })}>
          <Text style={styles.buttonTitle}>Démarrer 10 questions</Text>
          <Text style={styles.buttonSubtitle}>≈ 2 minutes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('Quiz', { questionCount: 5 })}>
          <Text style={styles.buttonTitleSecondary}>Sprint 5 questions</Text>
          <Text style={styles.buttonSubtitleSecondary}>Échauffement express</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButton} onPress={() => alert('Stats et révisions arrivent bientôt')}>
          <Text style={styles.linkText}>Stats et révisions • bientôt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f8ff', padding: 24, justifyContent: 'flex-start' },
  bgBlobA: {
    position: 'absolute',
    top: -140,
    left: -100,
    width: 260,
    height: 260,
    borderRadius: 200,
    backgroundColor: '#ffe8ef',
    opacity: 0.85,
  },
  bgBlobB: {
    position: 'absolute',
    bottom: -160,
    right: -120,
    width: 300,
    height: 300,
    borderRadius: 200,
    backgroundColor: '#dff3ff',
    opacity: 0.9,
  },
  headerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 22,
    marginTop: 12,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#eef2ff',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    gap: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffecef',
    color: '#ff6b6b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '800',
  },
  title: { fontSize: 28, fontWeight: '800', color: '#0f172a', lineHeight: 34 },
  subtitle: { fontSize: 15, color: '#475569', lineHeight: 21 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  tag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  tagText: { color: '#0f172a', fontSize: 12, fontWeight: '700' },
  actions: { gap: 12 },
  buttonPrimary: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff9aa8',
    shadowColor: '#ff6b6b',
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
  },
  buttonTitle: { color: '#fff', fontSize: 18, fontWeight: '800', marginBottom: 2 },
  buttonSubtitle: { color: '#ffecef', fontSize: 13, fontWeight: '600' },
  buttonSecondary: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  buttonTitleSecondary: { color: '#0f172a', fontSize: 17, fontWeight: '800', marginBottom: 2 },
  buttonSubtitleSecondary: { color: '#475569', fontSize: 13, fontWeight: '600' },
  linkButton: { alignItems: 'center', paddingVertical: 8 },
  linkText: { color: '#64748b', fontSize: 14, fontWeight: '600', textDecorationLine: 'underline' },
});
