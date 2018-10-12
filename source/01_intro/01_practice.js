//pizza order demo - a completely useless program! 

const TAX_RATE = 0.18;
const PIZZA_PRICE = 49.99;
const TOPPING_PRICE = 5.99;
const MUNCH_THRESHOLD = 60;

var accountBalance = Math.random() * 1000;
var numPizzas = 0;
const initial_balance = accountBalance;

function calcTotalPrice(amount){
    return amount += amount * TAX_RATE;
}

function buyPizza() {
    totalPizzaPrice = calcTotalPrice(PIZZA_PRICE); 
    if (accountBalance < totalPizzaPrice){
        console.log("There is not enough money to buy pizza!")
        return 
    }
    accountBalance -= totalPizzaPrice;
    numPizzas++
    console.log("You got a pizza!");
}

function addToppings(){
    var munchBalance = 0
    var totalToppingPrice = calcTotalPrice(TOPPING_PRICE);
    while (accountBalance >= totalToppingPrice && munchBalance < MUNCH_THRESHOLD){
        accountBalance -= totalToppingPrice;
        munchBalance += totalToppingPrice;
        console.log("You got a topping!");
    }
}

while(accountBalance >= PIZZA_PRICE) {
    buyPizza();
    addToppings();
}

console.log(`\nInitial blance: ${initial_balance.toFixed(2)}$`)
console.log(`Total pizzas bought: ${numPizzas}`)
console.log(`Current balance: ${accountBalance.toFixed(2)}$`)

msg = (numPizzas > 4) ? `Hope you invited friends!` : `Better eat alone in your room`
console.log(msg)
