// Assignment code here


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
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter valid length(11-120)"))
  if (passwordLength < 10 || passwordLength > 120) {
    return "Please enter valid password length between 11 and 120"
  }
  else {


    var includeLowercase = confirm("Include Lowercase Letters?");

    //console.log(confirm("Include Lowercase Letters?"));

    var includeUppercase = confirm("Include Uppercase Letters?");
    //console.log(confirm("Include Uppercase Letters?"));

    var includeNumbers = confirm("Include Numbers?");
    //console.log(confirm("Include Numbers?"));

    var includeSymbols = confirm("Include Symbols?");
    //console.log(confirm("Include Symbols?"));
  }
}

function getRandLower() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';

  return lower[Math.floor(Math.random() * lower.length)]
}

function getRandUpper() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return upper[Math.floor(Math.random() * upper.length)]
}

function getRandNumber() {
  const numbers = '0123456789';

  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getRandSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';

  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandSymbol())