function solve(number) {
  let numberAsString = number + "";
  let sum = 0;
  let flag = true;

  for (let i = 0; i < numberAsString.length; i++) 
  {
    if(numberAsString[i + 1] < numberAsString.length)
    {
        if (numberAsString[i] == numberAsString[i + 1]) 
        {
            flag = true;
        } 
            else 
        {
            flag = false;
        }
    }

    sum += Number(numberAsString[i]);
  }

  console.log(flag);
  console.log(sum);
}

solve(1234);
