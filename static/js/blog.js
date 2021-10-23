var programming_languages = [

    "python",

    "javascript",

    "mongodb",

    "json",

    "java",

    "html",

    "css",

    "c",

    "csharp",

    "golang",

    "kotlin",

    "php",

    "sql",

    "ruby",

    "ceylon",

    "cfengine",
    
    "cg",
    
    "ch",
    
    "chapel",
    
    "charm",
    
    "chill",
    
    "dart",
    
    "darwin",
    
    "dataflex",
    
    "datalog",
    
    "datatrieve",
    
    "abap",
    
    "abc",
    
    "acc",
    
    "accent",
    
    "agda",
    
    "agora",

]

let answer = '';

let maxWrong = 6;

let mistakes = 0;

let guessed = [];

let wordStatus = null;

function randomWord() {

    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];

}

function generateButtons() {

    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>

        `
   
         <button
   
           class="btn btn-default"

           style="padding:2px; margin-top: 4px;"
   
           id='` + letter + `'
   
           onClick="handleGuess('` + letter + `')"
   
         >
   
           ` + letter + `
   
         </button>
   
       `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;

}

function handleGuess(chosenLetter) {

    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

    document.getElementById(chosenLetter).setAttribute('disabled', true);
    document.getElementById(chosenLetter).setAttribute('class', 'btn btn-error');

    if (answer.indexOf(chosenLetter) >= 0) {

        guessedWord();

        checkIfGameWon();

    } else if (answer.indexOf(chosenLetter) === -1) {

        mistakes++;

        updateMistakes();

        checkIfGameLost();

        updateHangmanPicture();

    }

}

function updateHangmanPicture() {

    document.getElementById('hangmanPic').src = static + mistakes + '.jpg';

}

function checkIfGameWon() {

    if (wordStatus === answer) {

        document.getElementById('keyboard').innerHTML = 'Nice! you got it right.';

    }

}

function checkIfGameLost() {

    if (mistakes === maxWrong) {

        document.getElementById('wordSpotlight').innerHTML = 'Haha, you lost!';

        document.getElementById('keyboard').innerHTML = 'I had <span style="color: var(--styling-color);">' + answer + '</span> on mind.';

    }

}

function guessedWord() {

    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotlight').innerHTML = '<span style="color: var(--styling-color);">'+wordStatus+'</span>';

}

function updateMistakes() {

    document.getElementById('mistakes').innerHTML = mistakes;

}

function reset() {

    mistakes = 0;

    guessed = [];

    document.getElementById('hangmanPic').src = img_0;

    randomWord();

    guessedWord();

    updateMistakes();

    generateButtons();

}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();

generateButtons();

guessedWord();