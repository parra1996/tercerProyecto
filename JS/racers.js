
//Declaración de la clase Coche
class Coche {

    constructor(modelo, marca, velocidad, peso, frenada, combustible,metros) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidad = velocidad;
        this.peso = peso;
        this.frenada = frenada;
        this.combustible = combustible;
        this.metros = metros;
    }

    acelerar() {
        return this.metros += 100;
      
    }

    frenar() {
        return this.metros -= 10;
        
    }

};

//Instanciando corredores...

// let coche1 = new Coche("Modelo: Camaro","Marca: Chevrolet","Velocidad: 280","Peso: 2000","Frenada: 85","Gasolina")
// let coche2 = new Coche("Modelo: Roadster","Marca: Tesla","Velocidad: 295","Peso: 1900","Frenada: 80","Electrico");
// let coche3 = new Coche("Modelo: Agera","Marca: Koenigsegg","Velocidad: 290","Peso: 2300","Frenada: 95","Gasolina");
// let coche4 = new Coche("Modelo: Chiron","Marca: Bugatti","Velocidad: 299","Peso: 1750","Frenada: 90","Diesel");

let coche1 = new Coche("Camaro","Chevrolet",280,2000,85,"Gasolina",0)
let coche2 = new Coche("Roadster","Tesla",295,1900,80,"Electrico",0);
let coche3 = new Coche("Agera","Koenigsegg",290,2300,95,"Gasolina",0);
let coche4 = new Coche("Chiron","Bugatti",299,1750, 90,"Diesel",0);

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

let ganador = "";
