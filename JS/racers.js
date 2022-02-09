
//Declaración de la clase Coche
class Coche {

    constructor(modelo, marca, velocidad, frenada,metros) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidad = velocidad;
        this.frenada = frenada;
        this.metros = metros;
    }

    acelerar() {
        return this.metros += 100;
      
    }

    frenar() {
        return this.metros -= 35;
        
    }

};


let coche1 = new Coche("Camaro","Chevrolet",280,85,0)
let coche2 = new Coche("Roadster","Tesla",295,80,0);
let coche3 = new Coche("Agera","Koenigsegg",290,95,0);
let coche4 = new Coche("Chiron","Bugatti",299, 90,0);

/////genero un traductor/ diccionario de js

let allCars = {
    1 : coche1,
    2 : coche2,
    3 : coche3,
    4 : coche4
}

//Generando variables básicas de entorno

let team1 = "";

let team2 = "";


