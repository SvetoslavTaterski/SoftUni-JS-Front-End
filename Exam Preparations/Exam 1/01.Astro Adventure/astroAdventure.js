function showAstronautInfo(array) {
  let numberOfAstronauts = array[0];

  let astronauts = [];

  for (let index = 1; index <= numberOfAstronauts; index++) {
    let [name, oxygen, energy] = array[index].split(" ");

    let newAstronaut = {
      name: name,
      oxygen: Number(oxygen),
      energy: Number(energy),
    };

    astronauts.push(newAstronaut);
  }

  let startOfCommands = Number(numberOfAstronauts) + 1;

  for (let index = startOfCommands; index < array.length; index++) {
    let command = array[index].split(" - ")[0];

    if (command == "End") {
      astronauts.forEach((astronaut) => {
        console.log(
          `Astronaut: ${astronaut.name}, Oxygen: ${astronaut.oxygen}, Energy: ${astronaut.energy}`
        );
      });
    } else if (command == "Explore") {
      let astronautName = array[index].split(" - ")[1];
      let astronautEnergyNeeded = Number(array[index].split(" - ")[2]);

      let currentAstronaut = astronauts.find((a) => a.name == astronautName);

      if (currentAstronaut.energy >= astronautEnergyNeeded) {
        currentAstronaut.energy -= astronautEnergyNeeded;
        console.log(
          `${currentAstronaut.name} has successfully explored a new area and now has ${currentAstronaut.energy} energy!`
        );
      } else {
        console.log(
          `${currentAstronaut.name} does not have enough energy to explore!`
        );
      }
    } else if (command == "Refuel") {
      let astronautName = array[index].split(" - ")[1];
      let astronautEnergyToRefuel = Number(array[index].split(" - ")[2]);

      let currentAstronaut = astronauts.find((a) => a.name == astronautName);

      let amountEnergyRecovered = astronautEnergyToRefuel;

      if (currentAstronaut.energy + astronautEnergyToRefuel > 200) {
        let rest = currentAstronaut.energy + astronautEnergyToRefuel - 200;
        amountEnergyRecovered -= rest;
        currentAstronaut.energy = 200;
      } else {
        currentAstronaut.energy += astronautEnergyToRefuel;
      }

      console.log(
        `${currentAstronaut.name} refueled their energy by ${amountEnergyRecovered}!`
      );
    } else if (command == "Breathe") {
      let astronautName = array[index].split(" - ")[1];
      let astronautOxygenToRefuel = Number(array[index].split(" - ")[2]);

      let currentAstronaut = astronauts.find((a) => a.name == astronautName);

      let amountOxygenRecovered = astronautOxygenToRefuel;

      if (currentAstronaut.oxygen + astronautOxygenToRefuel > 100) {
        let rest = currentAstronaut.oxygen + astronautOxygenToRefuel - 100;
        amountOxygenRecovered -= rest;
        currentAstronaut.oxygen = 100;
      } else {
        currentAstronaut.oxygen += astronautOxygenToRefuel;
      }

      console.log(
        `${currentAstronaut.name} took a breath and recovered ${amountOxygenRecovered} oxygen!`
      );
    }
  }
}

showAstronautInfo([
  "4",
  "Alice 60 100",
  "Bob 40 80",
  "Charlie 70 150",
  "Dave 80 180",
  "Explore - Bob - 60",
  "Refuel - Alice - 30",
  "Breathe - Charlie - 50",
  "Refuel - Dave - 40",
  "Explore - Bob - 40",
  "Breathe - Charlie - 30",
  "Explore - Alice - 40",
  "End",
]);
