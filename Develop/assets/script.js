// Assignment code here

//Get random lower case function

function getRandomLower () {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  return lower[Math.floor(Math.random() * lower.length)];
}
console.log(getRandomLower());

//Get random upper case function

function getRandomUpper () {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)];
}
console.log(getRandomUpper());

//Get random numeric value function

function getRandomNumber () {
  const number = '0123456789'
  return number[Math.floor(Math.random() * number.length)];
}
console.log(getRandomNumber());

//Get random symbols function

function getRandomSymbol () {
  const symbols = '!@#$%^&*~<>;/';
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}
console.log(getRandomSymbol());



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
