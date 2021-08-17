document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray =[
    {
        name: 'fries',
        img: './images/fries.jpg'
    },
    {
        name: 'fries',
        img: './images/fries.jpg'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.jpg'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.jpg'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.jpg'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.jpg'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.jpg'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.jpg'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.jpg'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: './images/pizza.jpg'
    },
    {
        name: 'pizza',
        img: './images/pizza.jpg'
    }
]

    cardArray.sort(() => 0.5 - Math.random()); //this will reload the game by randomly sorting the cards

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result'); //will be used to display result on webpage
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create board
    function createBoard() {
        for (let i=0; i<cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', './images/blank.jpg');
            card.setAttribute('width', '200px');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }

    //check matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img') //gets all the images
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './images/blank.jpg');
            cards[optionTwoId].setAttribute('src', './images/blank.jpg');
            alert('You have clicked the same image!')
            //this block checks if the user clicked on the same card twice
        }
        else if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', './images/white.png')
            cards[optionTwoId].setAttribute('src', './images/white.png')
            //this block checked if the names of the chosen cards matched and replaced the matched cards with white blank image if they matched

            cards[optionOneId].removeEventListener('click', flipcard);
            cards[optionTwoId].removeEventListener('click', flipcard);
            //removes the event listener for these matched cards

            cardsWon.push(cardsChosen);
            //the cards matched are pushed to cardswon array
        }
        else{
            //if the cards don't match, they should be flipped back to play again
            cards[optionOneId].setAttribute('src', './images/blank.jpg');
            cards[optionTwoId].setAttribute('src', './images/blank.jpg');
            alert('Sorry, try again');
        }
        //even if cards match or don't match, the chosen cards array and chosen cards id array must be cleared for playing again
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
            //this block checks if all the cards are found
        }
    }

    //flip card
    function flipcard() {
        var cardId = this.getAttribute('data-id'); //this will get the ID number of card which was clicked
        cardsChosen.push(cardArray[cardId].name); //this will push the clicked card's name into the array of selected cards
        cardsChosenId.push(cardId); //this will push the id of clicked card into selected card's id array
        this.setAttribute('src', cardArray[cardId].img); //the clicked card is being added the image it should display by flipping
        //now we don't want more than two cards to be selected at a time, so let's do that:
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500) //set timeout will give buffer time. match is checked after 500ms
        }
        
    }

    createBoard();

})




