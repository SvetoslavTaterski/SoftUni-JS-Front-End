function findSumOfOddAndEven(num){
    let numAsString = String(num);
    let oddSum = 0;
    let evenSum = 0;

    numAsString.split("").forEach(element => {
        if(element % 2 == 0)
        {
           evenSum += Number(element); 
        }
        else
        {
            oddSum += Number(element);
        }
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

findSumOfOddAndEven(3495892137259234);