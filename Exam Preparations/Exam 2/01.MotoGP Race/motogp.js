function solve(array) {
  let numberOfRacers = Number(array[0]);

  let racers = [];

  for (let index = 1; index <= numberOfRacers; index++) {
    let [name, fuel, position] = array[index].split("|");

    let newRacer = {
      name: name,
      fuel: Number(fuel),
      position: Number(position),
    };

    racers.push(newRacer);
  }

  for (let index = numberOfRacers + 1; index < array.length; index++) {
    let command = array[index].split(" - ")[0];

    if (command == "Finish") {
      racers.forEach((racer) => {
        console.log(`${racer.name}
                Final position: ${racer.position}`);
      });
    } else if (command == "StopForFuel") {
      let riderName = array[index].split(" - ")[1];
      let minimumFuel = Number(array[index].split(" - ")[2]);
      let changedPosition = array[index].split(" - ")[3];

      let currentRider = racers.find((r) => r.name == riderName);

      if (currentRider.fuel < minimumFuel) {
        console.log(
          `${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`
        );
        currentRider.position = changedPosition;
      } else {
        console.log(`${riderName} does not need to stop for fuel!`);
      }
    } else if (command == "Overtaking") {
      let firstRiderName = array[index].split(" - ")[1];
      let secondRiderName = array[index].split(" - ")[2];

      let firstRider = racers.find((r) => r.name == firstRiderName);
      let secondRider = racers.find((r) => r.name == secondRiderName);

      if (firstRider.position < secondRider.position) {
        console.log(`${firstRiderName} overtook ${secondRiderName}!`);

        let firstRiderPositionCopy = firstRider.position;
        firstRider.position = secondRider.position;
        secondRider.position = firstRiderPositionCopy;
      }
    } else if (command == "EngineFail") {
      let riderName = array[index].split(" - ")[1];
      let lapsLeft = Number(array[index].split(" - ")[2]);

      console.log(
        `${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
      );

      racers = racers.filter((r) => r.name != riderName);
    }
  }
}

solve([
  "4",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|3",
  "Jorge Lorenzo|80|4",
  "Johann Zarco|80|2",
  "StopForFuel - Johann Zarco - 90 - 5",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
