let one = 0.1;
let two = 0.2;
let sum = (one * 10 + two * 10) / 10;
console.log(sum + " (0.1 + 0.2)");

let str = "1";
let strToNum = Number(str);
let num = 2;
console.log(strToNum + num + " (string + number)");

let gb = prompt("Your flash drive capacity(GB)")
let mb = gb * 1024;
let files = (Math.round(mb/820));
console.log(files + " files you can download")

let money = prompt("How many money you want to spend?")
let price = prompt("What is the price of a chocolate bar?")
let number = Math.round(money/price);
let oddMoney = money % price;
console.log("You have "+ number + " chocolate bars" + ", " + "and still have " + oddMoney + " some(currency) in your pocket ;)" )

let x = prompt("Write your number");
let y = 0;
for(; x; x = Math.floor(x / 10)) {
    y *= 10;
    y += x % 10;
}
console.log(y + " reverse number");

let dep = prompt("Invest to bank for 2 month")
const persent = 5 / 100;
let months = 2;
let year = 12;
let profit = dep * persent / (year / months);
console.log(profit + " your profit");

console.log(2 && 0 && 3); //0
console.log(2 || 0 || 3); //2
console.log(2 && 0 ||3 + " (чому 3???? спочатку перевіряє 2 та 0, і 0 видає фолс, чому не нуль? останнє значення бере?)");  //0