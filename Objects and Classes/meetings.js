function meetings(array){
    
    let objectMeetings = {};

    array.forEach(element => {
        let [weekDay, person] = element.split(" ");

        if(!objectMeetings.hasOwnProperty(weekDay)){
            objectMeetings[weekDay] = person;
            console.log(`Scheduled for ${weekDay}`);
        }
        else{
            console.log(`Conflict on ${weekDay}!`);
        }
    });

    Object.entries(objectMeetings).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);