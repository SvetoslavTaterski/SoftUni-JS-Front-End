function addItem() {
    let ul = document.querySelectorAll("#items")[0];
    let input = document.getElementById("newItemText");

    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    ul.appendChild(newLi);
    
}