function printAddressBook(array){
    let objectOfAddresses = {};

    array.forEach(element => {
        let [personName,addres] = element.split(":");

        objectOfAddresses[personName] = addres;
    });



    Object.entries(objectOfAddresses).sort().forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`)
    });
}

printAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

);