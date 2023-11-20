function printPhonenumbers(array){

    let objectOfNumbers = {};

    array.forEach(element => {
        let [name, phoneNumber] = element.split(' ');

        objectOfNumbers[name] = phoneNumber;
    });

    for (const key in objectOfNumbers) {
        console.log(`${key} -> ${objectOfNumbers[key]}`);
    }
}

printPhonenumbers(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);