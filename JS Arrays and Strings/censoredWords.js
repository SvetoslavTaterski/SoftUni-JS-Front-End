function censor(text, word){

    while(text.includes(word))
    {
        text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text);
}

censor('Find the hidden word', 'hidden');