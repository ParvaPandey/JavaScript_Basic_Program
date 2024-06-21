// Function to generate random number

function randomNumber(max, min) {
let number =  Math.floor(Math.random() * (max - min) + min);
console.log(number);
}
console.log("Random Number between 1 and 100: ");
randomNumber(100, 1);