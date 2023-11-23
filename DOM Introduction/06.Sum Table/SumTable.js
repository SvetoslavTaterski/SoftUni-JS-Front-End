function sumTable() {
    let allRows = document.getElementsByTagName("td");
    let sum = 0;

    for (let index = 0; index < allRows.length; index++) {
        
        if(index % 2 !== 0){
            sum += Number(allRows[index].textContent);
        }
        
    }

    let total = document.getElementById("sum");
    total.textContent = sum;
}