
function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

// Full generateGoldenDawnMinorMeanings function with all cards (Aces through Kings)
function generateGoldenDawnMinorMeanings() {
  return {"Ace of Wands": { element: "Fire", zodiac: "", meaning: "Beginning of inspiration", index: 22 },
    "Ace of Cups": { element: "Water", zodiac: "", meaning: "Beginning of love", index: 36 },
    "Ace of Swords": { element: "Air", zodiac: "", meaning: "Beginning of reason", index: 50 },
    "Ace of Disks": { element: "Earth", zodiac: "", meaning: "Beginning of manifestation", index: 64 },
"2 of Swords": { element: "Air", zodiac: "Moon in Libra", meaning: "Peace, balance", index: 51 },
"3 of Swords": { element: "Air", zodiac: "Saturn in Libra", meaning: "Sorrow, heartbreak", index: 52 },
"4 of Swords": { element: "Air", zodiac: "Jupiter in Libra", meaning: "Truce, rest, recovery", index: 53 },
"5 of Swords": { element: "Air", zodiac: "Venus in Aquarius", meaning: "Defeat, conflict", index: 54 },
"6 of Swords": { element: "Air", zodiac: "Mercury in Aquarius", meaning: "Science, transition", index: 55 },
"7 of Swords": { element: "Air", zodiac: "Moon in Aquarius", meaning: "Futility, cunning", index: 56 },
"8 of Swords": { element: "Air", zodiac: "Jupiter in Gemini", meaning: "Interference, restriction", index: 57 },
"9 of Swords": { element: "Air", zodiac: "Mars in Gemini", meaning: "Cruelty, despair", index: 58 },
"10 of Swords": { element: "Air", zodiac: "Sun in Gemini", meaning: "Ruin, rock bottom", index: 59 },
"2 of Disks": { element: "Earth", zodiac: "Jupiter in Capricorn", meaning: "Change, balance", index: 65 },
"3 of Disks": { element: "Earth", zodiac: "Mars in Capricorn", meaning: "Work, building", index: 66 },
"4 of Disks": { element: "Earth", zodiac: "Sun in Capricorn", meaning: "Power, stability", index: 67 },
"5 of Disks": { element: "Earth", zodiac: "Mercury in Taurus", meaning: "Worry, hardship", index: 68 },
"6 of Disks": { element: "Earth", zodiac: "Moon in Taurus", meaning: "Success, generosity", index: 69 },
"7 of Disks": { element: "Earth", zodiac: "Saturn in Taurus", meaning: "Failure, delay", index: 70 },
"8 of Disks": { element: "Earth", zodiac: "Sun in Virgo", meaning: "Prudence, diligence", index: 71 },
"9 of Disks": { element: "Earth", zodiac: "Venus in Virgo", meaning: "Gain, refinement", index: 72 },
"10 of Disks": { element: "Earth", zodiac: "Mercury in Virgo", meaning: "Wealth, culmination", index: 73 },
    "2 of Wands": { element: "Fire", zodiac: "Mars in Aries", meaning: "Dominion, power", index: 23 },
    "3 of Wands": { element: "Fire", zodiac: "Sun in Aries", meaning: "Virtue, integrity", index: 24 },
    "4 of Wands": { element: "Fire", zodiac: "Venus in Aries", meaning: "Completion, celebration", index: 25 },
    "5 of Wands": { element: "Fire", zodiac: "Saturn in Leo", meaning: "Strife, challenge", index: 26 },
    "6 of Wands": { element: "Fire", zodiac: "Jupiter in Leo", meaning: "Victory, success", index: 27 },
    "7 of Wands": { element: "Fire", zodiac: "Mars in Leo", meaning: "Valor, perseverance", index: 28 },
    "8 of Wands": { element: "Fire", zodiac: "Mercury in Sagittarius", meaning: "Swiftness, speed", index: 29 },
    "9 of Wands": { element: "Fire", zodiac: "Moon in Sagittarius", meaning: "Strength, resilience", index: 30 },
    "10 of Wands": { element: "Fire", zodiac: "Saturn in Sagittarius", meaning: "Oppression, burden", index: 31 },
    "2 of Cups": { element: "Water", zodiac: "Venus in Cancer", meaning: "Love, harmony, attraction", index: 37 },
    "3 of Cups": { element: "Water", zodiac: "Mercury in Cancer", meaning: "Abundance, joy, celebration", index: 38 },
    "4 of Cups": { element: "Water", zodiac: "Moon in Cancer", meaning: "Luxury, dissatisfaction, introspection", index: 39 },
    "5 of Cups": { element: "Water", zodiac: "Mars in Scorpio", meaning: "Disappointment, loss", index: 40 },
    "6 of Cups": { element: "Water", zodiac: "Sun in Scorpio", meaning: "Pleasure, nostalgia", index: 41 },
    "7 of Cups": { element: "Water", zodiac: "Venus in Scorpio", meaning: "Debauch, illusion", index: 42 },
    "8 of Cups": { element: "Water", zodiac: "Saturn in Pisces", meaning: "Indolence, abandonment", index: 43 },
    "9 of Cups": { element: "Water", zodiac: "Jupiter in Pisces", meaning: "Happiness, fulfillment", index: 44 },
    "10 of Cups": { element: "Water", zodiac: "Mars in Pisces", meaning: "Satiety, emotional completion", index: 45 },
    "Princess of Wands": { element: "Earth of Fire", zodiac: "Aries–Leo–Sagittarius", meaning: "Creative enthusiasm, self-confidence, daring", index: 65 },
    "Prince of Wands": { element: "Air of Fire", zodiac: "Leo", meaning: "Energy, leadership, charisma", index: 66 },
    "Queen of Wands": { element: "Water of Fire", zodiac: "Pisces–Aries", meaning: "Warmth, determination, passion", index: 67 },
    "King of Wands": { element: "Fire of Fire", zodiac: "Cancer–Leo", meaning: "Authority, creativity, boldness", index: 68 },
    "Princess of Cups": { element: "Earth of Water", zodiac: "Cancer–Scorpio–Pisces", meaning: "Imagination, sensitivity, receptiveness", index: 69 },
    "Prince of Cups": { element: "Air of Water", zodiac: "Scorpio", meaning: "Charm, intuition, romance", index: 70 },
    "Queen of Cups": { element: "Water of Water", zodiac: "Gemini–Cancer", meaning: "Compassion, empathy, emotional insight", index: 71 },
    "King of Cups": { element: "Fire of Water", zodiac: "Aquarius–Pisces", meaning: "Emotional strength, calm authority", index: 72 },
    "Princess of Swords": { element: "Earth of Air", zodiac: "Gemini–Libra–Aquarius", meaning: "Curiosity, cleverness, vigilance", index: 73 },
    "Prince of Swords": { element: "Air of Air", zodiac: "Aquarius", meaning: "Logic, ambition, restlessness", index: 74 },
    "Queen of Swords": { element: "Water of Air", zodiac: "Virgo–Libra", meaning: "Perceptiveness, independence, honesty", index: 75 },
    "King of Swords": { element: "Fire of Air", zodiac: "Capricorn–Aquarius", meaning: "Discipline, authority, intellectual mastery", index: 76 },
    "Princess of Disks": { element: "Earth of Earth", zodiac: "Taurus–Virgo–Capricorn", meaning: "Practicality, fertility, groundedness", index: 77 },
    "Prince of Disks": { element: "Air of Earth", zodiac: "Taurus", meaning: "Diligence, patience, dependability", index: 78 },
    "Queen of Disks": { element: "Water of Earth", zodiac: "Sagittarius–Capricorn", meaning: "Nurturing, security, abundance", index: 79 },
    "King of Disks": { element: "Fire of Earth", zodiac: "Leo–Virgo", meaning: "Stability, success, responsibility", index: 80 }};
}

