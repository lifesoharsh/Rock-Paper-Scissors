//playAgain.remove()
let userScore = 0
let compScore = 0

let button = document.getElementById("btn")
let player = document.querySelector('.you')
let isNameSet = false

button.onclick = () => {
    if (isNameSet === true) return
    const name = prompt("Enter your name:")
    if (name === '' || name === null) return
    player.innerHTML = name
    isNameSet = true
    player.style.fontFamily = 'cursive'
    player.style.fontWeight = 'bold'
    player.style.color = '#5CCE77'
}
let mode = 'light'
let toggle = document.getElementById('toggle')
let body = document.querySelector('body')
toggle.addEventListener("click",()=>{
    if(mode === 'light') {
        body.classList.add('dark')
        body.classList.remove('light')
        mode = "dark"
    }
    else{
        body.classList.add('light')
        body.classList.remove('dark')
        mode = "light"
    }
})

let finished = false
const compChoices = ['rock', 'paper', 'scissors']
let result = document.querySelector('.Result')
let computer = document.querySelector('.Computer')
const userChoice = document.querySelectorAll(".image-class");

let playAgain = document.createElement("button")
playAgain.id = 'playagain'
playAgain.innerText = 'Play again'


userChoice.forEach((val) => {

    val.addEventListener("click", () => {
        if (userScore === 5 && compScore != 5) {
            result.innerHTML = `You win ${name}!`
            result.classList.add('Result')
            finished = true
        }
        if (compScore === 5 && userScore != 5) {
            result.innerHTML = "Computer wins!"
            result.classList.add('Result')
            finished = true
        }

        if (finished === true){
            button.style.display = 'none'; 
            button.after(playAgain); 
            playAgain.onclick = () => {
                location.reload()
            }
            return; 
        }

        let compPick = compChoices[Math.floor(Math.random() * 3)];
        if (val.id === 'rock') {
            if (compPick === 'rock') {
                result.innerHTML = `DRAW: Computer picked Stone`
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>0</div> "
                computer.innerHTML += "<div style = 'color : #555555'>0</div> "
            }
            else if (compPick === 'scissors') {
                result.innerHTML = "YOU WIN: Computer picked Scissors"
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>1</div> "
                computer.innerHTML += "<div style = 'color : #555555'>0</div> "
                userScore++;
            }
            else {
                result.innerHTML = `YOU LOST: Computer picked Paper`
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>0</div> "
                computer.innerHTML += "<div style = 'color : #555555'>1</div> "
                compScore++;
            }

        }
        else if (val.id === 'scissors') {
            if (compPick === 'scissors') {
                result.innerHTML = "DRAW: Computer picked Scissors"
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>0</div> "
                computer.innerHTML += "<div style = 'color : #555555'>0</div> "
            }
            else if (compPick === 'paper') {
                result.innerHTML = "YOU WIN: Computer picked Paper"
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>1</div> "
                computer.innerHTML += "<div style = 'color : #555555'>0</div> "
                userScore++;
            }
            else {
                result.innerHTML = "YOU LOST: Computer picked Stone"
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>0</div> "
                computer.innerHTML += "<div style = 'color : #555555'>1</div> "
                compScore++;
            }
        }
        else {
            if (compPick === 'paper') {
                result.innerHTML = "DRAW: Computer picked Paper"
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>0</div> "
                computer.innerHTML += "<div style = 'color : #555555'>0</div> "
            }
            else if (compPick === 'rock') {
                result.innerHTML = "YOU WIN: Computer picked Stone"
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>1</div> "
                computer.innerHTML += "<div style = 'color : #555555'>0</div> "
                userScore++;
            }
            else {
                result.innerHTML = `YOU LOST: Computer picked Scissors`
                result.classList.add('Result')
                player.innerHTML += "<div style = 'color : #555555'>0</div> "
                computer.innerHTML += "<div style = 'color : #555555'>1</div> "
                compScore++;
            }
        }
    })
})



