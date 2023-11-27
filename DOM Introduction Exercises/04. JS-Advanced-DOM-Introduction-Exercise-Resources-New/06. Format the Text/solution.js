function solve() {
  let text = document.getElementById("input").value;
  let output = document.getElementById("output");
  let sentences = text.split(".")
                      .filter((sentence) => sentence.length > 1)
                      .map(s => s+=".");

                      
  while(sentences.length > 0){                      
    let paragraph = document.createElement("p");

    paragraph.textContent = sentences.splice(0,3).join("");

    output.appendChild(paragraph);
  }
}
