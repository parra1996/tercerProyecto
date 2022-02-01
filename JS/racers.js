
//Declaración de la clase Coche
class Coche {

    constructor(modelo, marca, velocidad, peso, frenada, combustible) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidad = velocidad;
        this.peso = peso;
        this.frenada = frenada;
        this.combustible = combustible;
        this.metros = 0;
    }

    acelerar() {
        return this.velocidad += 30;
    }

    frenar() {
        return this.velocidad = 0;
    }

};

//Instanciando corredores...

let coche1 = new Coche("Camaro","Chevrolet",280,2000,50,"Gasolina")
let coche2 = new Coche("Roadster","Tesla",350,1900,90,"Electrico");
let coche3 = new Coche("Agera"," Koenigsegg",270,2300,55,"Gasolina");
let coche4 = new Coche("Chiron","Bugatti",299,1750,90,"Diesel");


//Generando variables básicas de entorno

let allCars = [coche1,coche2,coche3,coche4];

let team1 = [];

let team2 = [];

let ganador = "";
