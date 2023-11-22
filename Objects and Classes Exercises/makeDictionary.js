function printTermsAndDefinitions(inputArray) {

    let dictionary = {};

    for (const stringItem of inputArray) {

        let jsonObject = JSON.parse(stringItem);
        let [key, value] = Object.entries(jsonObject)[0];
        dictionary[key] = value;

    }
    for (const [term, definition] of Object.entries(dictionary).sort()) {
        
        console.log(`Term: ${term} => Definition: ${definition}`);                  
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );