function focused() {
    let inputFields = Array.from(document.getElementsByTagName("input"));

    inputFields.forEach(element => {
        element.addEventListener("focus",inElement);
        element.addEventListener("blur",outElement);
    });

    function inElement(e){
        e.currentTarget.parentNode.classList.add("focused");
    }

    function outElement(e){
        e.currentTarget.parentNode.classList.remove("focused");
    }
}