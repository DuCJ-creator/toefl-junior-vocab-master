import VOCAB_DATA from './data.js';

// --- State Management ---
let currentState = {
  view: 'dashboard', // 'dashboard', 'units', 'flashcard', 'stars'
  currentModule: null,
  currentUnit: null,
  wordIndex: 0,
  isFlipped: false,
  starredWords: JSON.parse(localStorage.getItem('vocab_stars') || '[]'),
  quiz: {
    active: false,
    words: [],
    currentIndex: 0,
    userAnswers: [],
    correctCount: 0
  }
};

// --- DOM Elements ---
const mainContent = document.getElementById('main-content');
const globalSearch = document.getElementById('global-search');
const searchResults = document.getElementById('search-results');
const homeBtn = document.getElementById('home-btn');
const challengeBtn = document.getElementById('challenge-btn');
const quizOverlay = document.getElementById('quiz-overlay');
const starsBtn = document.getElementById('stars-btn');

// --- Navigation ---
function navigate(view, params = {}) {
  currentState.view = view;
  currentState = { ...currentState, ...params };
  render();
  window.scrollTo(0, 0);
}

// --- Star Logic ---
function toggleStar(word) {
  const index = currentState.starredWords.indexOf(word);
  if (index === -1) {
    currentState.starredWords.push(word);
  } else {
    currentState.starredWords.splice(index, 1);
  }
  localStorage.setItem('vocab_stars', JSON.stringify(currentState.starredWords));
  render();
}

// --- Quiz Logic ("Challenge ME") ---
function startQuiz(count) {
  const allWords = [];
  VOCAB_DATA.forEach(m => m.units.forEach(u => u.words.forEach(w => allWords.push(w))));
  
  if (allWords.length < count) count = allWords.length;
  const shuffled = [...allWords].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  currentState.quiz = {
    active: true,
    words: selected,
    currentIndex: 0,
    userAnswers: [],
    correctCount: 0
  };

  quizOverlay.classList.remove('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quiz = currentState.quiz;
  const currentWord = quiz.words[quiz.currentIndex];
  
  // Generate Distractors (using word.meaning exclusively with safety filter)
  const allMeanings = [];
  const grammaticalPattern = /^[a-zA-Z. /(),]+$/; // Labels like n., v./adj., (pl.)

  VOCAB_DATA.forEach(m => m.units.forEach(u => u.words.forEach(w => {
    const isLabel = grammaticalPattern.test(w.meaning);
    const hasChinese = /[\u4e00-\u9fff]/.test(w.meaning);
    
    // Safety Filter: Meaning must NOT be just a label AND should ideally have Chinese
    if (w.meaning !== currentWord.meaning && w.meaning.length > 1) {
      if (!isLabel || hasChinese) {
        allMeanings.push(w.meaning);
      }
    }
  })));
  
  const distractors = [...new Set(allMeanings)].sort(() => 0.5 - Math.random()).slice(0, 3);
  const options = [...distractors, currentWord.meaning].sort(() => 0.5 - Math.random());

  quizOverlay.innerHTML = `
    <div class="quiz-card">
      <div class="category-tag">Question ${quiz.currentIndex + 1} of ${quiz.words.length}</div>
      <h2 style="font-size: 2.5rem; margin-top: 2rem;">${currentWord.word}</h2>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">What is the correct Chinese meaning?</p>
      
      <div class="quiz-options">
        ${options.map((opt, i) => `
          <button class="option-btn" data-val="${opt}">
            <span class="option-idx">${String.fromCharCode(65 + i)}</span> ${opt}
          </button>
        `).join('')}
      </div>
      
      <button class="btn-primary" style="margin-top: 2rem; background: rgba(255,255,255,0.05); color: var(--text-muted);" id="quit-quiz">Quit Quiz</button>
    </div>
  `;

  quizOverlay.querySelectorAll('.option-btn').forEach(btn => {
    btn.onclick = () => handleQuizAnswer(btn.dataset.val);
  });
  
  document.getElementById('quit-quiz').onclick = () => {
    quizOverlay.classList.add('hidden');
    currentState.quiz.active = false;
  };
}

function handleQuizAnswer(answer) {
  const quiz = currentState.quiz;
  const correct = quiz.words[quiz.currentIndex].meaning;
  
  quiz.userAnswers.push({
    word: quiz.words[quiz.currentIndex].word,
    correct: correct,
    user: answer,
    isCorrect: answer === correct
  });

  if (answer === correct) quiz.correctCount++;

  if (quiz.currentIndex < quiz.words.length - 1) {
    quiz.currentIndex++;
    renderQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  const quiz = currentState.quiz;
  quizOverlay.innerHTML = `
    <div class="quiz-card result-card">
      <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Quiz Result</h2>
      <div style="font-size: 3rem; color: var(--accent-gold); font-weight: 800; margin-bottom: 2rem;">
        ${quiz.correctCount} / ${quiz.words.length}
      </div>
      
      <div class="results-list">
        ${quiz.userAnswers.map(ans => `
          <div class="result-item ${ans.isCorrect ? 'correct' : 'wrong'}">
            <div>
              <div style="font-weight: 700;">${ans.word}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted)">Your Answer: ${ans.user}</div>
            </div>
            ${ans.isCorrect ? '' : `<div style="font-size: 0.8rem; color: #10b981">Correct: ${ans.correct}</div>`}
          </div>
        `).join('')}
      </div>
      
      <button class="btn-primary" style="margin-top: 2rem; width: 100%;" id="close-results">Finish Review</button>
    </div>
  `;
  
  document.getElementById('close-results').onclick = () => {
    quizOverlay.classList.add('hidden');
    currentState.quiz.active = false;
  };
}

// --- Search Logic ---
function handleSearch(query) {
  if (!query || query.length < 2) {
    searchResults.classList.add('hidden');
    return;
  }
  const results = [];
  VOCAB_DATA.forEach(module => {
    module.units.forEach(unit => {
      unit.words.forEach(w => {
        if (w.word.toLowerCase().includes(query.toLowerCase()) || 
            w.meaning.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...w, module, unit });
        }
      });
    });
  });
  renderSearchResults(results.slice(0, 15));
}

