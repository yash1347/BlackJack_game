let player = {
    name:"Yash jangir",
    chips: 145
}
let cards = []//array -ordered list
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+ player.chips

function getRandomCard(){
    //if 1 -> return 11 bcuz ace is worth 11 in blackjack 
    //if 11-13 ->return 10 bcuz J,Q,K is worth 10 in blackjack
    let cardNumber = Math.floor(Math.random()*13) + 1
    if(cardNumber === 1){
        return 11
    }
    else if(cardNumber===11||cardNumber===12||cardNumber===13){
        return 10
    }else{
        return cardNumber
    }   
}
function startGame(){
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    //render out only firstcard and secondcard
    cardEl.textContent = "Cards: " 
    //render out ALL the cards we have 
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] +" "
    }
    sumEl.textContent ="Sum: " + sum
    if(sum <=20){
    message ="do you want to draw a card?"
    }else if(sum ===21){
        message = "you have got a BlackJack!"
        hasBlackjack = true
    }else{
        message = "you are out of the game!"
        isAlive = false
    }


    //log it out
    messageEl.textContent = message
    
    
}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let card = getRandomCard()
        sum += card
        //push th card to the cards arrray
        cards.push(card)
        console.log(cards)
        
        renderGame()
     
    }
}
