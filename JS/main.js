//Funciones
const movimiento1 = (div, div2) => {

    if (team1 == coche1) {

        document.getElementById(div).src = "IMG/camaro.png";

    } else if (team1 == coche2) {

        document.getElementById(div).src = "IMG/tesla.png";

    } else if (team1 == coche3) {

        document.getElementById(div).src = "IMG/ag.png";

    } else {

        document.getElementById(div).src = "IMG/bugatti7.png";

    };

    document.getElementById(div2).style.display = "none";
    document.getElementById(div).style.display = "inline";
}

const movimiento2 = (div, div2) => {

    if (team2 == coche1) {

        document.getElementById(div).src = "IMG/camaro.png";

    } else if (team2 == coche2) {

        document.getElementById(div).src = "IMG/tesla.png";

    } else if (team2 == coche3) {

        document.getElementById(div).src = "IMG/ag.png";

    } else {

        document.getElementById(div).src = "IMG/bugatti7.png";

    };

    document.getElementById(div2).style.display = "none";
    document.getElementById(div).style.display = "inline";

}

const celebrar = () => {

    let cel = document.getElementById("carajito");
    document.getElementById("ganador").style.display = "none";

    cel.style.display = "inline";
    setTimeout(() => {

        cel.innerHTML = "<audio autoplay  src='MP3/SUIII.mp3'></audio>"
    }, 500);
}

const noCelebrar = () => {
    let cel = document.getElementById("carajito");

    cel.style.display = "none";
}

const cleanGame = () => {
    team1 = "";
    team2 = "";
    ganador = "";

    cambiaPantalla(1);
}

const cambiaPantalla = (cambio) => {

    //Generamos la variable concatenada que nos advierte a que pantalla 
    //queremos ir.
    let pantallaDeseada = "pantalla" + cambio;


    //Cada vez que entramos en la funcion se regenera el array con todas las pantallas, ya 
    //que anteriormente al filtrar algunas quedaban fuera, así empieza de nuevo el proceso
    let arrayPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4"];

    //Aquí filtramos del array aquella pantalla a la que queremos ir, ES DECIR,
    //guardamos todas las pantallas menos aquella a la que queremos ir, ya que al resto a todas
    //les queremos dar la propiedad display none
    arrayPantallas = arrayPantallas.filter(valor => !pantallaDeseada.includes(valor));

    //Antes de dar la propiedad display none al resto de pantallas, decimos a la que SI QUEREMOS
    //ver que tenga un display block, que la hará visible en el DOM (la web)
    document.getElementById(pantallaDeseada).style.display = "block";

    //Recorremos el array de las pantallas y a todas las que hay les damos la propiedad display como none
    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }


}

let welcome = document.getElementById("welcome");

setTimeout(() => {
    welcome.innerHTML = "Welcome to...";

    setTimeout(() => {
        welcome.innerHTML = "TOUGH RACING";

    }, 3000);
}, 1000);

setTimeout(() => {
    document.getElementById("pantallazo").classList.add("pantallaNegra");
}, 4000);

let motor2 = document.getElementById("motor");

const selectCar = (nCoche) => {


    if (team1 == "") {
        team1 = allCars[nCoche];
        let cochePrimero = document.getElementById(nCoche);
        let datosCoche = document.getElementById("data" + 1);

        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él

        cochePrimero.onclick = "";
        cochePrimero.classList.add("carSelected");
        datosCoche.innerHTML = `<p class="letricas">${team1.marca}<br>${team1.modelo}<br>Velocidad:${team1.velocidad}km/h<br>Fuerza de frenada:${team1.frenada}N</p>`;

    } else if (team2 == "") {
        team2 = allCars[nCoche];
        let cocheSegundo = document.getElementById(nCoche);
        let datosCoche = document.getElementById("data" + 2);

        cocheSegundo.onclick = "";
        cocheSegundo.classList.add("carSelected");
        let estadisticas = datosCoche.innerHTML = `<p class="letricas">${team2.marca}<br>${team2.modelo}<br>Velocidad:${team2.velocidad}km/h<br>Fuerza de frenada:${team2.frenada}N<p>`;
    }
    if (team1 != "" && team2 != "") {
        let avance = document.getElementById("avanzar2")
        avance.style.display = "inline";
    }

    racing();
}

const racing = () => {


    if (team1 == coche1) {

        document.getElementById("player111").src = "IMG/camaro.png";

    } else if (team1 == coche2) {

        document.getElementById("player111").src = "IMG/tesla.png";

    } else if (team1 == coche3) {

        document.getElementById("player111").src = "IMG/ag.png";

    } else {

        document.getElementById("player111").src = "IMG/bugatti7.png";

    };


    if (team2 == coche1) {

        document.getElementById("player222").src = "IMG/camaro.png";

    } else if (team2 == coche2) {

        document.getElementById("player222").src = "IMG/tesla.png";

    } else if (team2 == coche3) {

        document.getElementById("player222").src = "IMG/ag.png";

    } else {
        document.getElementById("player222").src = "IMG/bugatti7.png";

    }

}

// const botoncito = () => {

//     document.getElementById("driving").classList.add("driving2")
//    console.log("deberiagarrarlo");        
// }

const driving = () => {

    let ganador = "";

    let metrosPista = 2000;

    let num = Math.floor(Math.random() * 10);


    if (num <= 5 && num >= 0) {
        team1.acelerar();
        team2.frenar();

    } else if (num >= 5 && num <= 10) {
        team2.acelerar();
        team1.frenar()
    }

    if (team1.metros >= 400) {
        movimiento1("d", "player111");
    };
    if (team1.metros >= 800) {
        movimiento1("c", "d");
    };
    if (team1.metros >= 1200) {
        movimiento1("b", "c");
    };
    if (team1.metros >= 1600) {
        movimiento1("a", "b");
    };

    if (team2.metros >= 400) {
        movimiento2("i", "player222");
    }
    if (team2.metros >= 800) {
        movimiento2("h", "i")
    };
    if (team2.metros >= 1200) {
        movimiento2("g", "h")
    };
    if (team2.metros >= 1600) {
        movimiento2("f", "g");
    };




    let recuadro = document.getElementById("preguntas1");
    let recuadro2 = document.getElementById("preguntas2");

    recuadro.innerHTML = `<p class="font">Numero aleatorio:${num}<br>La velocidad del jugador es de: ${team1.velocidad}.<br> Ha recorrido:${team1.metros}
            metros.</p><br>`;
    recuadro2.innerHTML = `<p class="font">Numero aleatorio:${num}<br>La velocidad del jugador2 es de:${team2.velocidad}.<br> Ha recorrido:${team2.metros} metros. </p>`


    if (team1.metros > metrosPista) {
        ganador = team1;
    } else if (team2.metros > metrosPista) {
        ganador = team2;
    }

    if (ganador != "") {

        document.getElementById("driving").style.display = "none";
        setTimeout(() => {
            cambiaPantalla(4)
        }, 2000);
    }

    let mostrar = document.getElementById("ganador");

    switch (ganador.marca) {
        case "Tesla":
            mostrar.src = "IMG/tesla.png"
            break;

        case "Chevrolet":
            mostrar.src = "IMG/camaro.png"

            break;

        case "Koenigsegg":
            mostrar.src = "IMG/agera3.png"

            break;

        case "Bugatti":
            mostrar.src = "IMG/bugatti7.png"

            break;

    }
    if (ganador == team1) {
        document.getElementById("ganadorr").innerHTML = `El ganador es:<br>${team1.marca}`
    } else {
        document.getElementById("ganadorr").innerHTML = `El ganador es:<br>${team2.marca}`

    }
}