let userName = prompt('What is your name?');
console.log('Привіт ' + userName);
let userBorn = prompt('What year you were born?');
const YEAR = 2022;
let userAge = YEAR - userBorn;
console.log(userAge);
let square = prompt('Set the side of the square');
console.log(square**2);
let radius = prompt('Set circle radius');
let circleSquare = radius**2 * Math.PI;
console.log(circleSquare);

let distance = prompt('How far are you planning to travel (kilometers)?')
let time = prompt('How many time are you planning to spend (hours)?')
let speed = distance/time;
console.log('You should move '+ speed + ' km/h')

let dollar = prompt('How many dollars you want to change?');
const EXCHANGE_RATE = 1.3;
let euro = dollar * EXCHANGE_RATE;
console.log("Here your's " + euro + " euro");
