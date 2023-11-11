function solve(num)
{
    let divisorsSum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisorsSum += i;
        }        
    }
    if (num === divisorsSum && divisorsSum !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6);