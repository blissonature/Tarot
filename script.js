// script.js

document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  const spreadContainer = document.getElementById("spread");
  const spreadSelect = document.getElementById("spread-select");
  const deck = generateGoldenDawnDeck();

  drawBtn.addEventListener("click", () => {
    const spreadType = spreadSelect.value;
    spreadContainer.innerHTML = "";
    spreadContainer.classList.remove("hidden");

    switch (spreadType) {
      case "singleCard":
        drawSingleCard(deck);
        break;
      case "pastPresentFuture":
        drawThreeCardSpread(deck);
        break;
      case "saturnSquare":
        drawGridSpread(deck, 3, 3);
        break;
      case "celticCross":
        drawCelticCross(deck);
        break;
    }
  });
});

function drawSingleCard(deck) {
  const card = getRandomCard(deck);
  renderCard(card, "Focus");
}

function drawThreeCardSpread(deck) {
  const labels = ["Past", "Present", "Future"];
  for (let i = 0; i < 3; i++) {
    const card = getRandomCard(deck);
    renderCard(card, labels[i]);
  }
}

function drawGridSpread(deck, rows, cols) {
  const grid = document.getElementById("spread");
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  const positions = [
    "Top Left", "Top Center", "Top Right",
    "Middle Left", "Center", "Middle Right",
    "Bottom Left", "Bottom Center", "Bottom Right"
  ];

  for (let i = 0; i < rows * cols; i++) {
    const card = getRandomCard(deck);
    renderCard(card, positions[i]);
  }
}

function drawCelticCross(deck) {
  const labels = [
    "1. Present", "2. Challenge", "3. Past", "4. Future", "5. Above", "6. Below",
    "7. Advice", "8. External Influences", "9. Hopes and Fears", "10. Outcome"
  ];
  for (let i = 0; i < labels.length; i++) {
    const card = getRandomCard(deck);
    renderCard(card, labels[i]);
  }
}

function getRandomCard(deck) {
  const index = Math.floor(Math.random() * deck.length);
  return deck.splice(index, 1)[0];
}

function renderCard(card, positionLabel) {
  const spreadContainer = document.getElementById("spread");
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const label = document.createElement("div");
  label.className = "card-label";
  label.textContent = positionLabel;

  const content = document.createElement("div");
  content.className = "card-content";
  content.innerHTML = `<strong>${card.name}</strong><br>
    Element: ${card.element}<br>
    Zodiac: ${card.zodiac || "—"}<br>
    Path: ${card.path || "—"}<br>
    Hebrew: ${card.letter?.symbol || ""} (${card.letter?.transliteration || ""})<br>
    Meaning: ${card.meaning}<br>
    Index: ${card.index}<br>
    Digital Root: ${card.digitalRoot}`;

  cardDiv.appendChild(label);
  cardDiv.appendChild(content);
  spreadContainer.appendChild(cardDiv);
}
