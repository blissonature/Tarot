// deck.js

function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

function generateGoldenDawnDeck() {
  const minors = generateGoldenDawnMinorMeanings();
  const majors = generateGoldenDawnMajorArcana();
  const courts = generateGoldenDawnCourtCards();

  const allCards = [];

  for (const [name, data] of Object.entries(minors)) {
    allCards.push({
      type: "Minor",
      name,
      ...data,
      digitalRoot: digitalRoot(data.index)
    });
  }

  for (const card of majors) {
    allCards.push({
      type: "Major",
      ...card,
      digitalRoot: digitalRoot(card.index)
    });
  }

  for (const card of courts) {
    allCards.push({
      type: "Court",
      ...card,
      digitalRoot: digitalRoot(card.index)
    });
  }

  return allCards;
}

function generateGoldenDawnCourtCards() {
  return [
    { name: "Princess of Wands", element: "Earth of Fire", zodiac: "Aries–Leo–Sagittarius", path: "", letter: { symbol: "Heh", transliteration: "H" }, meaning: "Creative enthusiasm, self-confidence, daring", index: 78 },
    { name: "Prince of Wands", element: "Air of Fire", zodiac: "Leo", path: "", letter: { symbol: "Vav", transliteration: "V" }, meaning: "Energy, leadership, charisma", index: 79 },
    { name: "Queen of Wands", element: "Water of Fire", zodiac: "Pisces–Aries", path: "", letter: { symbol: "Zayin", transliteration: "Z" }, meaning: "Warmth, determination, passion", index: 80 },
    { name: "King of Wands", element: "Fire of Fire", zodiac: "Cancer–Leo", path: "", letter: { symbol: "Chet", transliteration: "Ch" }, meaning: "Authority, creativity, boldness", index: 81 },

    { name: "Princess of Cups", element: "Earth of Water", zodiac: "Cancer–Scorpio–Pisces", path: "", letter: { symbol: "Tet", transliteration: "T" }, meaning: "Imagination, sensitivity, receptiveness", index: 82 },
    { name: "Prince of Cups", element: "Air of Water", zodiac: "Scorpio", path: "", letter: { symbol: "Yod", transliteration: "Y" }, meaning: "Charm, intuition, romance", index: 83 },
    { name: "Queen of Cups", element: "Water of Water", zodiac: "Gemini–Cancer", path: "", letter: { symbol: "Kaph", transliteration: "K" }, meaning: "Compassion, empathy, emotional insight", index: 84 },
    { name: "King of Cups", element: "Fire of Water", zodiac: "Aquarius–Pisces", path: "", letter: { symbol: "Lamed", transliteration: "L" }, meaning: "Emotional strength, calm authority", index: 85 },

    { name: "Princess of Swords", element: "Earth of Air", zodiac: "Gemini–Libra–Aquarius", path: "", letter: { symbol: "Mem", transliteration: "M" }, meaning: "Curiosity, cleverness, vigilance", index: 86 },
    { name: "Prince of Swords", element: "Air of Air", zodiac: "Aquarius", path: "", letter: { symbol: "Nun", transliteration: "N" }, meaning: "Logic, ambition, restlessness", index: 87 },
    { name: "Queen of Swords", element: "Water of Air", zodiac: "Virgo–Libra", path: "", letter: { symbol: "Samekh", transliteration: "S" }, meaning: "Perceptiveness, independence, honesty", index: 88 },
    { name: "King of Swords", element: "Fire of Air", zodiac: "Capricorn–Aquarius", path: "", letter: { symbol: "Ayin", transliteration: "A" }, meaning: "Discipline, authority, intellectual mastery", index: 89 },

    { name: "Princess of Disks", element: "Earth of Earth", zodiac: "Taurus–Virgo–Capricorn", path: "", letter: { symbol: "Pe", transliteration: "P" }, meaning: "Practicality, fertility, groundedness", index: 90 },
    { name: "Prince of Disks", element: "Air of Earth", zodiac: "Taurus", path: "", letter: { symbol: "Tzaddi", transliteration: "Tz" }, meaning: "Diligence, patience, dependability", index: 91 },
    { name: "Queen of Disks", element: "Water of Earth", zodiac: "Sagittarius–Capricorn", path: "", letter: { symbol: "Qoph", transliteration: "Q" }, meaning: "Nurturing, security, abundance", index: 92 },
    { name: "King of Disks", element: "Fire of Earth", zodiac: "Leo–Virgo", path: "", letter: { symbol: "Resh", transliteration: "R" }, meaning: "Stability, success, responsibility", index: 93 }
  ];
}
