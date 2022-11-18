let shoppingList = [];

function addItems(){
    let name = prompt("Введіть продукт який плануєте придбати"),
        amount = +prompt("Введіть кількість яку плануєте купити"),
        price = Number((Math.random()*100).toFixed()),
        inCart = confirm(`Додаємо в кошик ${amount} ${name}`)

        
    
    let checkSame = shoppingList.find(el => el.name === name);
    if(checkSame){
        checkSame.amount += amount;
        console.log(amount, checkSame.amount)
    }else{
        shoppingList.push({
            name : name,
            amount : amount,
            price : price,
            totalPrice : price * amount,
            inCart : inCart,
        })
    }
}



for(let i = 0; i <= 2; i++){
    
    addItems();
    
}

const sortedList = shoppingList.sort((a,b) => {
    if(a.inCart >= b.inCart){
        return 1;
    }else{
        return -1;
    }
});

console.log("Відсортований за false")

console.log(sortedList); // - відсортований

const deleteItem = prompt("Який продукт бажаєте видалити зі списку?")

const filteredList = shoppingList.filter(product => {
    if(product.name !== deleteItem ){
        return true;
    }
})

console.log("Відфільтрований після видалення")

console.log(filteredList); // - видалення об'єкта

console.log("Після додавання в кошик")

let addedShoppingList = filteredList.slice(0);

function addItem(){
    let name = prompt("Введіть продукт який плануєте додати"),
        amount = +prompt("Введіть кількість яку плануєте додати");
    
        let sameProduct = filteredList.find(el => el.name === name);
        if(sameProduct){
            console.log(sameProduct.amount, amount)
            sameProduct.amount += amount;
            
        }else{
            let price = Number((Math.random()*100).toFixed()),
                inCart = confirm(`Додаємо в кошик ${amount} ${name}`);
        addedShoppingList.push({
            name : name,
            amount : amount,
            price : price,
            totalPrice : price * amount,
            inCart : inCart,
        })}
}

addItem();



console.log(addedShoppingList);

function getSum(){
    let getTotalPrices = addedShoppingList.map(element => element.totalPrice)
    console.log(getTotalPrices)
    let sum = 0;
    for(let i = 0;i<getTotalPrices.length;i++){
        sum += getTotalPrices[i];
            
    }
    console.log("Сума всіх предметів в фінальному кошику")
        console.log(sum)
    }

getSum();


function getSumNotInCart(){
    const notInCart = addedShoppingList.filter(product => {
        if(product.inCart === false){
            return true;
        }
    })
    let sum = 0;
    for(let i =0; i < notInCart.length; i++){
        sum += notInCart[i].totalPrice;
    }
    console.log("Сума всіх предметів не придбаних")
    
    console.log(sum)
}

getSumNotInCart();

const sortedByPrice = addedShoppingList.sort((a,b)=>{
    if(a.totalPrice > b.totalPrice){
        return 1;
    }else{
        return -1;
    }
})
console.log("Відсортований за ціною")
console.log(sortedByPrice)










