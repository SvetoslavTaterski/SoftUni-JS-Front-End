function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchInfo = document.getElementById("searchField");
      let rowInfo = document.querySelectorAll("tbody tr");
      
      for (const row of rowInfo) {
         row.className = "";
      }

      for (const row of rowInfo) {
         
         if(row.innerHTML.includes(searchInfo.value) && searchInfo.value != ""){
            row.className = "select";
         }

      }
   }
}