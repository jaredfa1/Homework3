// Assignment Code
var generateBtn = document.querySelector("#generate");
// possible characters
var lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
var upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var number = ['1','2','3','4','5','6','7','8','9','0']
var symbol = ['~','!','@','#','$','%','^','&','*','?'] 

 //User input 
 document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
    var userLength = prompt("Enter password length");
    var userLower = confirm("Inculde lowercase letters? ");
    var userUpper = confirm("Include uppercase letters?");
    var userNumber = confirm("Include numbers?"); 
    var userSymbol = confirm("Include symbols?");

  // Randomize functions
  function getRandomLower(lower){
    for(var i=0; i < Array.length; i++) {
      console.log (array[i]),
    }       
    }
  function getRandomUpper(upper){
    for(var i=0; i < Array.length; i++) { 
        console.log (array[i]), 
      }       
      }
  function getRandomNumber(number){
    for(var i=0; i < Array.length; i++) {
        console.log (array[i]),
        }       
        }
   function getRandomSymbol(symbol){
      for(var i=0; i < Array.length; i++) {
        console.log (array[i]),
          }       
          } 

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



    
}
  





  
