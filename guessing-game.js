const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 1;

let checkGuess = function(num) {
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
