// import functions and grab DOM elements
import { getRandomThrow } from './utils.js';
import { doesUserWin } from './utils.js';

const throwButton = document.getElementById('throw-button');
const resetButton = document.getElementById('reset-button');
const body = document.getElementById('body');


const victories = document.getElementById('victories');
const losses = document.getElementById('losses');
const total = document.getElementById('total');


    // initialize state
let lVictories = 0;
let lTotal = 0; 
let lDraws = 0; 
let lLosses = 0;

// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userChoice = selectedRadioButton.value;
    
    const computerResults = getRandomThrow();
    const userResults = doesUserWin(userChoice, computerResults);

    if (userResults === 'draw') {
        
        lTotal++;
        lDraws++;
    }

    if (userResults === 'victory') {
        
        lTotal++;
        lVictories++;
    }
    
    if (userResults === 'loss') {
        lTotal++;
        lLosses++;
    }

    victories.textContent = `${lVictories}`;
    losses.textContent = `${lLosses}`;
    total.textContent = `${lTotal}`;

    if (lVictories < lLosses) {
        body.classList.add('loser');
        body.classList.remove('winner');
    }

    if (lVictories > lLosses) {
        body.classList.add('winner');
        body.classList.remove('loser');
    }
});

resetButton.addEventListener('click', () => {
    location.reload();
});