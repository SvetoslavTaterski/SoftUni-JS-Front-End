function solve() {
  let text = (document.getElementById("text").value).toLowerCase();

  let convention = document.getElementById("naming-convention").value;

  let result = document.getElementById("result");

  if(convention === "Camel Case"){
    let words = text.split(" ");
    let resultWord = "";

    for (let index = 0; index < words.length; index++) {
      
      if(index == 0){
        resultWord += words[index];
      } else{
        resultWord += words[index][0].toUpperCase() + words[index].substring(1,words[index].length);
      }
      
      result.textContent = resultWord;
    }
  } else if(convention === "Pascal Case"){
    let words = text.split(" ");
    let resultWord = "";

    for (let index = 0; index < words.length; index++) {
      resultWord += words[index][0].toUpperCase() + words[index].substring(1,words[index].length);
    }

    result.textContent = resultWord;

  } else{
    result.textContent = "Error!";
  }
}