function deleteByEmail() {
  let tableInfo = document.querySelectorAll("td");
  let input = document.getElementsByName("email")[0].value;
  let result = document.getElementById("result");
  let notFound = true;

  Array.from(tableInfo).forEach(element => {
        if(element.textContent == input){
            element.parentNode.remove(element);
            result.textContent = "Deleted."
            notFound = false;
        }
  });

  if(notFound){
    result.textContent = "Not found.";
  }
}
