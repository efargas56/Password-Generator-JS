// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// constant letters and symbols
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z",]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", ]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var choices = []
//create password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// password generator function
function generatePassword() {
// password length
while (true) {
  var firstPrompt = prompt("How long would you like your password to be? Choose between 8 to 128 characters.");
  if (!firstPrompt) {
    alert("Please add a value");
  } else if (firstPrompt < 8 || firstPrompt > 128) {
    prompt("Please add a value higher than 8 or lower than 128");
  } else 
    break;
  }
  // confirmation windows to decide what to put into your password
if (confirm("Do you want upper case characters?")) {
  choices = choices.concat(upperCase);
}
if (confirm("Do you want lower case characters?")) {
  choices = choices.concat(lowerCase);
}
if (confirm("Do you want numbers?")) {
  choices = choices.concat(numbers);
}

if (confirm("Do you want special characters?")) {
  choices = choices.concat(specialChar);
}
if (choices.length == 0) {
  alert("Please choose a criteria");
}
 // output for the choices made above along with for loop to randomizegit
  var randomPassword = [];
  for (var i = 0; i < firstPrompt; i++) {
    var allChoices = choices[Math.floor(Math.random() * choices.length)];
    randomPassword.push(allChoices);
  }
  return randomPassword.join("");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
