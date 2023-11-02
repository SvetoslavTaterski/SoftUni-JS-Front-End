function count(text,word){
    let arrayOfWords = text.split(" ");
    let count = 0;

    arrayOfWords.forEach(element => {
        if(element == word){
            count++;
        }
    });

    console.log(count);
}

count('softuni is great place for learning new programming languages',
'softuni'
);