export function getRandomThrow() {

//--This should return a random number from 1-3
    const rng = Math.floor(Math.random() * 3) + 1;
    

    if (rng === 1) {
        return 'boulder';
    }

    if (rng === 2) {
        return 'parchment';
    }
        
    

    if (rng === 3) {
        return 'shears';
    }

    
}

export function doesUserWin(player, computer) {
    
    if (player === computer) {
        return 'draw';
    }

    if (player === 'shears' && computer === 'boulder') {
        return 'loss';
    }

    if (player === 'shears' && computer === 'parchment') {
        return 'victory';
    }



    if (player === 'parchment' && computer === 'shears') {
        return 'loss';
    }

    if (player === 'parchment' && computer === 'boulder') {
        return 'victory';
    }



    if (player === 'boulder' && computer === 'parchment') {
        return 'loss';
    }

    if (player === 'boulder' && computer === 'shears') {
        return 'victory';
    }
}
console.log(doesUserWin('boulder', 'parchment'));