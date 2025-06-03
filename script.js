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
    const cardEl = createCardElement(card);
    spread.appendChild(cardEl);
  });

  // Add interpretation summary
  const summary = generateInterpretiveSummary(cards);
  const summaryEl = document.createElement('div');
  summaryEl.style.margin = '20px';
  summaryEl.style.padding = '20px';
  summaryEl.style.background = '#333';
  summaryEl.style.borderRadius = '10px';
  summaryEl.innerHTML = `<h3>Interpretive Summary</h3><p>${summary}</p>`;
  spread.appendChild(summaryEl);
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
console.log("Draw button ready");
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
function generateGoldenDawnMinorMeanings() {
  return {
    "2 of Wands": "Dominion: personal power, boldness, planning",
    "3 of Wands": "Virtue: integrity, vision, enterprise",
    "4 of Wands": "Completion: harmony, celebration, fulfillment",
    "5 of Wands": "Strife: competition, challenge, tension",
    "6 of Wands": "Victory: success, recognition, triumph",
    "7 of Wands": "Valour: perseverance, courage under fire",
    "8 of Wands": "Swiftness: speed, communication, movement",
    "9 of Wands": "Strength: resilience, persistence, test of faith",
    "10 of Wands": "Oppression: burden, stress, overwhelming duty",

    "2 of Cups": "Love: attraction, partnership, emotional harmony",
    "3 of Cups": "Abundance: friendship, celebration, community",
    "4 of Cups": "Luxury: apathy, discontent, contemplation",
    "5 of Cups": "Disappointment: loss, grief, regret",
    "6 of Cups": "Pleasure: nostalgia, innocence, reunion",
    "7 of Cups": "Debauch: illusion, temptation, scattered energy",
    "8 of Cups": "Indolence: withdrawal, disappointment, letting go",
    "9 of Cups": "Happiness: contentment, satisfaction, wish fulfillment",
    "10 of Cups": "Satiety: bliss, family harmony, lasting happiness",

    "2 of Swords": "Peace: balance, stalemate, difficult choice",
    "3 of Swords": "Sorrow: heartbreak, separation, betrayal",
    "4 of Swords": "Truce: rest, recovery, contemplation",
    "5 of Swords": "Defeat: conflict, loss, dishonor",
    "6 of Swords": "Science: transition, clarity, travel",
    "7 of Swords": "Futility: deception, strategy, hidden motives",
    "8 of Swords": "Interference: restriction, confusion, powerlessness",
    "9 of Swords": "Cruelty: anxiety, nightmares, despair",
    "10 of Swords": "Ruin: endings, failure, betrayal",

    "2 of Disks": "Change: adaptability, balance, cycles",
    "3 of Disks": "Work: collaboration, craftsmanship, building",
    "4 of Disks": "Power: control, stability, security",
    "5 of Disks": "Worry: hardship, financial stress, insecurity",
    "6 of Disks": "Success: generosity, giving and receiving, prosperity",
    "7 of Disks": "Failure: delay, lack of reward, reevaluation",
    "8 of Disks": "Prudence: diligence, detail, sustained effort",
    "9 of Disks": "Gain: independence, luxury, self-sufficiency",
    "10 of Disks": "Wealth: legacy, inheritance, long-term success"
  };
}
function generateGoldenDawnMajorArcana() {
  return [
    { name: "The Fool", element: "Air", zodiac: "", path: "11", letter: "Aleph (א)", meaning: "Innocence, new beginnings, spontaneity" },
    { name: "The Magician", element: "Mercury", zodiac: "", path: "12", letter: "Beth (ב)", meaning: "Willpower, manifestation, skill" },
    { name: "The High Priestess", element: "Water", zodiac: "", path: "13", letter: "Gimel (ג)", meaning: "Mystery, intuition, inner wisdom" },
    { name: "The Empress", element: "Earth", zodiac: "", path: "14", letter: "Daleth (ד)", meaning: "Fertility, creation, abundance" },
    { name: "The Emperor", element: "Fire", zodiac: "Aries", path: "15", letter: "Heh (ה)", meaning: "Structure, authority, father figure" },
    { name: "The Hierophant", element: "Earth", zodiac: "Taurus", path: "16", letter: "Vav (ו)", meaning: "Tradition, spiritual guidance" },
    { name: "The Lovers", element: "Air", zodiac: "Gemini", path: "17", letter: "Zayin (ז)", meaning: "Union, choice, alignment" },
    { name: "The Chariot", element: "Water", zodiac: "Cancer", path: "18", letter: "Cheth (ח)", meaning: "Victory, will, control" },
    { name: "Strength", element: "Fire", zodiac: "Leo", path: "19", letter: "Teth (ט)", meaning: "Courage, inner strength, patience" },
    { name: "The Hermit", element: "Earth", zodiac: "Virgo", path: "20", letter: "Yod (י)", meaning: "Solitude, wisdom, introspection" },
    { name: "Wheel of Fortune", element: "Fire", zodiac: "Jupiter", path: "21", letter: "Kaph (כ)", meaning: "Change, destiny, cycles" },
    { name: "Justice", element: "Air", zodiac: "Libra", path: "22", letter: "Lamed (ל)", meaning: "Balance, fairness, truth" },
    { name: "The Hanged Man", element: "Water", zodiac: "", path: "23", letter: "Mem (מ)", meaning: "Sacrifice, letting go, new perspective" },
    { name: "Death", element: "Water", zodiac: "Scorpio", path: "24", letter: "Nun (נ)", meaning: "Endings, transformation, rebirth" },
    { name: "Temperance", element: "Fire", zodiac: "Sagittarius", path: "25", letter: "Samekh (ס)", meaning: "Harmony, moderation, synergy" },
    { name: "The Devil", element: "Earth", zodiac: "Capricorn", path: "26", letter: "Ayin (ע)", meaning: "Bondage, materialism, shadow self" },
    { name: "The Tower", element: "Fire", zodiac: "Mars", path: "27", letter: "Peh (פ)", meaning: "Destruction, sudden change, awakening" },
    { name: "The Star", element: "Air", zodiac: "Aquarius", path: "28", letter: "Tzaddi (צ)", meaning: "Hope, inspiration, spiritual clarity" },
    { name: "The Moon", element: "Water", zodiac: "Pisces", path: "29", letter: "Qoph (ק)", meaning: "Illusion, dreams, subconscious" },
    { name: "The Sun", element: "Fire", zodiac: "Sun", path: "30", letter: "Resh (ר)", meaning: "Joy, success, vitality" },
    { name: "Judgement", element: "Fire", zodiac: "", path: "31", letter: "Shin (ש)", meaning: "Rebirth, inner calling, absolution" },
    { name: "The World", element: "Earth", zodiac: "Saturn", path: "32", letter: "Tav (ת)", meaning: "Completion, fulfillment, unity" }
  ];
}
function generateGoldenDawnCourtCards() {
  return {
    // Wands
    "Princess of Wands": { zodiac: "Aries-Leo-Sagittarius", element: "Earth of Fire", meaning: "Enthusiastic, daring, impulsive" },
    "Knight of Wands": { zodiac: "20° Scorpio–20° Sagittarius", element: "Air of Fire", meaning: "Adventurous, energetic, changeable" },
    "Queen of Wands": { zodiac: "20° Pisces–20° Aries", element: "Water of Fire", meaning: "Confident, vibrant, determined" },
    "King of Wands": { zodiac: "20° Cancer–20° Leo", element: "Fire of Fire", meaning: "Charismatic, leader, proud" },

    // Cups
    "Princess of Cups": { zodiac: "Cancer-Scorpio-Pisces", element: "Earth of Water", meaning: "Dreamy, imaginative, gentle" },
    "Knight of Cups": { zodiac: "20° Aquarius–20° Pisces", element: "Air of Water", meaning: "Romantic, idealistic, refined" },
    "Queen of Cups": { zodiac: "20° Gemini–20° Cancer", element: "Water of Water", meaning: "Empathic, intuitive, nurturing" },
    "King of Cups": { zodiac: "20° Libra–20° Scorpio", element: "Fire of Water", meaning: "Diplomatic, calm, emotionally deep" },

    // Swords
    "Princess of Swords": { zodiac: "Gemini-Libra-Aquarius", element: "Earth of Air", meaning: "Inquisitive, quick-thinking, logical" },
    "Knight of Swords": { zodiac: "20° Taurus–20° Gemini", element: "Air of Air", meaning: "Ambitious, articulate, hasty" },
    "Queen of Swords": { zodiac: "20° Virgo–20° Libra", element: "Water of Air", meaning: "Perceptive, independent, discerning" },
    "King of Swords": { zodiac: "20° Capricorn–20° Aquarius", element: "Fire of Air", meaning: "Strategic, intellectual, authoritative" },

    // Disks
    "Princess of Disks": { zodiac: "Taurus-Virgo-Capricorn", element: "Earth of Earth", meaning: "Practical, nurturing, responsible" },
    "Knight of Disks": { zodiac: "20° Leo–20° Virgo", element: "Air of Earth", meaning: "Reliable, methodical, hardworking" },
    "Queen of Disks": { zodiac: "20° Sagittarius–20° Capricorn", element: "Water of Earth", meaning: "Grounded, resourceful, caring" },
    "King of Disks": { zodiac: "20° Aries–20° Taurus", element: "Fire of Earth", meaning: "Stable, prosperous, protective" }
  };
}
