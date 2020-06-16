// Assignment code here

// Arrays
const lower = ['abcdefghijklmnopqrstuvwxyz'];
const upper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const number = ['0123456789'];
const symbols = ['!@#$%^&*~<>;/'];

var all = ['lower' + 'upper' + 'number' + 'symbols'];

var generatedPassword = [];

// Random functions (lower, upper, number & symbol)

//Get random lower case function

function getRandomLower () {
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  var pushLower = lower[Math.floor(Math.random() * lower.length)];
  generatedPassword.push(pushLower)
}

//Get random upper case function

function getRandomUpper () {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var pushUpper = upper[Math.floor(Math.random() * upper.length)];
  generatedPassword.push(pushUpper)
}

//Get random numeric value function

function getRandomNumber () {
  const number = '0123456789'
  var pushNumber = number[Math.floor(Math.random() * number.length)];
  generatedPassword.push(pushNumber)
}

//Get random symbols function

function getRandomSymbols () {
  const symbols = '!@#$%^&*~<>;/';
  var pushSymbols = symbols[Math.floor(Math.random() * symbols.length)]; 
  generatedPassword.push(pushSymbols)
}

//Generate password function

function generatePassword() {

  // length prompt
  var length = window.prompt("Enter a password length between 8 and 128.");
  length = parseInt(length);
    if(length >= 8 && length <= 128) {
    console.log(" Character amount: " + length);
  } else {
    window.alert("Not a valid answer! Please provide a number value 8 - 128.");
    return generatePassword();
  }
   // lowercase prompt
  var userLower = window.confirm("Do you want lower case letters in your password?");
    console.log(userLower)
    if(userLower = true) {
      getRandomLower();
  }
   // uppercase prompt
  var userUpper = window.confirm("Do you want upper case letters in your password?");
    console.log(userUpper)
    if(userUpper = true) {
      getRandomUpper();
  }
   // number prompt
  var userNumber = window.confirm("Do you want numbers in your password?");
  console.log(userNumber)
  if(userNumber = true) {
    getRandomNumber();
  }
   // symbol prompt
  var userSymbols = window.confirm("Do you want special characters in your password?")
  console.log(userSymbols)
  if(userSymbols = true) {
    getRandomSymbols();
  }

  // need to work on this
  var password = '';
  for (i = 0; i < length; i++) {
      var character = Math.floor(Math.random() * all.length);
      //password += ;
  }
  return password;
} 




// Below code was provided

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








