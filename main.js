let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let cScore = 0;
let humanScore = 0;
let mTie = 0;


const max = 3;
const min = 1;
let computer; 

rock.onclick = function() {
  computer = Math.floor(Math.random()*max + min);
  if (computer === 1) {
    computer = 'Rock'
    console.log(`Computer choose ${computer}`);
    console.log('Its a Tie, Try Again!!');
    mTie++;
    document.getElementById('tie').textContent = mTie;
  }
  else if (computer === 2) {
    computer = 'Paper'
    console.log(`Computer choose ${computer}`);
    console.log('Computer Wins!!');
    cScore++;
    document.getElementById('compScore').textContent = cScore;
  }
  else if (computer === 3) {
    computer = 'Scissors'
    console.log(`Computer choose ${computer}`);
    console.log('You Win!!');
    humanScore++;
    document.getElementById('youScore').textContent = humanScore;
  }
}

paper.onclick = function() {
  computer = Math.floor(Math.random()*max + min);
  if (computer === 1) {
    computer = 'Rock'
    console.log(`Computer choose ${computer}`);
    console.log('You win!!!');
    humanScore++;
    document.getElementById('youScore').textContent = humanScore;
  }
  else if (computer === 2) {
    computer = 'Paper'
    console.log(`Computer choose ${computer}`);
    console.log('Its a Tie!! Try Again');
    mTie++;
    document.getElementById('tie').textContent = mTie;
  }
  else if (computer === 3) {
    computer = 'Scissors'
    console.log(`Computer choose ${computer}`);
    console.log('Computer Wins!!');
    cScore++;
    document.getElementById('compScore').textContent = cScore;
  }
}

scissors.onclick = function() {
  computer = Math.floor(Math.random()*max + min);
  if (computer === 1) {
    computer = 'Rock'
    console.log(`Computer choose ${computer}`);
    console.log('Computer Wins!!');
    cScore++;
    document.getElementById('compScore').textContent = cScore;
  }
  else if (computer === 2) {
    computer = 'Paper'
    console.log(`Computer choose ${computer}`);
    console.log('You win!!!');
    humanScore++;
    document.getElementById('youScore').textContent = humanScore;
  }
  else if (computer === 3) {
    computer = 'Scissors'
    console.log(`Computer choose ${computer}`);
    console.log('Its a Tie, Try Again!!');
    mTie++;
    document.getElementById('tie').textContent = mTie;
  }
}

