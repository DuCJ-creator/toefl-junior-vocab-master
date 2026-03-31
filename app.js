import VOCAB_DATA from './data.js';

// --- State Management ---
let currentState = {
  view: 'dashboard', // 'dashboard', 'sections', 'units', 'flashcard'
  currentModule: null,
  currentSection: null,
  currentUnit: null,
  wordIndex: 0,
  isFlipped: false,
  starredWords: JSON.parse(localStorage.getItem('vocab_stars') || '[]')
};

// --- DOM Elements ---
const mainContent = document.getElementById('main-content');
const globalSearch = document.getElementById('global-search');
const searchResults = document.getElementById('search-results');
const homeBtn = document.getElementById('home-btn');

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
  if (!query || query.length < 2) {
    searchResults.classList.add('hidden');
    return;
  }

  const results = [];
  VOCAB_DATA.forEach(module => {
    module.sections.forEach(section => {
      section.units.forEach(unit => {
        unit.words.forEach(w => {
          if (w.word.toLowerCase().includes(query.toLowerCase()) || 
              w.pos_meaning.toLowerCase().includes(query.toLowerCase())) {
            results.push({ ...w, module, section, unit });
          }
        });
      });
    });
  });

  renderSearchResults(results.slice(0, 15));
}

// --- Rendering Functions ---

function render() {
  mainContent.innerHTML = '';
  
  switch (currentState.view) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'sections':
      renderSections();
      break;
    case 'units':
      renderUnits();
      break;
    case 'flashcard':
      renderFlashcardView();
      break;
  }
}

function renderDashboard() {
  const grid = document.createElement('div');
  grid.className = 'dashboard-grid main-modules';

  VOCAB_DATA.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'category-card module-card';
    const totalWords = mod.sections.reduce((acc, s) => acc + s.units.reduce((ua, u) => ua + u.words.length, 0), 0);
    
    card.innerHTML = `
      <div class="category-tag">MODULE</div>
      <div class="category-name">${mod.title}</div>
      <div class="category-stats">${mod.sections.length} Categories • ${totalWords} Words</div>
    `;
    card.onclick = () => navigate('sections', { currentModule: mod });
    grid.appendChild(card);
  });

  mainContent.appendChild(grid);
}

function renderSections() {
  const mod = currentState.currentModule;
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="units-header">
      <button class="back-btn" id="back-to-dash">← Back to Overview</button>
      <h2>${mod.title}</h2>
      <p style="color: var(--text-muted)">Select a category to start learning</p>
    </div>
    <div class="dashboard-grid"></div>
  `;

  const grid = container.querySelector('.dashboard-grid');
  mod.sections.forEach(sec => {
    const card = document.createElement('div');
    card.className = 'category-card';
    const tag = sec.name.includes('Strategy') ? 'Strategy' : (sec.name.includes('To exceed') ? 'Exceed' : 'Base');
    card.innerHTML = `
      <div class="category-tag">${tag}</div>
      <div class="category-name">${sec.name}</div>
      <div class="category-stats">${sec.units.length} Units</div>
    `;
    card.onclick = () => navigate('units', { currentSection: sec });
    grid.appendChild(card);
  });

  mainContent.appendChild(container);
  document.getElementById('back-to-dash').onclick = () => navigate('dashboard');
}

function renderUnits() {
  const sec = currentState.currentSection;
  const container = document.createElement('div');
  container.innerHTML = `
    <div class="units-header">
      <button class="back-btn" id="back-to-secs">← Back to Categories</button>
      <h2>${sec.name}</h2>
    </div>
    <div class="units-grid"></div>
  `;

  const grid = container.querySelector('.units-grid');
  sec.units.forEach(unit => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `<h3>Unit ${unit.id}</h3><p>${unit.words.length} Words</p>`;
    card.onclick = () => navigate('flashcard', { currentUnit: unit, wordIndex: 0, isFlipped: false });
    grid.appendChild(card);
  });

  mainContent.appendChild(container);
  document.getElementById('back-to-secs').onclick = () => navigate('sections');
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
          <div class="fc-pos" style="color: var(--accent-gold); font-size: 0.9rem; margin-bottom: 1rem;">${word.pos_meaning.split(' ')[0]}</div>
          <div class="fc-sentence">${word.en || ''}</div>
          <div style="margin-top: 2rem; font-size: 0.8rem; color: var(--text-muted)">Click to reveal meaning</div>
        </div>
        <div class="flashcard-back">
          <div class="fc-meaning">${word.pos_meaning}</div>
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
  document.getElementById('back-to-units').onclick = () => navigate('units');
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
      <div class="search-result-item" data-word="${r.word}" data-sec="${r.section.name}" data-mod="${r.module.title}" data-unit="${r.unit.id}">
        <div class="word">${r.word} <span style="font-weight: 400; color: var(--text-muted); font-size: 0.8rem">(${r.pos_meaning})</span></div>
        <div class="meta">${r.module.title} • ${r.section.name} • Unit ${r.unit.id}</div>
      </div>
    `).join('');
  }
  searchResults.classList.remove('hidden');

  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.onclick = () => {
      const mod = VOCAB_DATA.find(m => m.title === item.dataset.mod);
      const sec = mod.sections.find(s => s.name === item.dataset.sec);
      const unit = sec.units.find(u => u.id == item.dataset.unit);
      const wordIdx = unit.words.findIndex(w => w.word === item.dataset.word);
      searchResults.classList.add('hidden');
      globalSearch.value = '';
      navigate('flashcard', { currentModule: mod, currentSection: sec, currentUnit: unit, wordIndex: wordIdx, isFlipped: false });
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
