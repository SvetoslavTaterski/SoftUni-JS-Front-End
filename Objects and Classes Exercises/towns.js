function printTownInfo(array){

    let townsInfo = [];
    
    class Town{
        constructor(townName, latitude, longitude){
            this.town = townName;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    array.forEach(element => {
        let [townName, latitude, longitude] = element.split(" | ");

        let newTown = new Town(townName,Number(latitude).toFixed(2),Number(longitude).toFixed(2));
        townsInfo.push(newTown);
    });

    townsInfo.forEach(element => {
        console.log(`{ town: '${element.town}', latitude: '${element.latitude}', longitude: '${element.longitude}' }`);
    });
}

printTownInfo(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);