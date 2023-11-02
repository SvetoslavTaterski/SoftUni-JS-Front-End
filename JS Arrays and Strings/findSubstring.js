function findSubstring(string, num1, num2){
    let result;
    
    result = string.substring(num1,num2 + num1);

    console.log(result);
}


findSubstring('ASentence', 1, 8);
findSubstring('SkipWord', 4, 7);