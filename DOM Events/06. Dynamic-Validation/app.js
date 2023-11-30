function validate() {
    let pattern = /^[a-z]+@[a-z]+\.+[a-z]+$/g;
    let input = document.getElementById("email");
    input.addEventListener("change", isCorrect);


    function isCorrect(e){
        let currentText = e.currentTarget.value;
        
        if(!currentText.match(pattern)){
            e.currentTarget.classList.add("error");
        }
        else{
            e.currentTarget.classList.remove("error");
        }
    }
}