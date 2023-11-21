function printHeroes(array){
    let heroes = []

    class Hero{
        constructor(name, level, weapons){
            this.name = name;
            this.level = level;
            this.weapons = weapons;
        }
    }

    array.forEach(element => {
        let [heroName, heroLevel, heroItems] = element.split(" / ");

        let newHero = new Hero(heroName,heroLevel,heroItems);
        heroes.push(newHero);
    });

    let sortedHeroes = heroes.sort((a,b) => a.level - b.level);

    sortedHeroes.forEach(element => {
        console.log(`Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.weapons}`)
    });
}

printHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );