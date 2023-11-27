function search() {
   let searchText = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let towns = document.getElementsByTagName("li");
   let matchesCounter = 0;

   for (const town of towns) {
      town.style.textDecoration = "";
      town.style.fontWeight = "";
   }

   for (const town of towns) {
      
      if(town.textContent.includes(searchText)){
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         matchesCounter++;
      }
   }

   result.textContent = `${matchesCounter} matches found`;
}
