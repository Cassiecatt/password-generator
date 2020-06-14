// Assignment code here

// Randomized functions defined
const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Variable length defined

var length = "getPasswordlength"



//Generate password function 

function generatePassword() {
  //inputting a password length
  var length = window.prompt("Enter a password length between 8 and 128.");
  length = parseInt(length);
  if(length >= 8 && length <= 128) {
    console.log(" Character amount: " + length);
  } else {
    window.alert("Not a valid answer! Please provide a number value 8 - 128.");
    return generatePassword();
    }
}


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
generatePassword();




//var passLength = function() {
    //ask user how many characters they want in password
    //var promptLength = window.prompt("How many characters long do you want your password? Enter a number 8 - 128.");

    //if (promptLength < 8 && promptLength > 128) {
     //window.alert("You need to provide a character length between 8 and 128. Please try again");
      //return passLength();
    //}

