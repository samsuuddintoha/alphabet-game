function hideElementById(id){
  const element = document.getElementById(id)
  element.classList.add('hidden')
}

function showElementById(id){
  const element = document.getElementById(id)
  element.classList.remove('hidden')
}

function setKeyboardBackgroundColorById(id){
  const element = document.getElementById(id)
  element.classList.add('bg-orange-400')
}

function removeKeyboardBackgroundColorById(id){
  const element = document.getElementById(id)
  element.classList.remove('bg-orange-400')
}

function getElementIntValueById(id){
  const element = document.getElementById(id)
  const textElement = element.innerText
  const value = parseInt(textElement)
  return value
}

function setElementValueById(id, value){
  const element = document.getElementById(id)
  element.innerText = value
}

function addClassById(id, className){
  const element = document.getElementById(id)
  element.classList.add(className)
}
function removeClassById(id, className){
  const element = document.getElementById(id)
  element.classList.remove(className)
}

function getARandomAlphabet(){
  // Create an Alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz"
  const alphabets = alphabetString.split('')

  // Create a random number between 0 - 25
  const randomIndex = Math.round(Math.random() * 25)
  const alphabet = alphabets[randomIndex];
  
  return alphabet
}