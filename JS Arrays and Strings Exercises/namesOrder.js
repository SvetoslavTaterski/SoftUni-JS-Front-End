function orderNames(arr) {
  let orderedArray = arr.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < orderedArray.length; i++) {
    console.log(`${i+1}.${orderedArray[i]}`);
  }
}

orderNames(["John", "Bob", "Christina", "Ema"]);
