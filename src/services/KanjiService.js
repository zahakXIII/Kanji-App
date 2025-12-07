/**
 * Service pour gérer les données de kanjis
 * Pour l'instant on utilise des données embarquées (pas de CSV direct)
 */

class KanjiService {
  constructor() {
    this.kanjis = [];
    this.loadKanjis();
  }

  loadKanjis() {
    this.kanjis = [
      { id: 1, kanji: '亜', meaning: 'Asia, sub-', radical: '二', strokes: 7, grade: 'S' },
      { id: 2, kanji: '哀', meaning: 'pathetic, sad', radical: '口', strokes: 9, grade: 'S' },
      { id: 3, kanji: '挨', meaning: 'push open', radical: '手', strokes: 10, grade: 'S' },
      { id: 4, kanji: '愛', meaning: 'love', radical: '心', strokes: 13, grade: '4' },
      { id: 5, kanji: '悪', meaning: 'bad, evil', radical: '心', strokes: 11, grade: '3' },
      { id: 6, kanji: '握', meaning: 'grasp, grip', radical: '手', strokes: 12, grade: 'S' },
      { id: 7, kanji: '圧', meaning: 'pressure', radical: '土', strokes: 5, grade: '5' },
      { id: 8, kanji: '扱', meaning: 'handle, treat', radical: '手', strokes: 6, grade: 'S' },
    ];
  }

  getRandomKanjis(count = 10) {
    const shuffled = [...this.kanjis].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  createQuizQuestion(kanji, allKanjis) {
    const wrongAnswers = allKanjis
      .filter(k => k.id !== kanji.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(k => k.meaning);

    const answers = [kanji.meaning, ...wrongAnswers].sort(() => 0.5 - Math.random());

    return {
      kanji: kanji.kanji,
      correctAnswer: kanji.meaning,
      answers,
      radical: kanji.radical,
      strokes: kanji.strokes,
    };
  }

  generateQuiz(questionCount = 10) {
    const selectedKanjis = this.getRandomKanjis(questionCount);
    return selectedKanjis.map(k => this.createQuizQuestion(k, this.kanjis));
  }
}

export default new KanjiService();
