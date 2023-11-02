function rotate(array, n){
    let result = '';

    for(let i = 0; i < n; i++){
        array.push(array.shift());
    }

    for(let i = 0; i < array.length; i++){
        result += ` ${array[i]}`
    }

    console.log(result);
}

rotate([51, 47, 32, 61, 21], 2);