var voiture = {
    make: "BMW",
    model: "X6 xdrive 20i",
    year: 2024,
    start: function () {
        console.log("Enginestart");
    }
};
// Implémentation de la class Voiture et l'interface Vehicule
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Création de l'instance Car
var car = new Voiture("BMW", "X6 xdrive 20i", 2024);
// Affiche dans le terminal
console.log(car.make);
console.log(car.model);
console.log(car.year);
car.start();
