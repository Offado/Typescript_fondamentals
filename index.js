// Implémentation de l'interface Véhicule
var voiture = {
    make: "BMW",
    model: "X6 xdrive 20i",
    year: 2024,
    start: function () {
        console.log("Engine Started");
    }
};
console.log(voiture.make);
console.log(voiture.model);
console.log(voiture.year);
voiture.start();
var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine Started");
    };
    return Voiture;
}());
