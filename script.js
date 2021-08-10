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
  var passwordLength = parseInt(prompt("Enter valid length(8-128)"))
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please enter valid password length between 8 and 128"
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

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      return "Please select at least one"
    }
    else {
      var counter = 0
      var password = ''

      while(counter < passwordLength) {
        if (includeUppercase && counter <= passwordLength) {
          password += getRandUpper()
          counter ++
        }
        if (includeLowercase && counter <= passwordLength) {
          password += getRandLower()
          counter ++
        }
        if (includeNumbers && counter <= passwordLength) {
          password += getRandNumber()
          counter ++
        }
        if (includeSymbols && counter <= passwordLength) {
          password += getRandSymbol()
          counter ++
        }
      }
      console.log(password)
      return password
    }

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