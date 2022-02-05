const nextQuestion = () => {

}



const cuestionary = [
    {
        question: "cuanto es 2+2 ? " ,
        answer: [2,4,7,1],
    },
////////////////////
    {
        question: "cuanto es 2+3 ? " ,
        answer: [2,4,7,5],
    },
///////////////////////
    {
        question:"cuanto es 2+4 ? " ,
        answer:[2,4,6,1],
    }

];


    let rightAnswer;
    let currentQuestionIndex = 0; 
    let rightAnswers = 0;
    let wrongAnswers = 0 ; 

const printHTMLpregunta = (i) => {
    currentQuestionIndex++;
    let q = cuestionary[i] ;
    let a = q.answer ;
    rightAnswer = a[0] ;

    let htmlAnswersArray = a.map(currentA =>`<p class="answer"><button onClick="evaluateAnswer('${currentA}', this)">R</button><span>${currentA}</span></p>`);
    
    let htmlAnswers = htmlAnswersArray.join(' ');
    
    let htmlQuestionCode = `<p>${q.question}</p><div>${htmlAnswers}</div>`;

    document.getElementById("preguntas1").innerHTML = htmlQuestionCode;

    
    
}



const evaluateAnswer = (answer, obj) => {

    document.querySelectorAll(".answer").forEach( a => a.classList.remove('right','wrong')) ;

    const parentP =  obj.parentNode;

    console.log('answer:'+ answer + ', rightAnswer: ' + rightAnswers)

    if(answer == rightAnswer){
    
    parentP.classList.add('right') ;

    rightAnswer++;

    document.querySelector(".rightCounter").innerHTML = rightAnswers ;

    }else {

    parentP.classList.add('wrong') ;

    wrongAnswers++;

    document.querySelector(".wrongCounter").innerHTML = wrongAnswers ;

}
}

printHTMLpregunta(currentQuestionIndex);



























/*
let preguntas = [
    "cusnto es 2+2 ? ",
    "cuanto es 2+3 ? ",
    "cuanto es 2+4 ?",
    "cuanto es 3+5 ?",
    "cuanto es 3+6 ?",
    "cuanto es 3+7 ?",
    "cuanto es 3+8 ?",
    "cuanto es 3+9 ?",
    "cuanto es 4+1 ?",
    "cuanto es 3+2 ?",
    "cuanto es 3+3 ?"    
]

let respuestas = [
    [2,4,7,1],
    [1,5,8,5],
    [1,5,7,8],
    [1,5,2,2],
    [8,2,4,6],
    [1,2,6,8],
    [6,8,9,0],
    [3,2,6,8],
    [8,3,6,3],
    [9,2,5,6],
    [6,8,9,5],
]

let indiceAletorio = Math.floor(Math.random() * preguntas.length) ;

let respuestasPosibles = respuestas[indiceAletorio];

let posiciones = [0,1,2,3];
let respuestasReordenadas = [] ;


for(i in respuestasPosibles) {
    let posicionAleatoria = Math.floor(Math.random()*posiciones.length);

    respuestasReordenadas[i] = respuestasPosibles[posiciones[posicionAleatoria]];
    posiciones.splice(posicionAleatoria,1);
}

let textRespuestas = "" ;

for (i in respuestasReordenadas){
    textRespuestas += "<input type='radio'><label>"+ respuestasReordenadas[i] + '</label><br>';
}

document.getElementById("preguntas1").innerHTML = preguntas[indiceAletorio] ;
document.getElementById("player11").innerHTML = textRespuestas;
document.getElementById("preguntas2").innerHTML = preguntas[indiceAletorio] ;
document.getElementById("player22").innerHTML = textRespuestas; */