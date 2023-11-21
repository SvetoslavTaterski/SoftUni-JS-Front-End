function writeEmployeesInfo(array){

    let employeeInfo = [];

    class Employee{
        constructor(fullname,employeeNum){
            this.fullname = fullname;
            this.employeeNum = employeeNum;
        }
    }

    array.forEach(element => {
        let newEmployee = new Employee(element, element.length)
        employeeInfo.push(newEmployee);
    });

    employeeInfo.forEach(element => {
        console.log(`Name: ${element.fullname} -- Personal Number: ${element.employeeNum}`);
    });
    
}

writeEmployeesInfo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );