function cook(numberAsString, opr1, opr2, opr3, opr4, opr5){
    let number = Number(numberAsString);

    let operationArray = [opr1,opr2,opr3,opr4,opr5];

    operationArray.forEach(element => {
        if(element == 'chop'){
            number /= 2;
            console.log(number);
        }
        else if(element == 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }
        else if(element == 'spice'){
            number += 1;
            console.log(number);
        }
        else if(element == 'bake'){
            number *= 3;
            console.log(number);
        }
        else if(element == 'fillet'){
            number -= number * 0.20;
            console.log(number);
        }
    });
}

cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');