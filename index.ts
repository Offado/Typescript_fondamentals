// Création de l'interface Vehicule
interface Vehicule {
    make: string,
    model: string,
    year: number,
    start(): void;
}

const voiture: Vehicule= {
    make: "BMW",
    model:"X6 xdrive 20i",
    year: 2024,
    start() {
        console.log("Enginestart");
    }
}
// Implémentation de la class Voiture et l'interface Vehicule
class Voiture implements Vehicule {

    make: string;
    model: string;
    year: number;

    constructor(make:string, model:string, year:number) {
        
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log("Car engine started");
    }
}

// Création de l'instance Car
const car = new Voiture("BMW", "X6 xdrive 20i", 2024)

// Affiche dans le terminal
console.log(car.make);
console.log(car.model);
console.log(car.year);
car.start();