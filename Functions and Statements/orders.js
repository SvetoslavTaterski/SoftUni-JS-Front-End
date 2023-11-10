function calculateOrders(order, quantity){
    let price = 0;

    if(order == "coffee"){
        price = 1.50;
    }
    else if(order == "coke"){
        price = 1.40;
    }
    else if(order == "water"){
        price = 1.00
    }
    else if(order == "snacks"){
        price = 2.00
    }

    console.log((price*quantity).toFixed(2));
}

calculateOrders("water", 5);
calculateOrders("coffee", 2);