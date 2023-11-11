function addAndSubstract(num1, num2, num3) {

    let sum = (x, y) => x+y;
    let substract = (result,z) => result-z;

    let result = substract(sum(num1,num2),num3);

    console.log(result);
}




addAndSubstract(23, 6, 10);
