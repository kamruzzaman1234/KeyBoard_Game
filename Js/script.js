function play(){
    hiddenElement('home')
    showElement('playGame')
    setElementByValue('scoreCount', 0)
    setElementByValue('currentLife', 5)
    hiddenElement('finalArea')
    continueGame()
}

function continueGame(){
    const alphabets = getAlphabetElement()
    const currentAlphabet = document.getElementById('current-alphabet')

    currentAlphabet.innerText = alphabets
    addBackgroundColor(alphabets)
    console.log("Your current Alphabet is ", alphabets)

}

function handleKeyPress(event){
    const keyPress = event.key
    if(keyPress === 'Enter'){
        gameOver()
    }
    const currentValue =  document.getElementById('current-alphabet')
    const alphabetInner = currentValue.innerText;
    const allAlphabet = alphabetInner.toLowerCase()
    
    if(keyPress ===  allAlphabet){
        console.log("You get a point")
        const currentScore = getElementByValue('scoreCount');
        const updateScore = currentScore + 1

        setElementByValue('scoreCount', updateScore)
        removeBackgroundColor(allAlphabet)
        continueGame()
    }else{
        console.log("You are lost")
        const currentLife = getElementByValue('currentLife')
        const updateLife = currentLife - 1
        setElementByValue('currentLife', updateLife)
        if(updateLife == 0){
           gameOver()
        }
    }
}
function gameOver(){
    hiddenElement('playGame')
    showElement('finalArea')
    // const finalScore = document.getElementTextById('scoreCount')
    // setElementByValue("lastScore", finalScore)
    const finalScore = document.getElementById('scoreCount');
    const finalValue = finalScore.innerText;
    const finalIntValue = parseInt(finalValue);
    const lastValue = document.getElementById('lastScore')
    lastValue.innerText = finalIntValue
    
    const currentElement = getElementTextById('current-alphabet')
    removeBackgroundColor(currentElement)
}

document.addEventListener('keyup', handleKeyPress)