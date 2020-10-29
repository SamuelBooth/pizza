

$(document).ready(
    function () {
        $("#pizzaButton").click(calcPizza);
        $("#priceButton").click(showPopup);


        function calcPizza()
        {
            var numberOfPizzas = $("#numberOfPizzas").val();
            numberOfPizzas = parseFloat(numberOfPizzas);

            var amountOfToppings = $("#amountOfToppings").val();
            amountOfToppings = parseFloat(amountOfToppings);

            var costPerPerson = $("#numberOfPeopleSharing").val();
            costPerPerson = parseInt(costPerPerson);

            var costPerPizza = 15.00;

            var costOfToppings = 1.25;

            var totalPizzaCost = costPerPizza * numberOfPizzas  ;

            var totalToppingCost = costOfToppings * amountOfToppings;

            var totalPizza = totalPizzaCost + totalToppingCost;

            var totalCostPerPerson = costPerPerson / totalPizza;



            $("#priceOutput").text(totalPizza.toFixed(1));

            $("#costOutput").text(totalCostPerPerson.toFixed(2));

            $(".output").show();
        }
        function showPopup()
        {
            alert(`Your total for the pizza is $${totalPizzaDisplay.toFixed(2)} and costs $${totalCostPerPersonDisplay.toFixed(2)} per person equally`);
        }




    }
);

