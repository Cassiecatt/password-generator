// Assignment code here

// Arrays

var userSelects = [];

// Random functions (lower, upper, number & symbol)

//Get random lower case function

function getRandomLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  userSelects.push(lower);
}

//Get random upper case function

function getRandomUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  userSelects.push(upper);
}

//Get random numeric value function

function getRandomNumber() {
  const number = "0123456789";
  userSelects.push(number);
}

//Get random symbols function

function getRandomSymbols() {
  const symbols = "!@#$%^&*~<>;/";
  userSelects.push(symbols);
}

//Generate password function

function generatePassword() {
  // length prompt
  var length = window.prompt("Enter a password length between 8 and 128.");
  length = parseInt(length);
  if (length >= 8 && length <= 128) {
    console.log(" Character amount: " + length);
  } else {
    window.alert("Not a valid answer! Please provide a number value 8 - 128.");
    return generatePassword();
  }
  // lowercase prompt
  var userLower = window.confirm(
    "Do you want lower case letters in your password?"
  );
  console.log(userLower);
  // Long way is if (userLower === true)
  // Long way for false is if (userLower === false), short way is if (!userLower)
  if (userLower) {
    getRandomLower();
  }
  // uppercase prompt
  var userUpper = window.confirm(
    "Do you want upper case letters in your password?"
  );
  if (userUpper === true) {
    getRandomUpper();
  }
  // number prompt
  var userNumber = window.confirm("Do you want numbers in your password?");
  console.log(userNumber);
  if (userNumber === true) {
    getRandomNumber();
  }
  // symbol prompt
  var userSymbols = window.confirm(
    "Do you want special characters in your password?"
  );
  console.log(userSymbols);
  if (userSymbols === true) {
    getRandomSymbols();
  }

  var userSelectsStr = userSelects.join("");
  // need to work on this - generating the password
  var password = "";
  for (let i = 0; i < length; i++) {
    var characterIndex = Math.floor(Math.random() * userSelectsStr.length);
    var character = userSelectsStr.charAt(characterIndex);
    // Long way is password = password + character;
    password += character;
  }
  return password;
}

// Below code was provided

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
