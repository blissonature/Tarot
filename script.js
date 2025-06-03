// script.js

// Helper Functions
function digitalRoot(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

function generateGoldenDawnMinorMeanings() {
  return {
    "2 of Wands": "Dominion: personal power, boldness, planning",
    "3 of Wands": "Virtue: integrity, vision, enterprise",
    "4 of Wands": "Completion: harmony, celebration, fulfillment",
    "5 of Wands": "Strife: conflict, competition, tension",
    "6 of Wands": "Victory: success, recognition, triumph",
    "7 of Wands": "Valour: perseverance, standing ground",
    "8 of Wands": "Swiftness: speed, movement, communication",
    "9 of Wands": "Strength: resilience, stamina, fortitude",
    "10 of Wands": "Oppression: burden, stress, responsibility",
    "2 of Cups": "Love: partnership, attraction, unity",
    "3 of Cups": "Abundance: friendship, celebration, community",
    "4 of Cups": "Luxury: introspection, apathy, re-evaluation",
    "5 of Cups": "Disappointment: loss, regret, grief",
    "6 of Cups": "Pleasure: nostalgia, innocence, reunion",
    "7 of Cups": "Debauch: illusion, temptation, fantasy",
    "8 of Cups": "Indolence: withdrawal, journey, abandonment",
    "9 of Cups": "Happiness: satisfaction, emotional contentment",
    "10 of Cups": "Satiety: harmony, alignment, lasting joy",
    "2 of Swords": "Peace: balance, choice, calm logic",
    "3 of Swords": "Sorrow: heartbreak, separation, grief",
    "4 of Swords": "Truce: rest, recovery, contemplation",
    "5 of Swords": "Defeat: conflict, loss, betrayal",
    "6 of Swords": "Science: transition, clarity, logic",
    "7 of Swords": "Futility: strategy, evasion, cunning",
    "8 of Swords": "Interference: restriction, anxiety, overthinking",
    "9 of Swords": "Cruelty: anguish, despair, mental struggle",
    "10 of Swords": "Ruin: rock bottom, ending, collapse",
    "2 of Disks": "Change: adaptability, fluctuation, balance",
    "3 of Disks": "Works: planning, skill, teamwork",
    "4 of Disks": "Power: control, structure, boundaries",
    "5 of Disks": "Worry: insecurity, hardship, poverty",
    "6 of Disks": "Success: generosity, sharing, reward",
    "7 of Disks": "Failure: delay, reevaluation, frustration",
    "8 of Disks": "Prudence: diligence, craftsmanship, planning",
    "9 of Disks": "Gain: independence, luxury, self-sufficiency",
    "10 of Disks": "Wealth: legacy, prosperity, culmination"
  };
}

function generateGoldenDawnMajorArcana() {
  return [
    { name: "The Fool", element: "Air", zodiac: "", path: "11", letter: "Aleph (א)", meaning: "Innocence, spontaneity, new beginnings" },
    { name: "The Magician", element: "Mercury", zodiac: "", path: "12", letter: "Beth (ב)", meaning: "Skill, manifestation, concentration" },
    { name: "The High Priestess", element: "Moon", zodiac: "", path: "13", letter: "Gimel (ג)", meaning: "Mystery, intuition, sacred knowledge" },
    { name: "The Empress", element: "Venus", zodiac: "", path: "14", letter: "Daleth (ד)", meaning: "Creativity, nurturing, abundance" },
    { name: "The Emperor", element: "Fire", zodiac: "Aries", path: "15", letter: "He (ה)", meaning: "Authority, structure, fatherhood" },
    { name: "The Hierophant", element: "Earth", zodiac: "Taurus", path: "16", letter: "Vav (ו)", meaning: "Tradition, guidance, belief systems" },
    { name: "The Lovers", element: "Air", zodiac: "Gemini", path: "17", letter: "Zayin (ז)", meaning: "Union, choices, duality" },
    { name: "The Chariot", element: "Water", zodiac: "Cancer", path: "18", letter: "Chet (ח)", meaning: "Willpower, control, victory" },
    { name: "Strength", element: "Fire", zodiac: "Leo", path: "19", letter: "Tet (ט)", meaning: "Courage, endurance, inner power" },
    { name: "The Hermit", element: "Earth", zodiac: "Virgo", path: "20", letter: "Yod (י)", meaning: "Solitude, wisdom, inner search" },
    { name: "Wheel of Fortune", element: "Fire", zodiac: "Jupiter", path: "21", letter: "Kaph (כ)", meaning: "Change, cycles, destiny" },
    { name: "Justice", element: "Air", zodiac: "Libra", path: "22", letter: "Lamed (ל)", meaning: "Balance, fairness, truth" },
    { name: "The Hanged Man", element: "Water", zodiac: "Neptune", path: "23", letter: "Mem (מ)", meaning: "Surrender, perspective, suspension" },
    { name: "Death", element: "Water", zodiac: "Scorpio", path: "24", letter: "Nun (נ)", meaning: "Transformation, ending, renewal" },
    { name: "Temperance", element: "Fire", zodiac: "Sagittarius", path: "25", letter: "Samekh (ס)", meaning: "Balance, moderation, integration" },
    { name: "The Devil", element: "Earth", zodiac: "Capricorn", path: "26", letter: "Ayin (ע)", meaning: "Bondage, temptation, materialism" },
    { name: "The Tower", element: "Fire", zodiac: "Mars", path: "27", letter: "Peh (פ)", meaning: "Sudden change, upheaval, revelation" },
    { name: "The Star", element: "Air", zodiac: "Aquarius", path: "28", letter: "Tzaddi (צ)", meaning: "Hope, inspiration, serenity" },
    { name: "The Moon", element: "Water", zodiac: "Pisces", path: "29", letter: "Qoph (ק)", meaning: "Illusion, fear, subconscious" },
    { name: "The Sun", element: "Fire", zodiac: "Sun", path: "30", letter: "Resh (ר)", meaning: "Joy, vitality, enlightenment" },
    { name: "Judgement", element: "Fire", zodiac: "Pluto", path: "31", letter: "Shin (ש)", meaning: "Awakening, purpose, rebirth" },
    { name: "The World", element: "Earth", zodiac: "Saturn", path: "32", letter: "Tav (ת)", meaning: "Completion, unity, mastery" }
  ];
}

function generateGoldenDawnCourtCards() {
  return {
    "Princess of Wands": { zodiac: "Aries-Leo-Sagittarius", element: "Earth of Fire", meaning: "Enthusiastic, daring, impulsive" },
    "Knight of Wands": { zodiac: "20° Scorpio–20° Sagittarius", element: "Air of Fire", meaning: "Adventurous, energetic, changeable" },
    "Queen of Wands": { zodiac: "20° Pisces–20° Aries", element: "Water of Fire", meaning: "Confident, vibrant, determined" },
    "King of Wands": { zodiac: "20° Cancer–20° Leo", element: "Fire of Fire", meaning: "Charismatic, leader, proud" },

    "Princess of Cups": { zodiac: "Cancer-Scorpio-Pisces", element: "Earth of Water", meaning: "Gentle, artistic, dreamy" },
    "Knight of Cups": { zodiac: "20° Aquarius–20° Pisces", element: "Air of Water", meaning: "Romantic, imaginative, spiritual" },
    "Queen of Cups": { zodiac: "20° Gemini–20° Cancer", element: "Water of Water", meaning: "Empathic, nurturing, intuitive" },
    "King of Cups": { zodiac: "20° Libra–20° Scorpio", element: "Fire of Water", meaning: "Compassionate, wise, discreet" },

    "Princess of Swords": { zodiac: "Gemini-Libra-Aquarius", element: "Earth of Air", meaning: "Clever, agile, analytical" },
    "Knight of Swords": { zodiac: "20° Taurus–20° Gemini", element: "Air of Air", meaning: "Quick-witted, assertive, bold" },
    "Queen of Swords": { zodiac: "20° Virgo–20° Libra", element: "Water of Air", meaning: "Independent, perceptive, honest" },
    "King of Swords": { zodiac: "20° Capricorn–20° Aquarius", element: "Fire of Air", meaning: "Strategic, authoritative, intellectual" },

    "Princess of Disks": { zodiac: "Taurus-Virgo-Capricorn", element: "Earth of Earth", meaning: "Practical, grounded, patient" },
    "Knight of Disks": { zodiac: "20° Leo–20° Virgo", element: "Air of Earth", meaning: "Dependable, cautious, hardworking" },
    "Queen of Disks": { zodiac: "20° Sagittarius–20° Capricorn", element: "Water of Earth", meaning: "Resourceful, nurturing, secure" },
    "King of Disks": { zodiac: "20° Aries–20° Taurus", element: "Fire of Earth", meaning: "Responsible, wise, prosperous" }
  };
}
