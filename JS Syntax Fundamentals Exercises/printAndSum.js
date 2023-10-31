function printSum(num1, num2){
    let sum = 0;
    let numbersAsString = "";

    for(let i = num1; i<=num2; i++){
        numbersAsString += `${i} `;
        sum += i;
    }

    console.log(numbersAsString);
    console.log(`Sum: ${sum}`);
}

printSum(50, 60);