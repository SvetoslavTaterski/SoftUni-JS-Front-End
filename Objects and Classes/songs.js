function printSongs(array){
    let[numberOfSongs, ...arrayOfSongsInfo] = array;
    let lastElement = arrayOfSongsInfo[arrayOfSongsInfo.length - 1];

    let arrayOfSongs = [];

    class Song{
        constructor(typeList, name, time){
            this.type = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let index = 0; index < numberOfSongs; index++) {
        let [type, name, time] = arrayOfSongsInfo[index].split("_");

        let newSong = new Song(type,name,time);
        arrayOfSongs.push(newSong);
    }

    if(lastElement == "all"){
        arrayOfSongs.forEach(element => {
            console.log(element.name);
        });
    }

    arrayOfSongs.forEach(element => {

        if(element.type == lastElement){
            console.log(element.name);
        }
    });

}

printSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']      
    );