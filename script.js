// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

var passwordLength = window.prompt ("Enter a password length from 8-128");
if(passwordLength >128 || passwordlength < 8){
  console.log("Invalid entry");
  return "Invalid Entry";
}

console.log("Continuing");
var userPasswordBase = [];
function userChoiceLowercase() {
  let text= "Would you like to include lowercase letters?\nEither Yes or No";
  if (confirm(text) == true);
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  userPasswordBase = userPasswordBase.concat(lowercaseLetters);
}

function userChoiceUpperCase(){
    let text= "Would you like to include uppercase letters?\nEither Yes or No";
    if (confirm(text) == true);
    var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    userPasswordBase = userPasswordBase.concat(uppercaseLetters);
}

function userChoiceSpecial(){
  let text= "Would you like to include uppercase letters?\nEither Yes or No";
  if (confirm(text) == true);
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', 
  ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '`', '~'];
  userPasswordBase = userPasswordBase.concat(specialCharacters);
}

userChoiceLowercase();
userChoiceUpperCase();
userChoiceSpecial();

if (userPasswordBase.length === 0) {
  console.log('The array is empty.');
  return "Couldn't include any characters due to invalid type selection";
}

function getRandomCharacter(userPasswordBase) {
  var randomIndex = Math.floor(Math.random() * passwordLength);
  return userPasswordBase(randomIndex);
}

let generatedPswrd = ' ';

for (let i=0; i < passwordLength; i++){
  var randomChar = getRandomCharacter(userPasswordBase);
 generatedPswrd += randomChar;
}
console.log(password);

var passwordText = document.querySelector("#password");
passwordText.value = generatedPswrd;
generatePassword();


passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
