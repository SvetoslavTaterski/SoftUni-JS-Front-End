function toggle() {
    let button = document.getElementsByClassName("button")[0];

    let hiddenParagraph = document.getElementById("extra");

    if(button.textContent === "More"){
        button.textContent = "Less";
        hiddenParagraph.style.display = "block";
    } else if(button.textContent === "Less"){
        button.textContent = "More";
        hiddenParagraph.style.display = "none";
    }
}