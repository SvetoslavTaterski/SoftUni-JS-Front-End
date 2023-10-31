function radar(speed, area){
    let limit = 0;

    if(area == "motorway"){
        limit = 130;
    } else if(area == "interstate"){
        limit = 90;
    } else if(area == "city"){
        limit = 50;
    } else if(area == "residential"){
        limit = 20;
    }

    if(speed <= limit){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } 
    else
    {
        let speedingStatus = "";

        if(speed - limit > 0 && speed - limit <= 20){
            speedingStatus = "speeding";
        }
        else if(speed - limit > 20 && speed - limit <= 40){
            speedingStatus = "excessive speeding";
        }
        else if(speed - limit > 40){
            speedingStatus = "reckless driving";
        }

        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${speedingStatus}`);
    }
}

radar(200, 'motorway');