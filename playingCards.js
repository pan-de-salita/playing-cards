const suitsArr = ['♡', '♢', '♣', '♠'];
const ranksArr = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suitsAsWords = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranksAsWords = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
const deckArr = createDeck(suitsArr, ranksArr);
const shuffledDeck = shuffleDeck(createDeck(suitsArr, ranksArr));

function createDeck(suits, ranks) {
  const deck = suits.map(suit => ranks.map(rank => suit + rank)).flat();
}

function shuffleDeck(deck) {
  let shuffledDeck = [];

  while (shuffledDeck.length < deck.length) {
    let candidate = deck[Math.floor(Math.random() * deck.length)];

    if (!shuffledDeck.includes(candidate)) {
      shuffledDeck.push(candidate);
    }
  }

  return shuffledDeck;
}

function arrangeDeckBySuit(deck, suits) {
  const deckArrangedBySuit = Array(suits.length).fill();
  return deckArrangedBySuit.map((suit, i) => deck.filter(card => card[0] === suits[i])).flat();
};

function arrangeDeckByRank(deck, ranks) {
  const deckArrangedByRank = Array(ranks.length).fill();
  return deckArrangedByRank.map((subOrder, i) => deck.filter(card => card.slice(1) === ranks[i])).flat();
};

function dealCard(deck, suits, ranks) {
  let valueOfCardToDeal = deck.shift();
  let rankOfCardToDeal = ranksAsWords[ranks.indexOf(valueOfCardToDeal.slice(1))];
  let suitOfCardToDeal = suitsAsWords[suits.indexOf(valueOfCardToDeal[0])];

  return `${rankOfCardToDeal} of ${suitOfCardToDeal}`;
}

function dealAllCards(deck, suits, ranks) {
  while (deck.length > 0) {
    console.log(dealCard(deck, suits, ranks));
    console.log(`number of cards left: ${deck.length}`);
  }

  return;
}
