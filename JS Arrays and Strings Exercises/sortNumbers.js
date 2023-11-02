function sortNumbers(arr) {
  let sortedArray = arr.sort((a, b) => a - b);
  let resultArray = [];

  while (sortedArray.length > 0) {
    resultArray.push(sortedArray.shift());

    if(sortedArray.length > 0){
        resultArray.push(sortedArray.pop());
    }
  }

  return resultArray;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