function generateGoldenDawnDeck() {
  const minor = generateGoldenDawnMinorMeanings();
  const major = {
    "0 The Fool": { path: "Kether–Chokmah", letter: "Aleph", hebrewSymbol: "א", pathNumber: 11, meaning: "Beginnings, innocence, spontaneity", index: 0 },
    "1 The Magician": { path: "Kether–Binah", letter: "Beth", hebrewSymbol: "ב", pathNumber: 12, meaning: "Skill, communication, initiative", index: 1 },
    "2 The High Priestess": { path: "Kether–Tiphereth", letter: "Gimel", hebrewSymbol: "ג", pathNumber: 13, meaning: "Mystery, intuition, inner voice", index: 2 },
    "3 The Empress": { path: "Chokmah–Binah", letter: "Daleth", hebrewSymbol: "ד", pathNumber: 14, meaning: "Fertility, beauty, nature", index: 3 },
    "4 The Emperor": { path: "Chokmah–Tiphereth", letter: "Heh", hebrewSymbol: "ה", pathNumber: 15, meaning: "Authority, structure, control", index: 4 },
    "5 The Hierophant": { path: "Chesed–Chokmah", letter: "Vav", hebrewSymbol: "ו", pathNumber: 16, meaning: "Tradition, spiritual guidance", index: 5 },
    "6 The Lovers": { path: "Binah–Tiphereth", letter: "Zayin", hebrewSymbol: "ז", pathNumber: 17, meaning: "Union, choices, relationships", index: 6 },
    "7 The Chariot": { path: "Binah–Geburah", letter: "Cheth", hebrewSymbol: "ח", pathNumber: 18, meaning: "Victory, determination, drive", index: 7 },
    "8 Strength": { path: "Chesed–Geburah", letter: "Teth", hebrewSymbol: "ט", pathNumber: 19, meaning: "Courage, influence, patience", index: 8 },
    "9 The Hermit": { path: "Chesed–Tiphareth", letter: "Yod", hebrewSymbol: "י", pathNumber: 20, meaning: "Solitude, wisdom, guidance", index: 9 },
    "10 Wheel of Fortune": { path: "Chesed–Netzach", letter: "Kaph", hebrewSymbol: "כ", pathNumber: 21, meaning: "Change, cycles, fate", index: 10 },
    "11 Justice": { path: "Geburah–Tiphareth", letter: "Lamed", hebrewSymbol: "ל", pathNumber: 22, meaning: "Fairness, truth, balance", index: 11 },
    "12 The Hanged Man": { path: "Geburah–Hod", letter: "Mem", hebrewSymbol: "מ", pathNumber: 23, meaning: "Sacrifice, suspension, insight", index: 12 },
    "13 Death": { path: "Tiphareth–Netzach", letter: "Nun", hebrewSymbol: "נ", pathNumber: 24, meaning: "Endings, transformation, transition", index: 13 },
    "14 Temperance": { path: "Tiphareth–Yesod", letter: "Samekh", hebrewSymbol: "ס", pathNumber: 25, meaning: "Balance, healing, purpose", index: 14 },
    "15 The Devil": { path: "Tiphareth–Hod", letter: "Ayin", hebrewSymbol: "ע", pathNumber: 26, meaning: "Bondage, materialism, temptation", index: 15 },
    "16 The Tower": { path: "Netzach–Hod", letter: "Peh", hebrewSymbol: "פ", pathNumber: 27, meaning: "Upheaval, revelation, awakening", index: 16 },
    "17 The Star": { path: "Netzach–Yesod", letter: "Tzaddi", hebrewSymbol: "צ", pathNumber: 28, meaning: "Hope, inspiration, serenity", index: 17 },
    "18 The Moon": { path: "Netzach–Malkuth", letter: "Qoph", hebrewSymbol: "ק", pathNumber: 29, meaning: "Illusion, fear, subconscious", index: 18 },
    "19 The Sun": { path: "Hod–Yesod", letter: "Resh", hebrewSymbol: "ר", pathNumber: 30, meaning: "Joy, success, vitality", index: 19 },
    "20 Judgement": { path: "Hod–Malkuth", letter: "Shin", hebrewSymbol: "ש", pathNumber: 31, meaning: "Redemption, awakening, absolution", index: 20 },
    "21 The World": { path: "Yesod–Malkuth", letter: "Tav", hebrewSymbol: "ת", pathNumber: 32, meaning: "Completion, integration, accomplishment", index: 21 }
  };
  return { ...major, ...minor };
}

