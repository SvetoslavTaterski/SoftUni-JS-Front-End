function convertToJson(firstName, lastName, hairColor){
    let object = {
        name : firstName,
        lastName : lastName,
        hairColor : hairColor
    };

    let objectAsJson = JSON.stringify(object);

    return objectAsJson;
}

console.log(convertToJson('George', 'Jones', 'Brown'));