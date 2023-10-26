function solve(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  numbers.sort(function (a, b) {
    return a - b;
  });
  console.log(`The largest number is ${numbers[2]}.`);
}

solve(5, -3, 16);
solve(-3,-5,-22.5);
