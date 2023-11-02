function reverseArr(num,arr){
    let arrayCopy = [];
    let result = '';
    
    for(let i = 0; i < num; i++ ){
        arrayCopy[i] = arr[i];
    }

    arrayCopy.reverse();

    for(let i = 0; i < arrayCopy.length; i++){
        result += ` ${arrayCopy[i]}`
    }

    console.log(result);
}

reverseArr(3, [10, 20, 30, 40, 50]);