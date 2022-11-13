function arguments(a,b,c){
    console.log(arguments);
}
arguments(5,3,4);

let m = +prompt("Введіть перше число"),
    n = +prompt("Введіть друге число");


let zero = function(m,n){
    if(n>m){
        return -1;
    }else if(m>n){
        return 1;
    }else if(m==n){
        return 0;
    }
}

console.log(`${zero(m,n)} (Повертає 0, 1 ,-1)`)

let v = +prompt("Число для факторіала")

function factorial(v) {
    return v ? v * factorial(v - 1) : 1;
  }
  
console.log( `${factorial(v)} - Факторіал`)



function join (){
    let q = +prompt("Введіть перше число");

    let w = +prompt("Введіть друге число");

    let e = +prompt("Введіть третє число");
    const arr = [q,w,e]
    console.log(`${Number(arr.join(''))} (join)`)
}

join();
let a = +prompt("Введіть ширину"),
    b = +prompt("Введіть висоту")

function square(a,b){
    if(a == 0 ){
        return b**2;
    }else if(b == 0 ){
        return a**2;
    }else if(a > 0 && b > 0){
        return a*b;
    }else{
        return "Сторони мають бути додатними";
    }
    
}

console.log(`${square(a,b)} - площа`)



let perfectNumber = () => {
    let number = +prompt("Введіть число на перевірку досконалості")
    let divisor = 0;
    for(let i = 1; i<=number/2;i++){
        if(number%i===0){
            divisor += i;
        }
    }
    if(divisor === number && divisor !==0){
        console.log("Ваше число досконале")
    }else{
        console.log("Ваше число не досконале")
    }

}
perfectNumber();


let start = +prompt("Введіть початкове значення діпазону"),
    end = +prompt("Введіть кінець діапазону");


let range = (a,b) => {
    let resultNumbers = [];
        for(let i = a; i < b; i++){
            let sum = 0;
            for(let n = 1; n <= i / 2; n++){
                if( i % n === 0) sum += n;
            }
            if(i === sum) resultNumbers.push(i);
        }
    return resultNumbers;
}

console.log(`${range(start, end)} - досконалі числа`);







