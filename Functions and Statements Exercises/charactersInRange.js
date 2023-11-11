function charactersInRange(char1, char2){
    let firstCharAsNum = char1.charCodeAt(0);
    let secondCharAsNum = char2.charCodeAt(0);

    let result = "";

    if(firstCharAsNum > secondCharAsNum)
    {
        for(let i = secondCharAsNum++; secondCharAsNum < firstCharAsNum; secondCharAsNum++){
            result += ` ${String.fromCharCode(secondCharAsNum)}`;
        }
    } 
    else
    {
        for(let i = firstCharAsNum++; firstCharAsNum < secondCharAsNum; firstCharAsNum++){
            result += ` ${String.fromCharCode(firstCharAsNum)}`;
        }
    }

    console.log(result);
}

charactersInRange("a","d");
charactersInRange('#',':');
charactersInRange('C','#');