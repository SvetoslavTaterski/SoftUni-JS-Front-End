function priceCalculator(fruit,grams,pricePerKilo){
    let gramsAsKilo = grams / 1000;
    let totalPrice = pricePerKilo * gramsAsKilo;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${gramsAsKilo.toFixed(2)} kilograms ${fruit}.`);
}

priceCalculator('apple', 1563, 2.35);