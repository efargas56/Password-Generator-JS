// Assignment code here
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var upperCaseConfirm = window.confirm("Would you like to use uppercase letters?")
var lowerCaseConfirm = window.confirm("Would you like to use lowercase letters?")
var numbersConfirm = window.confirm("would you like to use numbers?")
var specialCharConfirm = window.confirm("would you like to use special characters?")

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"
const specialChar =" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

if (upperCaseConfirm && lowerCaseConfirm && numbersConfirm && specialCharConfirm){
  var randomCharacter = function() {
    var character = (upperCase + lowerCase + numbers + specialChar)[Math.floor(Math.random()* (upperCase.length + lowerCase.length + numbers.length + specialChar.length))]
    return character
  }
  else if (lowerCaseConfirm && numbersConfirm && specialCharConfirm){
    var randomCharacter = function(){
      var character = (lowerCase + numbers + specialChar)[Math.floor(math.random()* (lowerCase.length + numbers.length + specialChar.length))]
      return character
    }
  else if (upperCaseConfirm && lowerCaseConfirm && numbersConfirm){
    var randomCharacter = function() {
      var character = (upperCase + lowerCase + numbers)[math.floor(math.random() * (upperCase.length + numbers.length + specialChar.length))]
      return character
    }
  else if (upperCaseConfirm && numbersConfirm && specialCharConfirm)
   }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
