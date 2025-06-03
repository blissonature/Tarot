// script.js

// Helper Functions
function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

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
    const cardEl = createCardElement(card);
    spread.appendChild(cardEl);
  });
}

function createCardElement(card) {
  const container = document.createElement('div');
  container.className = 'card';
  container.onclick = () => zoomIntoCard(card);

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const back = document.createElement('div');
  back.className = 'card-back';
  back.textContent = 'Tarot';

  const front = document.createElement('div');
  front.className = 'card-front';
  front.textContent = card.name;

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

drawBtn.onclick = drawSpread;
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

// Placeholder functions to be filled out fully
function generateGoldenDawnMinorMeanings() { return {}; }
function generateGoldenDawnMajorArcana() { return []; }
function generateGoldenDawnCourtCards() { return {}; }
