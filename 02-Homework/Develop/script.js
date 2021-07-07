// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLengthChoice = prompt("Choose a password length between 8-128 characters.  Don't be weird.");
  passwordLengthChoice = parseInt(passwordLengthChoice);
  if (passwordLengthChoice < 8) {
    alert("Must have at least 8 characters.  We talked about this.");
  }
  if (passwordLengthChoice > 128) {
    alert("Must have fewer than 128 characters.  What's your deal?")
  }

  passwordText.value = password;

}



//
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return Math.floor(Math.random()*10);
} 

function getSymbol() {
  let symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getLower());
console.log(getUpper());
console.log(getNumber());
console.log(getSymbol());
