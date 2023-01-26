function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {}
    Pizza.crustType = crustType
    Pizza.sauceType = sauceType
    Pizza.cheeses = cheeses
    Pizza.toppings = toppings
    return Pizza
}
var pizzaPepperoni = pizzaOven("deep dish","traditional", ["mazzarella"], ["pepperoni", "sausage"])
var pizzaMarinara = pizzaOven("hand tossed","marinara", ["mazzarella", "feta"], ["mushrooms", "olives", "onions"])

console.log(pizzaPepperoni);
console.log('====================================');
console.log(pizzaMarinara);

var meatPizza = pizzaOven("deep dish","homemade", ["gooey cheese"], ["pepperoni", "bacon", "sausage"])
var chickenPizza = pizzaOven("deep dish","traditional", ["mazzarella", "parmesan"], ["chicken", "sausage"])

console.log('====================================');
console.log(meatPizza);
console.log('====================================');
console.log(chickenPizza);



