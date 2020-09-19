// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var num = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = [' ','!','"','#','$','%','&','','(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','\\','^','`','{','}','|','~','_'];
var promptCharacter;
var lowerCaseConfirm; 
var upperCaseConfirm; 
var numberConfirm;
var specialConfirm;

  //character prompt
function promptInfo() {
   promptCharacter = parseInt(prompt('How many characters would you like your password to be?'));
   console.log(promptCharacter);
    if (!promptCharacter) {
        alert('Please enter a number between 8 and 128.' );
        promptInfo()
      }
      else if 
       (promptCharacter < 8) {
         alert('Please enter a number between 8 and 128.');
         promptInfo()
       }
       else if 
       (promptCharacter > 128) {
         alert('Please enter a number between 8 and 128.');
         promptInfo()
       }
    }
    // uppercase, lowercase, number, or character in password
    upperCaseConfirm = window.confirm('Would you like upper case letters?');
    //  if (upperCaseConfirm) {};

    lowerCaseConfirm = window.confirm('Would you like lower case letters?');
    //  if (lowerCaseConfirm) {};

    numberConfirm = window.confirm('Would you like a number?');
    //  if (numberConfirm) {};

    specialConfirm = window.confirm('Would you like a special character?');
    //  if (specialConfirm) {};

// var password = generatePassword();

function generatePassword() {
  promptInfo();
  if (upperCaseConfirm === false && lowerCaseConfirm === false && numberConfirm === false && specialConfirm === false) {
    alert('Please choose at least one character type.')
    return;
  }
  console.log("lowerCaseConfirm", lowerCaseConfirm);
  console.log("upperCaseConfirm", upperCaseConfirm);
  console.log("numberConfirm", numberConfirm);
  console.log("specialConfirm", specialConfirm);
  var passwordElements= "";
  var all = [];
  if (lowerCaseConfirm) {
    passwordElements += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    all= all.concat(lowerCase);
  }
  if (upperCaseConfirm) {
    passwordElements += upperCase[Math.floor(Math.random() * upperCase.length)];
    all= all.concat(upperCase);
  }
  if (numberConfirm) {
    passwordElements += num[Math.floor(Math.random() * num.length)];
    all= all.concat(num);
  }
  if (specialConfirm) {
    passwordElements += specialChar[Math.floor(Math.random() * specialChar.length)];
    all= all.concat(specialChar);
  }
  var finalChar = promptCharacter- passwordElements.length
  console.log(all);
  for (var i = 0; i < finalChar; i++) {
    passwordElements += all[Math.floor(Math.random() * all.length)];
    console.log("passwordElements", passwordElements);
  } 
    return passwordElements;

  // console.log (generatePassword()); 
};

  
    


    
// // // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
