// Assignment Code. Original code was slightly altered with original fuction/var as I built the code 
//from scratch and then added it in here after.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

//set parameters for password
var passwordLength = window.prompt ("Enter a password length from 8-128");
if(passwordLength >128 || passwordLength < 8){
  console.log("Invalid entry");
  return "Invalid Entry";
}

console.log("Continuing");
//set an empty userbase, and update doms with new arrays
var userPasswordBase = [];

function userChoiceLowercase() {
  let text= "Would you like to include lowercase letters?\nEither Yes or No";
  if (confirm(text) == true){
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  userPasswordBase = userPasswordBase.concat(lowercaseLetters);
}}

function userChoiceUpperCase(){
    let text= "Would you like to include uppercase letters?\nEither Yes or No";
    if (confirm(text) == true){
    var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    userPasswordBase = userPasswordBase.concat(uppercaseLetters);
}}

function userChoiceSpecial(){
  let text= "Would you like to include uppercase letters?\nEither Yes or No";
  if (confirm(text) == true){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', 
  ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '`', '~'];
  userPasswordBase = userPasswordBase.concat(specialCharacters);
}}

userChoiceLowercase();
userChoiceUpperCase();
userChoiceSpecial();

//make sure at least 1 field above was selected, so that password can be generated. if not let user know no password was generated
if (userPasswordBase.length === 0) {
  console.log('The array is empty.');
  passwordText.value = "No password generated due to user selection";
  return
}

//randomize above characters, and set according to above noted password length
function genRandom(userPasswordBase) {
  var randomIndex = Math.floor(Math.random() * userPasswordBase.length);
  return userPasswordBase[randomIndex];
}

let generatedPswrd = ' ';

for (let i=0; i < passwordLength; i++){
  var randomChar = genRandom(userPasswordBase);
 generatedPswrd += randomChar;
}

//display the generated password
passwordText.value = generatedPswrd;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
