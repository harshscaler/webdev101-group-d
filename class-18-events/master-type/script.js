let allLetters = document.querySelectorAll('.letter');
let inputArea = document.querySelector('.input');

function checkInput(length) {

    let currentLetter = allLetters[length - 1];
    let nextLetter = allLetters[length];

    currentLetter.classList.remove('current');
    nextLetter.classList.add('current');

    let inputValue = inputArea.value[length - 1];

    if (inputValue === currentLetter.innerText) {
        currentLetter.classList.add('correct');
    } else {
        currentLetter.classList.add('incorrect');
    }
}

inputArea.addEventListener('input', function() {
    let inputValue = inputArea.value;
    checkInput(inputValue.length);
})


document.addEventListener('keydown', function(event) {})

document.addEventListener('keyup', function(event) {})

document.addEventListener('keypress', function(event) {
    console.log('Key Pressed: ' + event.key);
})