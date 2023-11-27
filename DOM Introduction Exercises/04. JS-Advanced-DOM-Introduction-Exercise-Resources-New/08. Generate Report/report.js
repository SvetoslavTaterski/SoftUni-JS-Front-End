function generateReport() {
    let checkboxes = Array.from(document.querySelectorAll("table thead tr th input"));
    let tableData = Array.from(document.querySelectorAll("table tbody tr"));
    let output = document.getElementById("output");
    let resultArray = [];

    for (const data of tableData) {
        let allData = Array.from(data.children)
        let rowObj = {};

        for (let index = 0; index < checkboxes.length; index++) {
            if(checkboxes[index].checked){
                let name = checkboxes[index].getAttribute("name");
                rowObj[name] = allData[index].textContent;
            }
            
        }
        resultArray.push(rowObj);
    }

    output.value = JSON.stringify(resultArray);
}