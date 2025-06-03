// script.js

function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

function generateGoldenDawnMinorMeanings() {
  return {
    "Ace of Wands": { element: "Fire", zodiac: "", meaning: "Beginning of inspiration", index: 22 },
    "Ace of Cups": { element: "Water", zodiac: "", meaning: "Beginning of love", index: 36 },
    "Ace of Swords": { element: "Air", zodiac: "", meaning: "Beginning of reason", index: 50 },
    "Ace of Disks": { element: "Earth", zodiac: "", meaning: "Beginning of manifestation", index: 64 },

    // Wands 2–10
    "2 of Wands": { element: "Fire", zodiac: "Mars in Aries", meaning: "Dominion, power", index: 23 },
    "3 of Wands": { element: "Fire", zodiac: "Sun in Aries", meaning: "Virtue, integrity", index: 24 },
    "4 of Wands": { element: "Fire", zodiac: "Venus in Aries", meaning: "Completion, celebration", index: 25 },
    "5 of Wands": { element: "Fire", zodiac: "Saturn in Leo", meaning: "Strife, challenge", index: 26 },
    "6 of Wands": { element: "Fire", zodiac: "Jupiter in Leo", meaning: "Victory, success", index: 27 },
    "7 of Wands": { element: "Fire", zodiac: "Mars in Leo", meaning: "Valor, perseverance", index: 28 },
    "8 of Wands": { element: "Fire", zodiac: "Mercury in Sagittarius", meaning: "Swiftness, speed", index: 29 },
    "9 of Wands": { element: "Fire", zodiac: "Moon in Sagittarius", meaning: "Strength, resilience", index: 30 },
    "10 of Wands": { element: "Fire", zodiac: "Saturn in Sagittarius", meaning: "Oppression, burden", index: 31 },

    // Cups 2–10
    "2 of Cups": { element: "Water", zodiac: "Venus in Cancer", meaning: "Love, harmony, attraction", index: 37 },
    "3 of Cups": { element: "Water", zodiac: "Mercury in Cancer", meaning: "Abundance, joy, celebration", index: 38 },
    "4 of Cups": { element: "Water", zodiac: "Moon in Cancer", meaning: "Luxury, dissatisfaction, introspection", index: 39 },
    "5 of Cups": { element: "Water", zodiac: "Mars in Scorpio", meaning: "Disappointment, loss", index: 40 },
    "6 of Cups": { element: "Water", zodiac: "Sun in Scorpio", meaning: "Pleasure, nostalgia", index: 41 },
    "7 of Cups": { element: "Water", zodiac: "Venus in Scorpio", meaning: "Debauch, illusion", index: 42 },
    "8 of Cups": { element: "Water", zodiac: "Saturn in Pisces", meaning: "Indolence, abandonment", index: 43 },
    "9 of Cups": { element: "Water", zodiac: "Jupiter in Pisces", meaning: "Happiness, fulfillment", index: 44 },
    "10 of Cups": { element: "Water", zodiac: "Mars in Pisces", meaning: "Satiety, emotional completion", index: 45 },

    // Court Cards
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
    "King of Disks": { element: "Fire of Earth", zodiac: "Leo–Virgo", meaning: "Stability, success, responsibility", index: 80 }
  };
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
  "Saturn Square": [
    "Restriction",
    "Karmic Pattern",
    "Suppressed Potential",
    "Challenge",
    "Saturn’s Gaze / Core Issue",
    "Discipline",
    "Foundation",
    "Manifested Result",
    "Path to Mastery"
  ],
  "Past / Present / Future": {
    "Past": "Position 1",
    "Present": "Position 2",
    "Future": "Position 3"
  },
  "Celtic Cross": {
    "1. Present Situation": "Position 1",
    "2. Challenge": "Position 2",
    "3. Past Influence": "Position 3",
    "4. Future Influence": "Position 4",
    "5. Above / Goal": "Position 5",
    "6. Below / Foundation": "Position 6",
    "7. Self-Perception": "Position 7",
    "8. Environment": "Position 8",
    "9. Hopes & Fears": "Position 9",
    "10. Outcome": "Position 10"
  }
};
