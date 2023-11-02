function findSpecialWords(text) {
  let textWordsArray = text.split(" ");
  let regex = /\d/;

  for (let i = 0; i < textWordsArray.length; i++) {
    if (textWordsArray[i].startsWith("#") && !regex.test(textWordsArray[i])) 
    {
      let result = textWordsArray[i].slice(1, textWordsArray[i].length);

      if (result.length != 0) {
        console.log(result);
      }
      
    }
  }
}

findSpecialWords(
    'The symbol # is known #variously in English-speaking #regions as the #number sign'
);
