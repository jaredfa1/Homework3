const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const upperCaseEL = document.getElementById('uppercase');
const lowerCaseEL = document.getElementById('lowercase');
const numberEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

//prompts
document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
    var length = prompt("Enter password length");
    var lower = confirm("Inculde lowercase letters? ");
    var upper = confirm("Include uppercase letters?");
    var number = confirm("Include numbers?"); 
    var symbol = confirm("Include symbols?");
    
}





//Listener
generateEL.addEventListener('click', () => {
    const length = +lengthEL.value;
    const hasLower = lowercaseEL.confirm;
    const hasUpper = uppercaseEL.confirm;
    const hasNumber = numbersEL.confirm;
    const hasSymbol = symbolsEL.confirm;

  resultEL.innerText = generatePassword(haslower, hasUpper, hasNmber, hasSymbol)
})

//copy to clipboard
clipboardEL.addEventListener('click', () =>{
    const textarea = document.createElement('textarea');
    cost password = resultEL.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password coppied');

})


//password function
function generatePassword(lower, upper, number, symbol, length) {

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
        item => Object.values(item)[0]
     );

    if(typesCount === 0){
        return '';
    }

    for(let i =0; i< length; i+= typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFuc[fucName]();

        });
    } 
     const finalPassword = generatedPassword.slice(0, length);

     return finalPassword;

}



//functions
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(+=';
    return symbols[Math,floor(Math.random() * symbols.length)];
}



