function colorize() {
    let allRows = document.getElementsByTagName("tr");

    for (let index = 0; index < allRows.length; index++) {
        
        if(index % 2 !== 0){
            allRows[index].style.backgroundColor = "teal";
        }
    }
    
}