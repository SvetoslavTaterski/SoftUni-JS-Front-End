function create(words) {

   let result = document.getElementById("content");
   
   words.forEach(word => {
      
      let newDiv = document.createElement("div");
      newDiv.addEventListener("click",showParagraph);

      let newParagraph = document.createElement("p");
      newParagraph.textContent = word;
      newParagraph.style.display = "none";

      newDiv.appendChild(newParagraph);

      result.appendChild(newDiv);
   });

   function showParagraph(event){
      let target = event.target;
      let currentParagraph = target.querySelector("p");
      currentParagraph.style.display = "block";
   }
}