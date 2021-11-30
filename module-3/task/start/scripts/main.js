// console.log('Hello');

//Single line comment

/*--------

Multi line comment

--------*/

let productName = 'product name string';
let price = '10.00';
let quantity = 3;
let inStock = true;
let discountAmount = 2;

// console.log(productName);
// console.log(price);
// console.log(quantity);
// console.log(inStock);
// console.log(discountAmount);

function showProductName(){
    console.log(productName);
}
// showProductName();

function totalPrice(productPrice=0,productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);
}

// totalPrice(price,quantity);

//showing the difference between a regular function and an arrow function
function squareNumber(number=0){
    let sum = number * number;
    return sum;
}

var square = (number=0) => number * number;

let squaredNumber = squareNumber(3);
// console.log(squaredNumber);

let squared = square(3);
// console.log(squared);
//showing the difference between a regular function and an arrow function

function productDiscount(){
    let sum;
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum = sum - discount;
    } else {
        sum = price * quantity;
    }
    console.log(sum);
}

// productDiscount();

function calculateDiscount(){
    let sum = price * quantity;
    if(quantity > 1){
        let discount = discountAmount * quantity;
        sum = sum - discount;
    }
    console.log(sum);
}

//FUNCTION called DrinkOrder that takes 2 parameters {Size} & {drink}
function drinkOrder(size, drink){
    // VALIDATE the variables passed through
    if(size != 'small' && size != 'medium' && size != 'large'){
        console.log('You have ordered a size we don\'t sell');
        return;
    }
    let message = 'You have ordered a ' + size;
    // SWITCH {drink}
    switch(drink){
        case 'cola':
            message += ' Coca-Cola';
            break;
        case 'lemon':
            message += ' Schwepps';
            break;
        case 'orange':
            message += ' Tango';
            break;
        default:
            message = 'You have ordered a drink we don\'t sell';
            break;
    }
    // RETURN message
    console.log(message);
}

// drinkOrder('grande');
// drinkOrder('small','cola');
// drinkOrder('medium','orange');
// drinkOrder('large','lemon');
// drinkOrder('small','coffee');
// drinkOrder('small');

function calculator(num1,num2,operator){
    if(isNaNValidator(num1)){
        return 'Number 1 is not a number'; 
    }
    if(isNaNValidator(num2)){
        return 'Number 2 is not a number';
    }
    let sum;
    switch(operator){
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        default:
            return 'Operator is not recognised';
    }
    return sum;
}

function isNaNValidator(data){
    return isNaN(data);
}

let sum1 = calculator(10,2,'+');
let sum2 = calculator(10,2,'-');
let sum3 = calculator(10,2,'/');
let sum4 = calculator(10,2,'*');
let sum5 = calculator(10,2,'%');
let sum6 = calculator(1,'alex');
let sum7 = calculator('alex');
let sum8 = calculator(1,1,'alex');
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);
// console.log(sum6);
// console.log(sum7);
// console.log(sum8);

let arrRainbow = ['red','yellow','pink','green','purple','orange','blue'];

// console.log(arrRainbow);
// console.log(arrRainbow.length);


// console.log(arrRainbow[3]);
// arrRainbow[3] = 'black';
// console.log(arrRainbow[3]);

let arrProductData = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

// console.log(arrProductData);

// console.log(arrProductData[0]);

// let lastArrayKey = arrProductData.length - 1;

// console.log(arrProductData[4]);

let objProductData = {
    'productName':productName,
    'price':price,
    'quantity':quantity,
    'inStock':inStock,
    'discountAmount':discountAmount,
};

// console.log(objProductData);

objProductData['productName'] = 'light bulbs';

// console.log(objProductData.productName);

objProductData.alexExample1 = 'this is new data';

objProductData['alexExample2'] = 2;

// console.log(objProductData);

function outputTimesTables(number){
    for(
        counter=1;      //set counter as a variable
        counter<=12;    //continue to run loop whilst this is true
        counter++       //add 1 to counter after each iteration
    ){
        let sum = counter * number;
        let strMessage = counter + ' * ' + number + ' = ' + sum;
        // console.log(strMessage);
    }
}

for(multiplyer=1;multiplyer<=12;multiplyer++){
    outputTimesTables(multiplyer);
}

// console.log(shoppingCart);

function totalPriceOfShopping(shoppingCart,objCoupon=null){
    //LOOP through each item of the array
    let totalPrice = 0;
    for(arrayKey=0; arrayKey < shoppingCart.length; arrayKey++){
        let currentItem = shoppingCart[arrayKey];
        // console.log(currentItem);
        // Get the price of the current item and times it by the quantity
        let currentItemPrice = currentItem.quantity * currentItem.price;
        //if there is a coupon apply a discount to the current item
        let discount = 0;
        //If objCoupon has been passed as an argument and the type is not one that affects the total price
        if(objCoupon && objCoupon.type != 'basketTotal' && objCoupon.type != 'basketPercent'){
            currentItemPrice = applyDiscount(objCoupon.type,objCoupon.amount,currentItemPrice);
        }
        // console.log(currentItemPrice)
        // Add the sum to the totalPrice
        totalPrice += currentItemPrice;
    }
    //if the coupon type is to affect the whole basket
    if(objCoupon && (objCoupon.type == 'basketTotal' || objCoupon.type == 'basketPercent')){
        totalPrice = applyDiscount(objCoupon.type,objCoupon.amount,totalPrice);
    }
    //Return total price
    return totalPrice.toFixed(2);
}

function applyDiscount(type,amount,value){
    switch(type){
        case 'basketTotal':
        case 'flatFee':
            //take the amount off the total price
            value = value - amount;
            break;
        case 'basketPercent':
        case 'percentage':
            //work out the total percentage to be removed
            let discount = (value / 100) * amount;
            value = value - discount;
            break;
    }
    return value;
}

//categories = array filled with values of potential shopping basket types
//type = flatFee, percent, basketTotal, basketPercent
//amount = the amount to be subtracted
let objCoupon1 = {
    types:['toiletries','condiment'],
    type:'flatFee',
    amount:0.5,
};

let objCoupon2 = {
    types:['canned','snacks'],
    type:'percentage',
    amount:30,
};

let objCoupon3 = {
    types:[''],
    type:'basketTotal',
    amount:25,
};

let objCoupon4 = {
    types:[''],
    type:'basketPercent',
    amount:40,
};

let shoppingCartPrice = totalPriceOfShopping(shoppingCart);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon1);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon2);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon3);
console.log(shoppingCartPrice);
shoppingCartPrice = totalPriceOfShopping(shoppingCart,objCoupon4);
console.log(shoppingCartPrice);