function addItem() {
  let inputText = document.getElementById("newItemText");
  let inputValue = document.getElementById("newItemValue");

  let newOption = document.createElement("option");
  newOption.textContent = inputText.value;
  newOption.value = inputValue.value;

  let menu = document.getElementById("menu");

  if (inputText.value !== "" && inputValue.value !== "") {
    menu.appendChild(newOption);
  }

  inputText.value = "";
  inputValue.value = "";
}
