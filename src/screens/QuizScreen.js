/**
 * Écran de quiz kanji
 */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import KanjiService from '../services/KanjiService';

export default function QuizScreen({ route, navigation }) {
  const { questionCount = 10 } = route.params || {};
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const quiz = KanjiService.generateQuiz(questionCount);
    setQuestions(quiz);
  }, [questionCount]);

  if (questions.length === 0) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.loaderText}>Chargement du quiz...</Text>
      </View>
    );
  }

  const current = questions[index];
  const progress = ((index + 1) / questions.length) * 100;
  const nextLabel = index < questions.length - 1 ? 'Question suivante' : 'Voir les résultats';

  const handleAnswer = (answer) => {
    if (showResult) return;
    setSelected(answer);
    setShowResult(true);
    if (answer === current.correctAnswer) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      navigation.replace('Results', { score, total: questions.length });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.bgBlobA} />
      <View style={styles.bgBlobB} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.progressRow}>
            <Text style={styles.progressLabel}>Question {index + 1} / {questions.length}</Text>
            <Text style={styles.score}>Score {score}</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.kanji}>{current.kanji}</Text>
          <View style={styles.metaRow}>
            <View style={styles.chip}><Text style={styles.chipText}>Radical {current.radical}</Text></View>
            <View style={styles.chip}><Text style={styles.chipText}>{current.strokes} traits</Text></View>
          </View>
          <Text style={styles.ask}>Choisis la bonne signification</Text>
        </View>

        <View style={styles.answers}>
          {current.answers.map((answer, idx) => {
            const isCorrect = answer === current.correctAnswer;
            const isSelected = answer === selected;
            const isWrongSelected = showResult && isSelected && !isCorrect;
            const letter = String.fromCharCode(65 + idx);
            return (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.answer,
                  isSelected && !showResult && styles.answerActive,
                  showResult && isCorrect && styles.answerCorrect,
                  isWrongSelected && styles.answerWrong,
                ]}
                onPress={() => handleAnswer(answer)}
                disabled={showResult}
              >
                <Text style={styles.answerLetter}>{letter}</Text>
                <Text style={styles.answerText}>{answer}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {showResult && (
          <View style={styles.footer}>
            <Text style={[styles.result, selected === current.correctAnswer ? styles.ok : styles.ko]}>
              {selected === current.correctAnswer ? '✓ Bonne réponse' : '✗ Réponse incorrecte'}
            </Text>
            <Text style={styles.helper}>Touchez « {nextLabel} » pour continuer</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.nextBtn, !showResult && styles.nextBtnDisabled]}
          onPress={handleNext}
          disabled={!showResult}
        >
          <Text style={styles.nextText}>{nextLabel}</Text>
        </TouchableOpacity>
        {!showResult && <Text style={styles.helper}>Choisis une réponse pour débloquer la suite</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f8ff' },
  scrollContent: { padding: 20, paddingBottom: 140 },
  loaderContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7f8ff' },
  loaderText: { color: '#0f172a', fontSize: 16, fontWeight: '600' },
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
  header: { marginBottom: 18 },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: { fontSize: 15, color: '#475569', fontWeight: '700' },
  score: { fontSize: 15, fontWeight: '800', color: '#0f172a' },
  progressBarBg: { height: 10, backgroundColor: '#e2e8f0', borderRadius: 999, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: '#ff6b6b', borderRadius: 999 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#eef2ff',
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 12 },
  },
  kanji: { fontSize: 96, fontWeight: '800', color: '#0f172a', marginBottom: 10 },
  metaRow: { flexDirection: 'row', gap: 8 },
  chip: { backgroundColor: '#f1f5f9', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 },
  chipText: { color: '#0f172a', fontSize: 13, fontWeight: '700' },
  ask: { fontSize: 16, fontWeight: '700', textAlign: 'center', marginTop: 12, color: '#475569' },
  answers: { width: '100%', gap: 10 },
  answer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#cbd5e1',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
  },
  answerActive: { borderColor: '#ff6b6b', backgroundColor: '#fff5f7' },
  answerLetter: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#f8fafc',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#0f172a',
    fontWeight: '800',
  },
  answerText: { fontSize: 16, color: '#0f172a', flexShrink: 1 },
  answerCorrect: { backgroundColor: '#ecfdf3', borderColor: '#22c55e' },
  answerWrong: { backgroundColor: '#fff1f2', borderColor: '#ef4444' },
  footer: { alignItems: 'center', marginTop: 14, gap: 6 },
  result: { fontSize: 18, fontWeight: '800' },
  ok: { color: '#16a34a' },
  ko: { color: '#dc2626' },
  helper: { color: '#475569', fontSize: 13 },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.94)',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    gap: 6,
  },
  nextBtn: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#ff6b6b',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  nextBtnDisabled: { backgroundColor: '#e2e8f0', borderWidth: 1, borderColor: '#cbd5e1', shadowOpacity: 0 },
  nextText: { color: '#ffffff', fontSize: 16, fontWeight: '800' },
});
