function printer(arr, num){
    let resultArr = [];

    for(let i = 0; i < arr.length; i += num){
        resultArr.unshift(arr[i]);
    }

    return resultArr.reverse();
}

printer(['1', '2','3', '4', '5'], 6);