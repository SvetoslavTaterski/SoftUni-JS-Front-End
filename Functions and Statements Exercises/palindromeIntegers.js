function isPalindrome(arrayOfNums){
    let arrayAsStrings = arrayOfNums.map(String);
    
    arrayAsStrings.forEach(element => {
        if(element == element.split("").reverse().join("")){
            console.log(true);
        }
        else{
            console.log(false);
        }
    });
}

isPalindrome([32,2,232,1010]);