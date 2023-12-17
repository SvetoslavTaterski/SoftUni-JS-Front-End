window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  const previewList = document.getElementById("preview-list");
  const expenseList = document.getElementById("expenses-list");
  const deleteButton = document.getElementsByClassName("btn delete")[0];
  const [expenseInput, amountInput, dateInput] =
    document.getElementsByTagName("input");

  addButton.addEventListener("click", () => {
    if (
      expenseInput.value != "" &&
      amountInput.value != "" &&
      dateInput.value != ""
    ) {
      let newLi = document.createElement("li");
      newLi.className = "expense-item";

      let newArticle = document.createElement("article");

      let newPType = document.createElement("p");
      newPType.textContent = `Type: ${expenseInput.value}`;

      let newPAmount = document.createElement("p");
      newPAmount.textContent = `Amount: ${amountInput.value}$`;

      let newPDate = document.createElement("p");
      newPDate.textContent = `Date: ${dateInput.value}`;

      newArticle.appendChild(newPType);
      newArticle.appendChild(newPAmount);
      newArticle.appendChild(newPDate);

      newLi.appendChild(newArticle);

      let newDiv = document.createElement("div");
      newDiv.className = "buttons";

      let editButton = document.createElement("button");
      editButton.addEventListener("click", (e) =>{
        let element = e.currentTarget.parentNode.parentNode;
        
        expenseInput.value = newPType.textContent.split(" ")[1];
        amountInput.value = newPAmount.textContent.split(" ")[1].slice(0,-1);
        dateInput.value = newPDate.textContent.split(" ")[1];

        element.remove();

        addButton.disabled = false;

      });
      editButton.classList.add("btn","edit");
      editButton.textContent = "edit";
      newDiv.appendChild(editButton);

      let okButton = document.createElement("button");
      okButton.addEventListener("click", (e) => {
          let liElement = e.currentTarget.parentNode.parentNode;

          let buttonElements = e.currentTarget.parentNode;
          buttonElements.remove();

          expenseList.appendChild(liElement);

          addButton.disabled = false;

      });
      okButton.classList.add("btn","ok");
      okButton.textContent = "ok";
      newDiv.appendChild(okButton);

      newLi.appendChild(newDiv);

      previewList.appendChild(newLi);

      addButton.disabled = true;

      expenseInput.value = "";
      amountInput.value = "";
      dateInput.value = "";
    }
  });

  deleteButton.addEventListener("click", () => {
    window.location.reload();
  });
}
