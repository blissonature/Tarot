// script.js

const spreadContainer = document.getElementById('spread-container');
const zoomOverlay = document.getElementById('zoom-overlay');
const zoomCard = document.getElementById('zoom-card');
const spreadSelector = document.getElementById('spread-selector');

// Spread layout meanings
const spreadMeanings = {
  'Saturn Square': [
    "Past influences", "Present situation", "Future outcome",
    "Inner obstacles", "Central theme", "Outer influences",
    "Subconscious forces", "Key lesson", "Spiritual guidance"
  ],
  '3-Card': ["Past", "Present", "Future"],
  'Celtic Cross': [
    "Present", "Challenge", "Past", "Future", "Above", "Below",
    "Advice", "External influences", "Hopes and fears", "Outcome"
  ]
};

// Spread layout styles
const spreadLayouts = {
  'Saturn Square': { columns: 3 },
  '3-Card': { columns: 3 },
  'Celtic Cross': { columns: 5, custom: true }
};

// Function to calculate digital root
function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

// Placeholder for tarotDeck array population
// Assume tarotDeck array and card data (including interpretations) are populated elsewhere

function drawSpread(spreadName) {
  const layout = spreadLayouts[spreadName];
  const meanings = spreadMeanings[spreadName];
  spreadContainer.innerHTML = '';
  spreadContainer.style.gridTemplateColumns = `repeat(${layout.columns}, 1fr)`;

  for (let i = 0; i < meanings.length; i++) {
    const cardData = tarotDeck[i];
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = meanings[i];
    card.onclick = () => flipCard(card, cardData);
    spreadContainer.appendChild(card);
  }
}

function flipCard(card, cardData) {
  card.innerText = cardData.name;
  card.onclick = () => zoomCardView(cardData);
}

function zoomCardView(cardData) {
  zoomOverlay.style.display = 'flex';
  zoomCard.innerHTML = `
    <h2>${cardData.name}</h2>
    <p><strong>Index:</strong> ${cardData.index}</p>
    <p><strong>Digital Root:</strong> ${cardData.digitalRoot}</p>
    <p><strong>Zodiac:</strong> ${cardData.zodiac}</p>
    <p><strong>Element:</strong> ${cardData.element}</p>
    <p><strong>Path:</strong> ${cardData.path}</p>
    <p><strong>Hebrew Letter:</strong> ${cardData.letter}</p>
    <p><strong>Meaning:</strong> ${cardData.meaning}</p>
  `;
}

function exitZoom() {
  zoomOverlay.style.display = 'none';
}
