function hiddenElement(elementId){
    const hiddenEle = document.getElementById(elementId)
    hiddenEle.classList.add('hidden')
}

function showElement(elementId){
    const showEle = document.getElementById(elementId)
    showEle.classList.remove('hidden')
}
function getAlphabetElement(){
    const allAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetString = allAlphabet.split('')
    // Under code is Index value in Alphabet
    const alphabetNum = Math.random() * 25;
    const indexAlphabet = Math.round(alphabetNum)
    const mainAlphabet = alphabetString[indexAlphabet]
    return mainAlphabet
}
function getElementTextById(elementId){
    const elementText = document.getElementById(elementId);
    const textValue = elementText.innerText
    return textValue
}
function addBackgroundColor(elementId){
    const addBackground = document.getElementById(elementId);
    addBackground.classList.add('bg-orange-400')
   
}
function removeBackgroundColor(elementId){
    const removeBackground = document.getElementById(elementId)
    removeBackground.classList.remove('bg-orange-400')

}

function getElementByValue(elementId){
    const elementValue = document.getElementById(elementId);
    const elementText = elementValue.innerText;
    const elementIntValue = parseInt(elementText)
    return elementIntValue
}

function setElementByValue(elementId, elementIntValue){
    const elementValue = document.getElementById(elementId)
    elementValue.innerText = elementIntValue
}