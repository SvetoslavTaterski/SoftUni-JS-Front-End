window.addEventListener("load", solve);

function solve() {
  const nextButton = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");
  const [studentName,studentUniversity,studentScore] = 
  document.getElementsByTagName("input");

  nextButton.addEventListener("click", addStudent);

  function addStudent(){

    if(studentName.value != "" && studentUniversity.value != "" && studentScore.value != ""){
      let newLi = document.createElement("li");
      newLi.className = "application";

      let newArticle = document.createElement("article");
      newLi.appendChild(newArticle);

      let h4Name = document.createElement("h4");
      h4Name.textContent = studentName.value;
      newArticle.appendChild(h4Name);

      let pUniversity = document.createElement("p");
      pUniversity.textContent = `University: ${studentUniversity.value}`;
      newArticle.appendChild(pUniversity);

      let pScore = document.createElement("p");
      pScore.textContent = `Score: ${studentScore.value}`;
      newArticle.appendChild(pScore);

      let newEditButton = document.createElement("button");
      newEditButton.addEventListener("click", (e) => {
        let element = e.currentTarget.parentNode.parentNode;
        let elementsToChange = element.querySelector("li article").children;
        let elementsToArray = Array.from(elementsToChange);

        let nameToChange = elementsToArray[0].textContent;
        let universityToChange = elementsToArray[1].textContent.split(" ")[1];
        let scoreToChange = elementsToArray[2].textContent.split(" ")[1];

        studentName.value = nameToChange;
        studentUniversity.value = universityToChange;
        studentScore.value =scoreToChange;
        
        e.currentTarget.parentNode.remove();
        
        nextButton.disabled = false;

      });
      newEditButton.textContent = "edit";
      newEditButton.classList.add("action-btn","edit");
      newLi.appendChild(newEditButton);

      let newApplyButton = document.createElement("button");
      newApplyButton.addEventListener("click", (e) =>{
        let element = e.currentTarget.parentNode;
        
        candidatesList.appendChild(element);

        element.querySelector("button").remove();
        element.querySelector("button").remove();

        nextButton.disabled = false;
      })
      newApplyButton.textContent = "apply";
      newApplyButton.classList.add("action-btn","apply");
      newLi.appendChild(newApplyButton);

      previewList.appendChild(newLi);

      studentName.value = "";
      studentUniversity.value = "";
      studentScore.value = "";

      nextButton.disabled = true;
    }
  }
}
