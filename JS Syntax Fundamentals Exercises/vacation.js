function totalPriceCalculator(people, type, day) {
  let priceForPerson = 0;

  if (day == "Friday") {
    if (type == "Students") {
      priceForPerson = 8.45;
    } else if (type == "Business") {
      priceForPerson = 10.9;
    } else if (type == "Regular") {
      priceForPerson = 15;
    }
  } else if (day == "Saturday") {
    if (type == "Students") {
      priceForPerson = 9.8;
    } else if (type == "Business") {
      priceForPerson = 15.6;
    } else if (type == "Regular") {
      priceForPerson = 20;
    }
  } else if (day == "Sunday") {
    if (type == "Students") {
      priceForPerson = 10.46;
    } else if (type == "Business") {
      priceForPerson = 16;
    } else if (type == "Regular") {
      priceForPerson = 22.5;
    }
  }

  let priceForGroup = priceForPerson * people;

  if (people >= 30 && type == "Students") {
    priceForGroup -= priceForGroup * 0.15;
  } else if (people >= 100 && type == "Business") {
    priceForGroup -= priceForPerson * 10;
  } else if (people >= 10 && people <= 20 && type == "Regular") {
    priceForGroup -= priceForGroup * 0.05;
  }

  console.log(`Total price: ${priceForGroup.toFixed(2)}`);
}

totalPriceCalculator(30, "Students", "Sunday");
totalPriceCalculator(40, "Regular", "Saturday");

