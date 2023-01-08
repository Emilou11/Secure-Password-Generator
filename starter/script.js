// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var userInput = [];

//password = prompt("Choose a number between 10 - 64 to be the legth of your password.");

// Function to prompt user for password options
function getPasswordOptions() {
  var validInput =
   prompt("Select criteria for password (you can select more than one) (use space): 1=lowercase 2=uppercase 3=numeric 4=special characters."); {
    userInput.push(validInput);
   } console.log(userInput);
  
}
getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor((Math.random()*arr.length))]
}
console.log(getRandom(upperCasedCharacters))



// Function to generate password with user input
function generatePassword() {
console.log("You Clicked")
  //1 - Prompt for password criteria - 10 - 64 nums
      //a - Add prompt within getPasswordOptions()
      //b - Check the length of the answer
      //c - if correct, store in var password
      //d - if incorrect, prompt again.
  //2 - Prompt if to inclue uppercase/special characters?
      //a- if true, call getRandom(upperCase) and store in var password
      //b- if true, call getRandom(specialCharacters) and stor in var password
  //3 - Validate length is correct and selections have been made
      //a - if true, store in var password
  //4 - Display password to browser

  return "Password Will Go Here"
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);