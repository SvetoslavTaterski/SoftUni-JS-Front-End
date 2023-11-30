function addItem() {
    let ul = document.querySelectorAll("#items")[0];
    let input = document.getElementById("newItemText");

    let a = document.createElement("a");
    a.textContent = "[Delete]";
    a.href = "#"
    a.addEventListener("click",DeleteElement);

    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    newLi.appendChild(a);

    ul.appendChild(newLi);

    function DeleteElement(){
        newLi.remove();
    }
}