const carOne={
    pack : "one",
    brand : "mercedes",// марка
    model : "sClass",// модель
    year : 2021,// рік випуску
    medSpeed : 80,// середня швидкість
    fuel : 65, // об'єм баку 
    fuelСonsumption : 7, // витрата топлива на 100 км
    
}

carOne.driverName = "Ivan";


const carTwo={
    pack : "two",
    brand : "BMW",// марка
    model : "M5",// модель
    year : 2020,// рік випуску
    medSpeed : 100,// середня швидкість
    fuel : 80, // об'єм баку 
    fuelСonsumption : 11, // витрата топлива на 100 км
    
}

carTwo.driverName = "Dmytro";

for(const property in carOne){
    console.log(`${property} : ${carOne[property]}`)
}

console.log("------------")

for(const key in carTwo){
    console.log(`${key} : ${carTwo[key]}`)
}

console.log("------------")

let distance = +prompt('Введіть відстань яку плануєте подолати')

let enterYourDriver = prompt("Оберіть собі водія")

while(enterYourDriver !== carOne.driverName && enterYourDriver !== carTwo.driverName){
    enterYourDriver = prompt("Оберіть собі водія")}
        if(enterYourDriver === carOne.driverName || enterYourDriver === carTwo.driverName){
        console.log(`Ваш водій ${enterYourDriver}`)
        if (enterYourDriver === carOne.driverName) {
            let timeOne = distance / carOne.medSpeed;
            if (timeOne > 4) {
                timeOne = timeOne + Math.floor(timeOne / 4);
            }
            let fuelOne = distance / 100 * carOne.fuelСonsumption;
            fuelOne = Math.ceil(fuelOne);
            console.log(fuelOne + " літрів пального необхідно")
            console.log(`${Math.floor(timeOne)} годин ${(timeOne - Math.floor(timeOne)) * 60} хвилин`)
        }else if(enterYourDriver === carTwo.driverName){
            let timeTwo = distance / carTwo.medSpeed;
        
            if (timeTwo > 4) {
                timeTwo = timeTwo + timeTwo / 4;
            }
        
            timeTwo = timeTwo.toFixed();
        
            let fuelTwo = distance / 100 * carTwo.fuelСonsumption;
            fuelTwo = Math.ceil(fuelTwo);
            console.log(`${Math.floor(timeTwo)} годин ${(timeTwo - Math.floor(timeTwo)) * 60} хвилин`)
            console.log(fuelTwo + " літрів пального необхідно")
            }
}

console.log("------------")

let date = new Date()


let time ={
    hours : date.getHours(),
    minutes : date.getMinutes(),
    seconds : date.getSeconds(),
}

function getYourTime(a,b,c){
    console.log(`${a}:${b}:${c}`)
}

getYourTime(time.hours, time.minutes ,time.seconds)

let changeTime = () => {
    let a = +prompt("Введіть кількість секунд на яку збільшьтся час"),
        b = +prompt("Введіть кількість хвилин на яку збільшьтся час"),
        c = +prompt("Введіть кількість годин на яку збільшьтся час");
    time.seconds += a;
    time.minutes += b;
    time.hours += c;
    if(time.seconds > 60){
        
        time.minutes += Math.floor(time.seconds/60);
        time.seconds = (time.seconds / 60 - Math.floor(time.seconds / 60)) * 60;
        time.seconds = time.seconds.toFixed()
        
        
    }
    if(time.minutes > 60){
        time.hours += Math.floor(time.minutes/60);
        time.minutes = (time.minutes / 60 - Math.floor(time.minutes / 60)) * 60;
        time.minutes = time.minutes.toFixed()
    }
    if(time.hours >= 24){
        time.hours = (time.hours / 24 - Math.floor(time.hours / 24)) * 24;
        time.hours = time.hours.toFixed()
    }
    getYourTime(time.hours, time.minutes ,time.seconds)
}
changeTime();


