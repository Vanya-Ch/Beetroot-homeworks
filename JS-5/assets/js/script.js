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

while(enterYourDriver != carOne.driverName && enterYourDriver != carTwo.driverName){
    let enterYourDriver = prompt("Оберіть собі водія")
    if(enterYourDriver === carOne.driverName || enterYourDriver === carTwo.driverName){
        break
    }
}

if(enterYourDriver === carOne.driverName || enterYourDriver === carTwo.driverName){
    console.log(`Ваш водій ${enterYourDriver}`)
    
}



console.log("------------")


if(enterYourDriver === carOne.driverName ){
    let timeOne = distance / carOne.medSpeed;
    for(let i = 0 ; i<=4; i++){
        if(i == 4){
            i=0;
            timeOne += 1;
        }
    }
    let fuelOne = distance / 100 * carOne.fuelСonsumption;
    fuelOne = Math.ceil(fuelOne);

    console.log(fuelOne + " літрів пального необхідно")
    console.log(`${Math.floor(timeOne)} годин ${(timeOne - Math.floor(timeOne)) * 60} хвилин`)
}else if(enterYourDriver === carTwo.driverName){
    let timeTwo = distance / carTwo.medSpeed;
    let fuelTwo = distance / 100 * carTwo.fuelСonsumption;
    fuelTwo = Math.ceil(fuelTwo);

    console.log(`${Math.floor(timeTwo)} годин ${(timeTwo - Math.floor(timeTwo)) * 60} хвилин`)
    console.log(fuelTwo + " літрів пального необхідно")
}


/* let time ={
    hours : 
} */