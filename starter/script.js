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


//var characterLength = 8;
var userChoice = [];


// Function to prompt user for password options
function getPasswordOptions() {
 userChoice.push (prompt("Enter a number between 10 and 64", ""));  
}

getPasswordOptions();
console.log(userChoice)
  

 // if (isNaN(characterLength) || characterLength < 8 || characterLength > 64) {
   // alert('Character has to be a Number 8 - 64 Digits. Please try again.');
   // return false;
 // }

  //if (confirm('Would you like Lowercase letters in your password?')) {
   // userChoice = userChoice.concat(lowerCasedCharacters)
 // }

 // if (confirm('Would you like Uppercase letters in your password?')) {
 //   userChoice = choiceArr.concat(upperCasedCharacters)
  //}

  //if (confirm('Would you like Special characters in your password?')) {
    //choiceArr = userChoice.concat(specialCharacters)
  //}

  //if (confirm('Would you like Numbers in your password?')) {
    //userChoice = userChoice.concat(numericCharacters)
  //}
  //return true;
//}

// Function for getting a random element from an array
//function getRandom(arr) {
  //return arr[Math.floor(Math.random() * arr.length)];
//}



// Function to generate password with user input
//function generatePassword() 

//var password = '';
//for(var i = 0; i < characterLength; i++) {
  //var randomIndex = Math.floor(Math.random() * userArr.length);
  //password = password + userArr[randomIndex];
//}
//return password;




// Get references to the #generate element
  //var generateBtn = document.querySelector('#generate');

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
 // var passwordText = document.querySelector('#password');

 // passwordText.value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);