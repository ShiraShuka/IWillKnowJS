//tax rate," "phone price," "accessory price," and "spending threshold,"
// Write a program to calculate the total price of your phone purchase. 
/*You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
You'll also buy accessories for each phone as long as your purchase amount is below your mental 
spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase
 amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending 
threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding 
to two decimal places.*/

const TAX_RATE = 0.18;
const PIZZA_PRICE = 49.99;
const TOPPING_PRICE = 9.99;
const MUNCH_THRESHOLD = 60;

const initial_balance = Math.random() * 1000;

var account_balance = initial_balance;
var num_pizzas = 0;

function buyPizza() {
    if (account_balance < PIZZA_PRICE){
        console.log("There is not enough money to buy pizza!")
        return 
    }
    account_balance -= PIZZA_PRICE;
    num_pizzas++
    console.log("You got a pizza!");
}

function addToppings(){
    var munch_balance = 0
    while (account_balance >= TOPPING_PRICE && munch_balance < MUNCH_THRESHOLD){
        account_balance -= TOPPING_PRICE;
        munch_balance += TOPPING_PRICE;
        console.log("You got a topping!");
    }
}

while(account_balance >= PIZZA_PRICE) {
    buyPizza();
    addToppings();
}

console.log(`\nInitial blance: ${initial_balance.toFixed(2)}$`)
console.log(`Total pizzas bought: ${num_pizzas}`)
console.log(`Current balance: ${account_balance.toFixed(2)}$`)

msg = (num_pizzas > 4) ? `Hope you invited friends!` : `Better eat alone in your room`
console.log(msg)