// --- Main Rendering ---
function render() {
  mainContent.innerHTML = '';
  switch (currentState.view) {
    case 'dashboard': renderDashboard(); break;
    case 'units': renderUnitsList(); break;
    case 'flashcard': renderFlashcardView(); break;
    case 'stars': renderStarredView(); break;
  }
}

function renderDashboard() {
  const grid = document.createElement('div');
  grid.className = 'dashboard-grid main-modules';
  VOCAB_DATA.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'category-card module-card';
    const totalWords = mod.units.reduce((acc, u) => acc + u.words.length, 0);
    card.innerHTML = `
      <div class="category-tag">MODULE</div>
      <div class="category-name">${mod.title}</div>
      <div class="category-stats">${mod.units.length} Units • ${totalWords} Words</div>
    `;
    card.onclick = () => navigate('units', { currentModule: mod });
    grid.appendChild(card);
  });
  mainContent.appendChild(grid);
}

function renderUnitsList() {
  const mod = currentState.currentModule;
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="units-header">
      <button class="back-btn" id="back-to-dash">← Back to Overview</button>
      <h2>${mod.title}</h2>
      <p style="color: var(--text-muted)">Select a unit to study</p>
    </div>
    <div class="dashboard-grid"></div>
  `;
  const grid = container.querySelector('.dashboard-grid');
  mod.units.forEach(unit => {
    const card = document.createElement('div');
    card.className = 'category-card unit-list-card';
    card.innerHTML = `
      <div class="category-tag">UNIT ${unit.id}</div>
      <div class="category-name" style="font-size: 1.1rem">${unit.name}</div>
      <div class="category-stats">${unit.words.length} Words</div>
    `;
    card.onclick = () => navigate('flashcard', { currentUnit: unit, wordIndex: 0, isFlipped: false });
    grid.appendChild(card);
  });
  mainContent.appendChild(container);
  document.getElementById('back-to-dash').onclick = () => navigate('dashboard');
}

function renderFlashcardView() {
  const unit = currentState.currentUnit;
  const word = unit.words[currentState.wordIndex || 0];
  const isStarred = currentState.starredWords.includes(word.word);

  const container = document.createElement('div');
  container.className = 'flashcard-container';
  container.innerHTML = `
    <div class="units-header" style="width: 100%">
      <button class="back-btn" id="to-units">← Back to Units</button>
      <div style="text-align: center; color: var(--text-muted)">${unit.name} • Word ${currentState.wordIndex + 1} of ${unit.words.length}</div>
    </div>
    <div class="flashcard-wrapper" id="flip-trigger">
      <div class="flashcard ${currentState.isFlipped ? 'flipped' : ''}">
        <div class="flashcard-front">
          <button class="star-btn ${isStarred ? 'active' : ''}"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></button>
          <div class="fc-word">${word.word}</div>
          <div class="fc-sentence">${word.en || ''}</div>
        </div>
        <div class="flashcard-back">
          <div class="fc-pos" style="color: var(--accent-gold); margin-bottom: 1rem; font-weight: 800;">[${word.pos}]</div>
          <div class="fc-meaning" style="font-size: 1.8rem;">${word.meaning}</div>
          <div class="fc-sentence" style="color: var(--text-main); margin-top: 1.5rem;">${word.zh || ''}</div>
        </div>
      </div>
    </div>
    <div class="controls">
      <button class="icon-btn" id="prev-btn">←</button>
      <button class="btn-primary" id="flip-btn">Flip Card</button>
      <button class="icon-btn" id="next-btn">→</button>
    </div>
  `;

  mainContent.appendChild(container);

  // Interaction Logic
  document.getElementById('to-units').onclick = () => navigate('units');
  document.getElementById('flip-trigger').onclick = () => { currentState.isFlipped = !currentState.isFlipped; render(); };
  document.getElementById('prev-btn').onclick = (e) => { e.stopPropagation(); prevWord(); };
  document.getElementById('next-btn').onclick = (e) => { e.stopPropagation(); nextWord(); };
  container.querySelector('.star-btn').onclick = (e) => { e.stopPropagation(); toggleStar(word.word); };

  // Swipe Gestures
  let touchStartX = 0;
  container.querySelector('.flashcard-wrapper').ontouchstart = e => touchStartX = e.changedTouches[0].screenX;
  container.querySelector('.flashcard-wrapper').ontouchend = e => {
    let diff = e.changedTouches[0].screenX - touchStartX;
    if (diff > 50) prevWord();
    if (diff < -50) nextWord();
  };
}

function prevWord() {
  if (currentState.wordIndex > 0) {
    currentState.wordIndex--;
    currentState.isFlipped = false;
    render();
  }
}

function nextWord() {
  if (currentState.wordIndex < currentState.currentUnit.words.length - 1) {
    currentState.wordIndex++;
    currentState.isFlipped = false;
    render();
  }
}

function renderStarredView() {
  const starred = [];
  VOCAB_DATA.forEach(m => m.units.forEach(u => u.words.forEach(w => {
    if (currentState.starredWords.includes(w.word)) starred.push(w);
  })));

  const container = document.createElement('div');
  container.innerHTML = `
    <div class="units-header">
      <button class="back-btn" onclick="navigate('dashboard')">← Back to Overview</button>
      <h2>Starred Words (${starred.length})</h2>
    </div>
    <div class="dashboard-grid">
      ${starred.map(w => `
        <div class="category-card" style="padding: 1.5rem">
          <div style="font-size: 1.2rem; font-weight: 700;">${w.word}</div>
          <div style="color: var(--accent-gold); font-size: 0.9rem">[${w.pos}] ${w.meaning}</div>
        </div>
      `).join('')}
    </div>
  `;
  mainContent.appendChild(container);
}

function renderSearchResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No matches found</div>';
  } else {
    searchResults.innerHTML = results.map(r => `
      <div class="search-result-item" onclick="viewFromSearch('${r.word}', '${r.unit.name}', '${r.module.title}')">
        <div class="word">${r.word} <span style="font-weight: 400; color: var(--text-muted); font-size: 0.8rem">(${r.meaning})</span></div>
        <div class="meta">${r.module.title} • ${r.unit.name}</div>
      </div>
    `).join('');
  }
  searchResults.classList.remove('hidden');
}

window.viewFromSearch = (word, unitName, modTitle) => {
  const mod = VOCAB_DATA.find(m => m.title === modTitle);
  const unit = mod.units.find(u => u.name === unitName);
  const wordIdx = unit.words.findIndex(w => w.word === word);
  searchResults.classList.add('hidden');
  globalSearch.value = '';
  navigate('flashcard', { currentModule: mod, currentUnit: unit, wordIndex: wordIdx, isFlipped: false });
};

// --- Init & Global Events ---
globalSearch.oninput = (e) => handleSearch(e.target.value);
homeBtn.onclick = () => navigate('dashboard');
starsBtn.onclick = () => navigate('stars');
challengeBtn.onclick = () => {
    quizOverlay.classList.remove('hidden');
    quizOverlay.innerHTML = `
       <div class="quiz-card">
         <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Challenge ME</h2>
         <p style="margin-bottom: 2rem; color: var(--text-muted)">Choose your level</p>
         <div class="quiz-options">
            <button class="option-btn" onclick="startQuiz(10)"><span class="option-idx">⚡</span> 10 Words (Sprint)</button>
            <button class="option-btn" onclick="startQuiz(30)"><span class="option-idx">🏆</span> 30 Words (Marathon)</button>
            <button class="option-btn" onclick="startQuiz(50)"><span class="option-idx">💎</span> 50 Words (Legend)</button>
         </div>
         <button class="back-btn" style="margin-top: 1.5rem" onclick="quizOverlay.classList.add('hidden')">Cancel</button>
       </div>
    `;
};

window.startQuiz = startQuiz;
window.navigate = navigate;

render();
