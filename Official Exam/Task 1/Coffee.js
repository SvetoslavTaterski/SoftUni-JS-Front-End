function solve (array){
  let numberOfBaristas = Number(array[0]);

  let baristasArray = [];
  
  for (let index = 1; index <= numberOfBaristas; index++) {
    let baristaInfo = array[index].split(" ");
    let baristaName = baristaInfo[0];
    let baristaShift = baristaInfo[1];
    let baristaCoffeesArray = baristaInfo[2].split(",");
    
    let newBarista = {
      name : baristaName,
      shift : baristaShift,
      coffees : baristaCoffeesArray
    }

    baristasArray.push(newBarista);
  }

  for (let index = numberOfBaristas + 1; index < array.length; index++) {
    let command = array[index].split(" / ")[0];

    if(command == "Prepare"){
      let baristaName = array[index].split(" / ")[1];
      let neededShift = array[index].split(" / ")[2];
      let neededCoffee = array[index].split(" / ")[3];

      let currentBarista = baristasArray.find(b => b.name == baristaName);

      if(currentBarista.shift == neededShift && currentBarista.coffees.some(c => c == neededCoffee)){
        console.log(`${currentBarista.name} has prepared a ${neededCoffee} for you!`);
      }
      else{
        console.log(`${currentBarista.name} is not available to prepare a ${neededCoffee}.`);
      }
    } 
    else if(command == "Change Shift"){
      let baristaName = array[index].split(" / ")[1];
      let changeShift = array[index].split(" / ")[2];

      let currentBarista = baristasArray.find(b => b.name == baristaName);

      currentBarista.shift = changeShift;

      console.log(`${baristaName} has updated his shift to: ${changeShift}`);
    }
    else if(command == "Learn"){
      let baristaName = array[index].split(" / ")[1];
      let newCoffeeType = array[index].split(" / ")[2];

      let currentBarista = baristasArray.find(b => b.name == baristaName);

      if(currentBarista.coffees.some(c => c == newCoffeeType)){
        console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
      }
      else{
        currentBarista.coffees.push(newCoffeeType);
        console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
      }
    }
    else if(command == "Closed"){
      baristasArray.forEach(barista => {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffees.join(", ")}`);
      });
    }
    
  }


}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    );