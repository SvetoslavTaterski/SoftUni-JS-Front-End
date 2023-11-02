function reveal(words, text) {
  let wordsArray = words.split(", ");
  let textWordsArray = text.split(" ");
  let result = '';

  for(let j = 0; j < wordsArray.length; j++)
  {
    for (let i = 0; i < textWordsArray.length; i++) 
    {
        if((wordsArray[j].length == textWordsArray[i].length)){
            if(textWordsArray[i].includes("*")){
                textWordsArray[i] = wordsArray[j];
                continue;
            }
        }
    }
  }

  for(let i = 0; i< textWordsArray.length; i++){
    result+= ` ${textWordsArray[i]}`
  }

  console.log(result.trimStart());
  
}

reveal('great','softuni is ***** place for learning new programming languages');
