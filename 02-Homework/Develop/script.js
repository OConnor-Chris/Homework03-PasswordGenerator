// Assignment Code
var generateBtn = document.querySelector("#generate");

var numCharacters;
var chooseLower;
var chooseUpper;
var chooseNumber;
var chooseSpecial;
var userChoices;


/* 
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
  let symbols = '~`!@#$%^&*()_-+={[}]|<,>.?/';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getLower());
console.log(getUpper());
console.log(getNumber());
console.log(getSymbol()); 
*/



var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ";", ":", "<", ">", "?", "/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
 
  numCharacters = prompt("Choose a password length between 8 - 120.  Don't be weird.");
  console.log("Password length " + numCharacters);
  
  if(!numCharacters) {
    alert("Required value");

  } else if (numCharacters < 8 || numCharacters > 128) {
    numCharacters = prompt("We talked about this");
    console.log("Password length " + numCharacters);
  
  } else { 
    chooseLower = confirm("Include lowercase letters?");
    console.log("Lower case " + chooseLower);
    chooseUpper = confirm("Include uppercase letters?");
    console.log("Upper case " + chooseUpper);
    chooseNumber = confirm("Include numbers?");
    console.log("Number " + chooseNumber);
    chooseSpecial = confirm("Include special characters?");
    console.log("Special Character " + chooseSpecial);

  };

  
  if (!chooseLower && !chooseUpper && !chooseNumber && !chooseSpecial) {
    userChoices = alert("Include at least one character type.");
  
  } else if (chooseLower && chooseUpper && chooseNumber && chooseSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
 
  else if (chooseLower && chooseUpper && chooseNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (chooseLower && chooseUpper && chooseSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (chooseLower && chooseNumber && chooseSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (chooseUpper && chooseNumber && chooseSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  
  else if (chooseLower && chooseUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (chooseLower && chooseNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (chooseLower && chooseSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (chooseUpper && chooseNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (chooseUpper && chooseSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (chooseNumber && chooseSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
 
  else if (chooseLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (chooseUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (chooseNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (chooseSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  var passwordBlank = [];
  
  for (var i = 0; i < numCharacters; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }
 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}



