function printCarsInGarage(array){
    let carsInGarage = [];

    array.forEach(element => {
        let [command,carNumber] = element.split(", ");

        if(command == "IN"){
            if(!carsInGarage.includes(carNumber)){
                carsInGarage.push(carNumber);
            }
        }
        else if(command == "OUT"){

            if(carsInGarage.includes(carNumber)){
                let indexOfCarToRemove = carsInGarage.findIndex(car => car == carNumber);

                carsInGarage.splice(indexOfCarToRemove,1);
            }
        }
    });

    if(carsInGarage.length > 0){
        let sortedCarsInGarage = carsInGarage.sort();

        sortedCarsInGarage.forEach(element => {
            console.log(element);
        });

    } else{
        console.log(`Parking Lot is Empty`);
    }
}

printCarsInGarage(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);