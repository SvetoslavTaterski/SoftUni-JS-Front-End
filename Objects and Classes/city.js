function cityInfo({ name, area, population, country, postCode }) {
  let city = {
    name: name,
    area: area,
    population: population,
    country: country,
    postCode: postCode,
  };

  Object.entries(city).forEach((element) => {
    let [key, value] = element;
    console.log(`${key} -> ${value}`);
  });
}

cityInfo({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
