function findSmallestNum(num1, num2, num3) {
  let smallestNum = Number.MAX_VALUE;
  let numbersArray = [num1, num2, num3];

  numbersArray.forEach((element) => {
    if (element < smallestNum) {
      smallestNum = element;
    }
  });

  console.log(smallestNum);
}

findSmallestNum(4, 21, 25);
findSmallestNum(2, 5, 3);
findSmallestNum(600, 342, 123);
findSmallestNum(2, 2, 2);
