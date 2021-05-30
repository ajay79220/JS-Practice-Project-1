'use strict';

let randomNumber = Math.trunc(Math.random() *20) + 1;
let highScore = 0;
let score = 20;
function getText(query) {
    return document.querySelector(query).textContent;
 }
 
 function setText(query, value) {
     document.querySelector(query).textContent = value;
  }
 
  function getValue(query) {
     return document.querySelector(query).value;
  }

  function setValue(query, value) {
      document.querySelector(query).value = value;
  }

document.querySelector('.check').addEventListener('click', function validateNumber() {

    const enteredValue = Number(getValue('.guess'));
    if(enteredValue) {
        if(getText('.score') <= 0) {
            setText('.message', 'You lost the game');
            setText('.score', 0);
        } else {
            if(enteredValue !== randomNumber){
                enteredValue > randomNumber ? (setText('.message', 'Too High')) : (setText('.message', 'Too Low'));
                score = getText('.score');
                score--;
                setText('.score',score);
            } else {
                setText('.message', 'Correct');
                document.querySelector('body').style.backgroundColor = '#60b347';
                setText('.number', enteredValue);
                score > highScore ? highScore = score : null;
                setText('.highscore',highScore);
            }
        }
    } else {
        setText('.message', 'Invalid number');
    }
})

document.querySelector('.again').addEventListener('click', function resetData() {
    document.querySelector('body').style.backgroundColor = '#222';
    setValue('.guess','');
    setText('.number', '?');
    setText('.message', 'Start guessing...');
    setText('.score', 20);
    randomNumber = Math.trunc(Math.random() *20) + 1;
})
