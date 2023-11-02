function findWord(word, text){
    word.toLowerCase();

    let textWordsArr = text.toLowerCase().split(" ");

    if(textWordsArr.includes(word)){
        return console.log(word);
    }

    console.log(`${word} not found!`)
}

findWord('python','JavaScript is the best programming language');