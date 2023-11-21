function printMovies(array){

    let movies = [];

    array.forEach(element => {
        
        if(element.includes("addMovie")){
            
            let movieName = element.substring(9, element.length)

            let newMovie = {
                name : movieName,
            }

            movies.push(newMovie);
        }
        else if(element.includes("directedBy")){
            let [movieName, director] = element.split(" directedBy ");
            let movieIndex = movies.findIndex(movie => movie.name == movieName);

            if(movieIndex != -1){
                movies[movieIndex].director = director;
            }
        }
        else if(element.includes("onDate")){
            let [movieName, movieDate] = element.split(" onDate ");

            let movieIndex = movies.findIndex(movie => movie.name == movieName);

            if(movieIndex != -1){
                movies[movieIndex].date = movieDate;
            }
        }

    });

    movies.forEach(element => {

        if(element.hasOwnProperty("name") && element.hasOwnProperty("date") && element.hasOwnProperty("director")){

            console.log(JSON.stringify(element));

        }

    });
}

printMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]        
    );