function printProducts(arrayOne,arrayTwo){
    
    class Product{
        constructor(productName,quantity){
            this.productName = productName;
            this.quantity = Number(quantity);
        }
    }

    let products = [];

    for (let index = 0; index < arrayOne.length; index+=2) {
        
        let newProduct = new Product(arrayOne[index],arrayOne[index + 1]);

        products.push(newProduct);
        
    }

    for (let index = 0; index < arrayTwo.length; index+=2) {
        
        let newProduct = new Product(arrayTwo[index],arrayTwo[index + 1]);

        let isFound = products.findIndex(product => product.productName == newProduct.productName);

        if(isFound != -1){
            products[isFound].quantity += newProduct.quantity;
        } else{
            products.push(newProduct);
        }
        
    }


    products.forEach(element => {
        console.log(`${element.productName} -> ${element.quantity}`);
    });
}

printProducts([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]    
    );