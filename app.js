import VOCAB_DATA from './data.js';

// --- State Management ---
let currentState = {
  view: 'dashboard', // 'dashboard', 'units', 'flashcard', 'starred'
  currentCategory: null,
  currentUnit: null,
  currentWordIndex: 0,
  isFlipped: false,
  starredWords: JSON.parse(localStorage.getItem('vocab_stars') || '[]')
};

// --- DOM Elements ---
const mainContent = document.getElementById('main-content');
const globalSearch = document.getElementById('global-search');
const searchResults = document.getElementById('search-results');
const homeBtn = document.getElementById('home-btn');
const starredViewBtn = document.getElementById('starred-view-btn');

// --- Navigation ---
function navigate(view, params = {}) {
  currentState.view = view;
  currentState = { ...currentState, ...params };
  render();
  window.scrollTo(0, 0);
}

// --- Logic ---
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

function handleSearch(query) {
  if (!query) {
    searchResults.classList.add('hidden');
    return;
  }

  const results = [];
  VOCAB_DATA.forEach(cat => {
    cat.units.forEach(unit => {
      unit.words.forEach(w => {
        if (w.word.toLowerCase().includes(query.toLowerCase()) || 
            w.meaning.toLowerCase().includes(query.toLowerCase())) {
          results.push({ ...w, category: cat.category, unitId: unit.id });
        }
      });
    });
  });

  renderSearchResults(results.slice(0, 10));
}

// --- Rendering Functions ---

function render() {
  mainContent.innerHTML = '';
  
  switch (currentState.view) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'units':
      renderUnits(currentState.currentCategory);
      break;
    case 'flashcard':
      renderFlashcardView();
      break;
  }
}

function renderDashboard() {
  const grid = document.createElement('div');
  grid.className = 'dashboard-grid';

  VOCAB_DATA.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = `
      <div class="category-tag">${cat.category.split(':')[0]}</div>
      <div class="category-name">${cat.category}</div>
      <div class="category-stats">${cat.units.length} Units • ${cat.units.reduce((acc, u) => acc + u.words.length, 0)} Words</div>
    `;
    card.onclick = () => navigate('units', { currentCategory: cat });
    grid.appendChild(card);
  });

  mainContent.appendChild(grid);
}

function renderUnits(category) {
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="units-header">
      <button class="back-btn" id="back-to-dash">← Back to Categories</button>
      <h2>${category.category}</h2>
    </div>
    <div class="units-grid"></div>
  `;

  const grid = container.querySelector('.units-grid');
  category.units.forEach(unit => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `<h3>Unit ${unit.id}</h3><p>${unit.words.length} Words</p>`;
    card.onclick = () => navigate('flashcard', { currentUnit: unit, currentWordIndex: 0, isFlipped: false });
    grid.appendChild(card);
  });

  mainContent.appendChild(container);
  document.getElementById('back-to-dash').onclick = () => navigate('dashboard');
}

function renderFlashcardView() {
  const word = currentState.currentUnit.words[currentState.wordIndex || 0];
  const isStarred = currentState.starredWords.includes(word.word);

  const container = document.createElement('div');
  container.className = 'flashcard-container';
  container.innerHTML = `
    <div class="units-header" style="width: 100%">
      <button class="back-btn" id="back-to-units">← Back to Units</button>
      <div style="text-align: center; color: var(--text-muted)">Word ${ (currentState.wordIndex || 0) + 1} of ${currentState.currentUnit.words.length}</div>
    </div>

    <div class="flashcard-wrapper" id="flip-trigger">
      <div class="flashcard ${currentState.isFlipped ? 'flipped' : ''}">
        <div class="flashcard-front">
          <button class="star-btn ${isStarred ? 'active' : ''}" data-word="${word.word}">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="${isStarred ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </button>
          <div class="fc-word">${word.word}</div>
          <div class="fc-pos" style="color: var(--accent-gold)">${word.pos}</div>
          <div class="fc-sentence">${word.en || ''}</div>
          <div style="margin-top: 2rem; font-size: 0.8rem; color: var(--text-muted)">Click to reveal meaning</div>
        </div>
        <div class="flashcard-back">
          <div class="fc-meaning">${word.meaning}</div>
          <div class="fc-sentence" style="color: var(--text-main)">${word.zh || ''}</div>
        </div>
      </div>
    </div>

    <div class="controls">
      <button class="icon-btn" id="prev-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button class="btn-primary" id="flip-btn">Flip Card</button>
      <button class="icon-btn" id="next-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  `;

  mainContent.appendChild(container);

  // Events
  document.getElementById('back-to-units').onclick = () => navigate('units', { currentCategory: currentState.currentCategory });
  document.getElementById('flip-trigger').onclick = () => {
    currentState.isFlipped = !currentState.isFlipped;
    render();
  };
  document.getElementById('flip-btn').onclick = (e) => {
    e.stopPropagation();
    currentState.isFlipped = !currentState.isFlipped;
    render();
  };
  document.getElementById('prev-btn').onclick = () => {
    currentState.wordIndex = Math.max(0, (currentState.wordIndex || 0) - 1);
    currentState.isFlipped = false;
    render();
  };
  document.getElementById('next-btn').onclick = () => {
    currentState.wordIndex = Math.min(currentState.currentUnit.words.length - 1, (currentState.wordIndex || 0) + 1);
    currentState.isFlipped = false;
    render();
  };
  container.querySelector('.star-btn').onclick = (e) => {
    e.stopPropagation();
    toggleStar(word.word);
  };
}

function renderSearchResults(results) {
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-result-item">No matches found</div>';
  } else {
    searchResults.innerHTML = results.map(r => `
      <div class="search-result-item" data-word="${r.word}" data-cat="${r.category}" data-unit="${r.unitId}">
        <div class="word">${r.word} <span style="font-weight: 400; color: var(--text-muted)">(${r.pos})</span></div>
        <div class="meta">${r.category} • Unit ${r.unitId}</div>
      </div>
    `).join('');
  }
  searchResults.classList.remove('hidden');

  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.onclick = () => {
      const cat = VOCAB_DATA.find(c => c.category === item.dataset.cat);
      const unit = cat.units.find(u => u.id == item.dataset.unit);
      const wordIdx = unit.words.findIndex(w => w.word === item.dataset.word);
      searchResults.classList.add('hidden');
      globalSearch.value = '';
      navigate('flashcard', { currentCategory: cat, currentUnit: unit, wordIndex: wordIdx, isFlipped: false });
    };
  });
}

// --- Event Listeners ---
globalSearch.oninput = (e) => handleSearch(e.target.value);
homeBtn.onclick = () => navigate('dashboard');
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    searchResults.classList.add('hidden');
  }
});

// --- Init ---
render();
