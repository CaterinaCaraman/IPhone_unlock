document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray  = [
    {
      name: 'search',
      img: 'images/search.jpg'
    },
    {
      name: 'search',
      img: 'images/search.jpg'
    },
    {
      name: 'plus',
      img: 'images/plus.jpg'
     },
     {
      name: 'plus',
      img: 'images/plus.jpg'
     },
     { 
       name: 'ynyan',
       img: 'images/ynyan.jpg'
     },
     { 
      name: 'ynyan',
      img: 'images/ynyan.jpg'
    },
  ];

  //randomize our card array
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector.('.grid');
  const resultDisplay = document.querySelector('#result');

  
  var cadsChosen = [];
  var cadsChosenID = [];
  var cardsWon = [];

  //create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/purple.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipcard);
      grid.appendChild(card);
    }
  }
  
  //check for matches
  function checkForMatch () {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardChosen[1]) {
      alert('You found a match');
      cards[OptionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/purple.png');
      cards[optionTwoId].setAttribute('src', 'images/purple.png');
      alert('Sorry, try again.');
    }
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You find all the matches!'
    }

    }
  
  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    this.setAttribute('src', cardArray[cardID].img);
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
 }

createBoard();
