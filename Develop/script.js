// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var num = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = [' ','!','"','#','$','%','&','','(',')','*','+',',','-','.','/',':',';','<','>','=','?','@','[',']','\\','^','`','{','}','|','~','_'];
var promptCharacter
var lowerCaseConfirm
var upperCaseConfirm
var numberConfirm
var specialConfirm

  //character prompt
function writePassword () {
   promptCharacter = prompt('How many characters would you like your password to be?');
  console.log 
    if (!promptCharacter) {
        alert('Please enter a number between 8 and 128.' );
        writePassword ()
      }
      else if 
       (promptCharacter < 8) {
         alert('Please enter a number between 8 and 128.');
         writePassword ()
       }
       else if 
       (promptCharacter > 128) {
         alert('Please enter a number between 8 and 128.');
         writePassword()
     };
    
    // uppercase, lowercase, number, or character in password
    upperCaseConfirm = window.confirm('Would you like upper case letters?');
    //  if (upperCaseConfirm) {};

    lowerCaseConfirm = window.confirm('Would you like lower case letters?');
    //  if (lowerCaseConfirm) {};

    numberConfirm = window.confirm('Would you like a number?');
    //  if (numberConfirm) {};

    specialConfirm = window.confirm('Would you like a special character?');
    //  if (specialConfirm) {};

     if (upperCaseConfirm === false && lowerCaseConfirm === false && numberConfirm === false && specialConfirm === false) {
       alert('Please choose at least one character type.')
     }
    }

function generatePassword () {
  console.log(lowerCaseConfirm);
  console. log(upperCaseConfirm);
  console.log(numberConfirm);
  console.log(specialConfirm);

 for (var i = 0; i < promptCharacter; i++)
      if (lowerCaseConfirm) {
          lowerCase[Math.floor(Math.random() * lowerCase.length)];

      }
      if (upperCaseConfirm) {
          upperCase[Math.floor(Math.random() * upperCase.lenth)];
          // console.log (upperCaseConfirm);
      }
      if(specialConfirm) {
          specialChar[Math.floor(Math.random() * specialChar.lenth)];
          // console.log (specialCconfirm);
      }
     if (numberConfirm) {
          num[Math.floor(Math.random() * num.length)];
          // console.log (numberConfirm);
      };
    };
  
    


    
// // // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
writePassword() 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
