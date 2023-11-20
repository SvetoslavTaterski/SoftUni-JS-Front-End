function convertToObject(stringAsJson){
    let stringAsObject = JSON.parse(stringAsJson);

    Object.entries(stringAsObject).forEach(element => {
        let [key, value] = element;

        console.log(`${key}: ${value}`);
    });
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');