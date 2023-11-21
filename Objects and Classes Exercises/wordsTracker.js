function printTrackedWords(array){
    let [wordsToTrack, ...sentence] = array;

    let words = [];

    class Word{
        constructor(wordName){
            this.wordName = wordName;
            this.wordCount = 0;
        }
    }

    wordsToTrack.split(" ").forEach(element => {
        let newWord = new Word(element);
        words.push(newWord);
    });

    sentence.forEach(wordInSentence => {
       let foundWord = words.find(word => word.wordName == wordInSentence);

       if(foundWord){
        foundWord.wordCount++;
       }
    });

    words.sort((a,b) => b.wordCount - a.wordCount).forEach(element => {
        console.log(`${element.wordName} - ${element.wordCount}`);
    });
}

printTrackedWords([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );