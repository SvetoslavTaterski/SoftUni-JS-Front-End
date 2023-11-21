function printOddOccurrances(array){
    let arrayToLower = array.toLowerCase().split(" ");
    
    class Word{
        constructor(name){
            this.name = name;
            this.count = 0;
        }
    }

    let words = [];

    arrayToLower.forEach(element => {
        let foundWord = words.find(word => word.name == element);

        if(foundWord){
            foundWord.count++;
        }
        else{
            let newWord = new Word(element);
            words.push(newWord);
        }
    });

    let result = "";

    words.forEach(element => {
        if(element.count % 2 == 0){
            result += element.name + " ";
        }
    });

    console.log(result.trimEnd());
}

printOddOccurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');