function drawSpread(deck, pattern) {
  const positions = Object.entries(pattern);
  const usedIndices = new Set();

  function getUniqueCard() {
    let card;
    do {
      const keys = Object.keys(deck);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      card = { name: randomKey, ...deck[randomKey] };
    } while (usedIndices.has(card.index));
    usedIndices.add(card.index);
    return card;
  }

  return positions.map(([label]) => ({ label, card: getUniqueCard() }));
}

const spreads = {
  "Saturn Square": {
    "Restriction": "Card 1",
    "Karmic Pattern": "Card 2",
    "Suppressed Potential": "Card 3",
    "Challenge": "Card 4",
    "Saturn’s Gaze": "Card 5",
    "Discipline": "Card 6",
    "Foundation": "Card 7",
    "Manifested Result": "Card 8",
    "Path to Mastery": "Card 9"
  },
  "Past / Present / Future": {
    "Past": "Position 1",
    "Present": "Position 2",
    "Future": "Position 3"
  },
  "Celtic Cross": {
    "1. Present Situation": "Position 1",
    "2. Challenge": "Position 2",
    "3. Need to focus on": "Position 3",
    "4. Your Past / Leaving": "Position 4",
    "5. Strengths": "Position 5",
    "6. Near future": "Position 6",
    "7. Advice": "Position 7",
    "8. Environment": "Position 8",
    "9. Hopes and Fears": "Position 9",
    "10. Potential Outcome": "Position 10"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("draw-button").addEventListener("click", () => {
    const spreadType = document.getElementById("spread-select").value;
    const pattern = spreads[spreadType];
    const deck = generateGoldenDawnDeck();
    const results = drawSpread(deck, pattern);

    const output = document.getElementById("spread-output");
    output.innerHTML = "";
    output.className = spreadType.toLowerCase().replace(/ /g, "-");

    results.forEach(({ label, card }) => {
      const div = document.createElement("div");
      div.className = "card";

      const digital = digitalRoot(card.index);
      const isMajor = 'path' in card;

      div.innerHTML = `
        <strong>${label}</strong><br>
        <em>${card.name}</em><br>
        <div class="card-details" style="display:none;">
          ${card.meaning}<br>
          ${card.zodiac ? `<small>Zodiac: ${card.zodiac}</small><br>` : ''}
          <small>Index: ${card.index}</small><br>
          <small>Digital Root: ${digital}</small><br>
          ${isMajor ? `
            <small>Path: ${card.path} (#${card.pathNumber})</small><br>
            <small>Hebrew Letter: ${card.letter} (${card.hebrewSymbol})</small>
          ` : ''}
        </div>
      `;

      div.addEventListener("click", () => {
        const details = div.querySelector(".card-details");
        details.style.display = details.style.display === "block" ? "none" : "block";
      });

      output.appendChild(div);
    });
  });
});
