let display = document.getElementById('display')

function appendCharacter(char) {
    if(display.innerText == '0' && char != '.') {
        display.innerText = char
    } else {
       display.innerText += char
    }
}

function clearDisplay(){
    display.innerText = '0';
}

function calculateResult() {
    display.innerText = eval(display.innerText);
 }