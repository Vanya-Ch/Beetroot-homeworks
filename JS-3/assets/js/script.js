let age = +prompt("Вкажіть вік")

if(age < 0){
    alert("Бешкетник")
}else if(age <= 11){
    console.log("Дитина")
}else if(age <= 17){
    console.log("Підліток")
}else if(age <= 59){
    console.log("Дорослий")
}else if(age >=60){
    console.log("Dinozavr")
}else{
    alert("Бешкетник")
}

let num = +prompt("Вкажіть число від 0 до 9")

switch(num){
    case 1:
        console.log("!")
        break;
    case 2:
        console.log("@")
         break;
    case 3:
        console.log("#")
        break;
    case 4:
        console.log("$")
        break;
    case 5:
        console.log("%")
        break;
    case 6:
        console.log("^")
        break;
    case 7:
        console.log("&")
        break;
    case 8:
        console.log("*")
        break;
    case 9:
        console.log("(")
        break;
    case 0:
        console.log(")")
        break;
    default:
        console.log("Бешкетник")
}

let start = +prompt("Вкажіть початкове значення діапазону")
let end = +prompt("Вкажіть фінальне значення діапазону")

let sumRange = 0;

for(;start<=end;start++){
    sumRange += start;
}
console.log(sumRange + " сума діапазону");

let first = +prompt("Вкажіть перше число")
let second = +prompt("Вкажіть друге число")

function NOD (first,second) {
	if (second > first) return NOD(second, first);
	if (!second) return first;
	return NOD(second, first % second);
}
console.log(NOD(first, second));

let number = +prompt("Введіть число для отримання його дільників")
let i = 1
for(; i<=number ; i++){
    if(number % i == 0 && i!=1 && i!=number){
    console.log("Дільники числа " + number +" : "  + i + " (без 1 та самого числа)")
    }
}

let polindrom = +prompt("Введіть п'ятизначне число")
let rev = Number([...polindrom.toString()].reverse().join(""));
console.log(rev)
if(rev == polindrom){
    console.log("Ваше число є поліндромом")
}else{
    console.log("Ваше число не є поліндромом")
}

let price = +prompt("Введіть суму покупки");
if(price >= 200 && price <= 300){
    console.log(price-(price*3/100) + " до сплати")
}else if(price > 300 && price <=500){
    console.log(price-(price*5/100) + " до сплати")
}else if(price > 500){
    console.log(price-(price*7/100) + " до сплати")
}else if(price > 0 && price < 200){
    console.log(price  + " до сплати")
}else{
    console.log("Why are you westing my time?)")
}



for(let x = 1; x<=10; x++){
    numbers = +prompt("Введіть " + x +" число")
    if(numbers > 0){
        let y = 0;
        y++;
        console.log(y + " додатні значення")
    
    }
    else if(numbers < 0){
        let m = 0;
        m++;
        console.log(m + " - від'ємні числа")
    }
    else if(numbers == 0){
        let n = 0;
        n++;
        console.log(n + " - нулі")
    }
}


let days = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];

let date = new Date();

let weekDay = date.getDay();

alert(`Сьогодні ${days[weekDay]}`)

let next = true;

while(next === true){
    next = confirm("Бажаєте побачити наступний день?")
    
    
    if(next === true){
        if(weekDay === 6){
            weekDay = 0;
        }else{
            weekDay += 1;
        }
        alert(`Сьогодні ${days[weekDay]}`)
    }else if(next === false){
        break;
    }
}



