let maximum = parseInt(prompt('Guessing game: insert a maximum number'));

while (!maximum) {
    maximum = parseInt(prompt('Guessing game: insert a valid maximum number'))
}

let targetNum = Math.floor(Math.random() * maximum + 1);
console.log(targetNum);

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (guess !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('Too high. Enter a new guess!'))
    } else if (guess < targetNum) {
        guess = parseInt(prompt('Too low. Enter a new guess!'))
    }
}

let h1 = document.querySelector('h1');

const result = () => {
    h1.innerHTML = `You win, after ${attempts} guesses`;
}

result();






