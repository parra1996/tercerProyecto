
//Funciones

const cleanGame = () => {
    team1 = "";
    team2 = "";
    ganador = "";
}

const cambiaPantalla = (cambio) => {

    //Generamos la variable concatenada que nos advierte a que pantalla 
    //queremos ir.
    let pantallaDeseada = "pantalla" + cambio;
    

    //Cada vez que entramos en la funcion se regenera el array con todas las pantallas, ya 
    //que anteriormente al filtrar algunas quedaban fuera, así empieza de nuevo el proceso
    let arrayPantallas = ["pantalla1","pantalla2","pantalla3","pantalla4"];

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
   welcome.innerHTML= "Welcome to Tough Racing";
}, 2000);


const selectCar = (nCoche) => {
    

    if(team1 == ""){
        team1 = allCars[nCoche];
        let cochePrimero = document.getElementById(nCoche);
        let datosCoche = document.getElementById("data"+ 1);
        //una vez he escogido el coche, invalido el img para que nadie haga onclick sobre él
        cochePrimero.onclick = "";
        cochePrimero.classList.add("carSelected");
        datosCoche.innerHTML = `${team1.marca}<br>${team1.modelo}<br>${team1.velocidad}<br>${team1.peso}<br>${team1.frenada}<br>${team1.combustible}`;

        if(team1 == coche1){

            document.getElementById("player111").src = "IMG/camaro2.jpg" ;
            
        } else if (team1 == coche2){
   
           document.getElementById("player111").src = "IMG/tesla3.jpg" ;
   
        } else if (team1 == coche3){
   
           document.getElementById("player111").src = "IMG/agera2.jpg" ;
   
        } else {
   
           document.getElementById("player111").src = "IMG/bugatti4.jpg" ;
   
        }
        
        
    } else if (team2 == ""){
        team2 = allCars[nCoche];
        let cocheSegundo = document.getElementById(nCoche);
        let datosCoche = document.getElementById("data"+ 2);

        cocheSegundo.onclick = "";
        cocheSegundo.classList.add("carSelected");
        let estadisticas = datosCoche.innerHTML = `${team2.marca}<br>${team2.modelo}<br>${team2.velocidad}<br>${team2.peso}<br>${team2.frenada}<br>${team2.combustible}`;

        if(team2 == coche1){

            document.getElementById("player222").src = "IMG/camaro2.jpg" ;
    
        } else if (team2 == coche2){
    
           document.getElementById("player222").src = "IMG/tesla3.jpg" ;
    
        } else if (team2 == coche3){
    
           document.getElementById("player222").src = "IMG/agera2.jpg" ;
    
        } else {
           document.getElementById("player222").src = "IMG/bugatti4.jpg" ;
    
        }
        
    }
    if(team1 != "" && team2 != ""){
        let avance = document.getElementById("avanzar2")
        avance.style.display ="inline" ;
        
    
     }
    }

    
