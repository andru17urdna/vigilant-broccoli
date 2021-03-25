
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let checkGuess = function(num, secretNumber) {
    if (num > secretNumber) {
        console.log('Too High')
        return false;
    } else if (num < secretNumber) {
        console.log('Too Low')
        return false;
    } else {
        console.log('CORRECT')
        return true;
    }
}

let askGuess = function() {
    const secretNumber = randomInRange(0, 100);
    rl.question("Enter a guess: ", answer => {
        answer = Number(answer);
        if (checkGuess(answer, secretNumber)) {
            rl.close();
        } else {
            askGuess();
        }
    });
}

askGuess();
