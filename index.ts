interface Vehicule {
    make: string,
    model: string,
    year: number,
    start(): void
}

const voiture: Vehicule = {
    make: "BMW",
    model: "X6 xdrive 20i",
    year: 2024,
    start() {
        console.log("Engine Started")
    }
}

console.log(voiture.make)
console.log(voiture.model)
console.log(voiture.year)
console.log(voiture.start())

class Voiture implements Vehicule {

    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {

        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine Started");
    }
    
}