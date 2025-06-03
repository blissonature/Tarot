// script.js

// Helper Functions
function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

// Position Labels for Spreads
const spreadLabels = [
  "Mind", "Heart", "Body",
  "Past", "Present", "Future",
  "Shadow", "Lesson", "Gift"
];

// Card Data Sources
const suits = ["Wands", "Cups", "Swords", "Disks"];
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Princess", "Knight", "Queen", "King"];
const elements = { Wands: "Fire", Cups: "Water", Swords: "Air", Disks: "Earth" };

const decans = {
  // (trimmed for brevity) Full list must be filled in
};

const minorMeanings = generateGoldenDawnMinorMeanings();
const majorArcana = generateGoldenDawnMajorArcana();
const courtDetails = generateGoldenDawnCourtCards();

const tarotDeck = Array.from({ length: 78 }, (_, i) => {
  let name = '', suit = '', type = '', element = '', zodiac = '', path = '', letter = '', meaning = '';

  if (i < 22) {
    const card = majorArcana[i];
    ({ name, element, zodiac, path, letter, meaning } = card);
    type = 'Major';
  } else {
    const minorIndex = i - 22;
    suit = suits[Math.floor(minorIndex / 14)];
    const rankIndex = minorIndex % 14;
    name = `${ranks[rankIndex]} of ${suit}`;
    type = 'Minor';
    element = elements[suit];

    if (rankIndex >= 10) {
      const title = name;
      zodiac = courtDetails[title]?.zodiac || '';
      element = courtDetails[title]?.element || element;
      meaning = courtDetails[title]?.meaning || '';
    } else {
      zodiac = decans[name] || '';
      meaning = minorMeanings[name] || '';
    }
  }

  return { index: i, name, type, suit, element, zodiac, path, letter, digitalRoot: digitalRoot(i), meaning, revealed: false };
});

// UI Logic

function generateInterpretiveSummary(cards) {
  const themes = cards.map(card => card.meaning.split(':')[0].trim());
  const counted = themes.reduce((acc, theme) => {
    acc[theme] = (acc[theme] || 0) + 1;
    return acc;
  }, {});

  const sortedThemes = Object.entries(counted).sort((a, b) => b[1] - a[1]);
  const themeAdvice = {
    "Victory": "You are in alignment with success—lean into confidence and lead boldly.",
    "Strife": "Conflict is surfacing; confront it with clarity and compassion.",
    "Love": "Relationship energy is heightened—nurture your connections.",
    "Work": "Focus and effort will pay off—don't hesitate to commit.",
    "Change": "You're in a moment of transition—adapt and stay grounded.",
    "Sorrow": "Allow grief its voice, but remember healing follows.",
    "Pleasure": "Joy is available—savor the beauty around you.",
    "Oppression": "You're carrying too much. Lighten the load.",
    "Virtue": "Act with integrity—your moral compass is your power.",
    "Power": "You hold a position of strength—use it wisely."
  };

  const details = sortedThemes.map(([theme, count]) => {
    const line = `• <strong>${theme}</strong> appears ${count} time${count > 1 ? 's' : ''}`;
    const advice = themeAdvice[theme] ? `<br><em>${themeAdvice[theme]}</em>` : '';
    return `${line}${advice}`;
  }).join('<br><br>');

  const majors = cards.filter(c => c.type === 'Major').length;
  const majorComment = majors >= 5
    ? `<p><strong>Note:</strong> This spread is dominated by Major Arcana cards, suggesting a fated or spiritually significant reading.</p>
       <p><strong>Archetypal Insight:</strong> You are in the midst of a deeper mythic story—expect transformations that affect your identity, purpose, or spiritual path.</p>`
    : '';

  const elementCounts = cards.reduce((acc, card) => {
    if (card.element) acc[card.element] = (acc[card.element] || 0) + 1;
    return acc;
  }, {});
  const sortedElements = Object.entries(elementCounts).sort((a, b) => b[1] - a[1]);
  const elementComment = sortedElements[0] && sortedElements[0][1] >= 4
    ? `<p><strong>Elemental Emphasis:</strong> ${sortedElements[0][0]} energy is dominant—this may shape the tone of events.</p>`
    : '';

  const courtCards = cards.filter(c => c.name.includes("Princess") || c.name.includes("Knight") || c.name.includes("Queen") || c.name.includes("King"));
  const courtComment = courtCards.length >= 4
    ? `<p><strong>Note:</strong> Multiple court cards suggest that interpersonal dynamics are key to this reading.</p>`
    : '';

  return `The spread reflects the following thematic influences:<br>${details}${majorComment}${elementComment}${courtComment}`;
}

const spread = document.getElementById('spread');
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomCard = document.getElementById('zoom-card');
const drawBtn = document.getElementById('draw-btn');
const searchBtn = document.getElementById('search-btn');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('searchInput');
const filters = document.getElementById('filters');
const cardList = document.getElementById('card-list');

function drawSpread() {
  spread.innerHTML = '';
  spread.classList.remove('hidden');
  const cards = tarotDeck.sort(() => 0.5 - Math.random()).slice(0, 9);
  cards.forEach((card, idx) => {
    const label = spreadLabels[idx] || `Position ${idx + 1}`;
    const cardEl = createCardElement(card, label);
    spread.appendChild(cardEl);
  });

  const summary = generateInterpretiveSummary(cards);
  const summaryEl = document.createElement('div');
  summaryEl.style.margin = '20px';
  summaryEl.style.padding = '20px';
  summaryEl.style.background = '#333';
  summaryEl.style.borderRadius = '10px';
  summaryEl.innerHTML = `<h3>Interpretive Summary</h3><p>${summary}</p>`;
  spread.appendChild(summaryEl);
}

function createCardElement(card, label) {
  const container = document.createElement('div');
  container.className = 'card';
  container.onclick = () => {
    inner.classList.toggle('flipped');
    setTimeout(() => zoomIntoCard(card), 600);
  };

  const inner = document.createElement('div');
  inner.className = 'card-inner';
  inner.style.transition = 'transform 0.6s';
  inner.style.transformStyle = 'preserve-3d';
  inner.style.position = 'relative';

  const back = document.createElement('div');
  back.className = 'card-back';
  back.innerHTML = `<div class="card-label">${label}</div><div>Tarot</div>`;

  const front = document.createElement('div');
  front.className = 'card-front';
  front.innerHTML = `<div class="card-label">${label}</div><div>${card.name}</div>`;

  inner.appendChild(back);
  inner.appendChild(front);
  container.appendChild(inner);
  return container;
}

function zoomIntoCard(card) {
  zoomOverlay.classList.remove('hidden');
  zoomCard.innerHTML = `
    <h2>${card.name}</h2>
    <p><strong>Type:</strong> ${card.type}</p>
    <p><strong>Suit:</strong> ${card.suit}</p>
    <p><strong>Element:</strong> ${card.element}</p>
    <p><strong>Zodiac:</strong> ${card.zodiac}</p>
    <p><strong>Meaning:</strong> ${card.meaning}</p>
    <p><strong>Digital Root:</strong> ${card.digitalRoot}</p>
  `;
}

function exitZoom() {
  zoomOverlay.classList.add('hidden');
  zoomCard.innerHTML = '';
}

drawBtn.addEventListener('click', () => {
  requestAnimationFrame(drawSpread);
});

searchBtn.onclick = () => {
  searchContainer.classList.toggle('hidden');
  cardList.innerHTML = '';
  tarotDeck.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.textContent = card.name;
    cardDiv.className = 'card';
    cardDiv.onclick = () => zoomIntoCard(card);
    cardList.appendChild(cardDiv);
  });
};