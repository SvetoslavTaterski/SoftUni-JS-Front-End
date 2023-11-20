function printCats(arrayOfCats){

    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    arrayOfCats.forEach(element => {
        let [catName, catAge] = element.split(" ");
        let newCat = new Cat(catName,catAge);
        newCat.meow();
    });
}

printCats(['Mellow 2', 'Tom 5']);