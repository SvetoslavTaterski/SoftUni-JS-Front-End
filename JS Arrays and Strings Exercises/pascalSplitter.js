function pascalSplitter(word){
    let regex = /[A-Z][a-z]*/g;

    let result = word.match(regex);

    console.log(result.join(", "));
}

pascalSplitter('HoldTheDoor');