function solve(num1, num2, operator) {
  let object = {
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
  };

  console.log(object[operator](num1, num2));
}

solve(5, 5, "multiply");
solve(40, 8, "divide");
solve(12, 19, "add");
solve(50, 13, "subtract");
