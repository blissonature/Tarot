
function generateGoldenDawnMinorMeanings() {
  return {
    "Ace of Wands": { element: "Fire", zodiac: "", meaning: "Beginning of inspiration", index: 22 },
    "Ace of Cups": { element: "Water", zodiac: "", meaning: "Beginning of love", index: 36 },
    "Ace of Swords": { element: "Air", zodiac: "", meaning: "Beginning of reason", index: 50 },
    "Ace of Disks": { element: "Earth", zodiac: "", meaning: "Beginning of manifestation", index: 64 },
    // (rest of the minor arcana and court cards omitted here for brevity in this block)
  };
}

function generateGoldenDawnDeck() {
  const minor = generateGoldenDawnMinorMeanings();
  const major = {
    "0 The Fool": { path: "Kether–Chokmah", letter: "Aleph", hebrewSymbol: "א", pathNumber: 11, meaning: "Beginnings, innocence, spontaneity", index: 0 },
    "1 The Magician": { path: "Kether–Binah", letter: "Beth", hebrewSymbol: "ב", pathNumber: 12, meaning: "Skill, communication, initiative", index: 1 },
    // (rest of the major arcana omitted here for brevity)
  };
  return { ...major, ...minor };
}

function drawSpread(type) {
  const spreadContainer = document.getElementById("spread");
  spreadContainer.innerHTML = "";
  const deck = Object.entries(generateGoldenDawnDeck());
  const shuffled = deck.sort(() => 0.5 - Math.random());
  let selected = [];
  if (type === "three-card") selected = shuffled.slice(0, 3);
  if (type === "celtic-cross") selected = shuffled.slice(0, 10);
  if (type === "saturn-square") selected = shuffled.slice(0, 9);
  spreadContainer.className = `spread-${type}`;
  selected.forEach(([name, data], i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${name}</strong><br>
      <em>${data.meaning}</em><br>
      ${data.zodiac ? `Zodiac: ${data.zodiac}<br>` : ""}
      ${data.path ? `Path ${data.pathNumber}: ${data.path} (${data.hebrewSymbol})<br>` : ""}
      ${data.element ? `Element: ${data.element}` : ""}`;
    spreadContainer.appendChild(card);
  });
}

document.getElementById("drawSpread").addEventListener("click", () => {
  const type = document.getElementById("spreadType").value;
  drawSpread(type);
});
