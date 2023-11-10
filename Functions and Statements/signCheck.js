function checkSign(num1, num2, num3) {
  let countOfNegativeSigns = 0;
  let numbersArray = [num1, num2, num3];

  for (let i = 0; i < 3; i++) {
    if (numbersArray[i] < 0) {
      countOfNegativeSigns++;
    }
  }

  if (countOfNegativeSigns % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

checkSign(5,
    12,
   -15
   );
