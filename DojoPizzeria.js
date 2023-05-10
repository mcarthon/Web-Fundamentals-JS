function pizzaOven(crustType, sauceType, cheeses, toppings) {

    let pizza = {};

    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses   = cheeses;
    pizza.toppings  = toppings;

    return pizza;

}

let pepPizza = pizzaOven("deep dish", "tradtional", ["mozzarella"], ["pepperoni", "sausage"]);

let vegPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

let myPizza = pizzaOven("deep dish", "marinara", ["mozzarella"], ["pepperoni", "sausage"]);

let yourPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["pepperoni", "olives", "onions"]);

function randomPizza() {

    let crustTypes = ["deep dish", "hand tossed"];
    let sauceTypes = ["tradtional", "marinara"];
    let cheeseTypes = ["mozzarella", "feta"];
    let toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions"];

    let randomCrustIndex = Math.round(Math.random());
    let randomSauceIndex = Math.round(Math.random());
    let randomCheeseIndex = Math.round(Math.random());
    let randomToppingsIndex = Math.round(Math.random() * 4);

    console.log(pizzaOven(crustTypes[randomCrustIndex], sauceTypes[randomSauceIndex], cheeseTypes[randomCheeseIndex], toppings[randomToppingsIndex]));

}

randomPizza();