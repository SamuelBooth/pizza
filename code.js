function calculatePizzaCost() {
    //How many Pizzas are you ordering?
    var amountOfPizzas = prompt("How many Pizzas are you ordering?");

    //convert to a number
    var amountOfPizzas = parseInt(amountOfPizzas);

    //How many toppings do you have?
    var amountOfToppings = prompt("How many toppings do you want?");

    //convert to a number
    var amountOfToppings = parseInt(amountOfToppings);

    //
    var numberOfPeopleSharingPrice = prompt("How many people will Split the cost of the pizza?")

    var numberOfPeopleSharingPrice =parseInt(numberOfPeopleSharingPrice);



    var costPerPizza = 15.00;




    var costOfToppings = 1.25;





    //find total gallons by dividing miles by MPG
    var totalPizzaCost = amountOfPizzas * costPerPizza + amountOfToppings * costOfToppings ;

    // find total gas cost by total gallons * $/gallon
    var totalCostPerPerson = totalPizzaCost / numberOfPeopleSharingPrice;

    // show user total pizza cost
    var totalPizzaFeeDisplay = totalPizzaCost;

    var totalCostPerPersonDisplay = totalCostPerPerson;




    // output total fee cost

    alert(`Your total for the pizza is $${totalPizzaFeeDisplay.toFixed(2)} and costs $${totalCostPerPersonDisplay.toFixed(2)} per person equally`);


}
