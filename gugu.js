var x = Math.floor(Math.random()*9)+1;
var y = Math.floor(Math.random()*9)+1;
var guguResult = x*y;

var guguField = document.querySelector('.guguField');
var gugu = document.querySelector('.gugu');
var guesses = document.querySelector('.guesses');

var lastResult = document.querySelector('.lastResult');
var guguSubmit = document.querySelector('.guguSubmit');

var guguCount = 1;

gugu.textContent = x + ' ' + 'X' + ' '+ y + ' ' + '=' ;

function checkGuGu() {
  var userGuGu = Number(guguField.value);
  if (guguCount === 1){
    guesses.textContent = '입력한 숫자: ';
  }
  guesses.textContent += ' ';

  if (userGuGu === guguResult) {
    lastResult.textContent = '정답입니다.';
    lastResult.style.backgroundColor = 'green';
    guesses.textContent += '정답' + ' ';
    changeGuGu();

  }

    else {
    lastResult.textContent = '틀렸습니다.';
    lastResult.style.backgroundColor= 'red';
    guesses.textContent += '틀림' + ' ';
    changeGuGu();
  }

  guguCount++;
  guguField.value = '';
  guguField.focus();

}

guguSubmit.addEventListener('click',checkGuGu);

function changeGuGu() {
  if (guguCount === 10){
    lastResult.textContent = '끝났습니다..';
    setGameOver();
  }
  randomGuGu();
}
function randomGuGu() {
  x = Math.floor(Math.random()*9)+1;
  y = Math.floor(Math.random()*9)+1;
  guguResult = x*y;
  gugu.textContent = x + ' ' + 'X' + ' '+ y + ' ' + '=' ;
}

function setGameOver() {
  guguField.disabled = true;
  guguSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '다시 시작하기';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click',resetGame);
}


function resetGame() {
  guguCount = 1;

  lastResult.style.backgroundColor = 'white';
  resetButton.parentNode.removeChild(resetButton);

  guguField.disabled = false ;
  guguSubmit.disabled = false;
  guesses.textContent = '';
  guguField.value = '';
  guguField.focus();
  randomGuGu();
}
