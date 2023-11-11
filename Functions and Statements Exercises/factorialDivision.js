function solve(num1, num2){
    let firstNumTotal = num1;
    let secondNumTotal = num2;

    while(num1 != 1)
    {
      num1--;  
      firstNumTotal *= num1;
    }

    while(num2 != 1)
    {
      num2--;
      secondNumTotal *= num2;
    }

    console.log((firstNumTotal / secondNumTotal).toFixed(2));
}

solve(6,2);