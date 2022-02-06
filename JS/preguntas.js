const nextQuestion = () => {

}



const cuestionary = [
    {
        question1: "cuanto es 2+2 ? " ,
        answer1: [2,4,7,1],
        rAnswer1: 4
    },
////////////////////
    {
        question2: "cuanto es 2+3 ? " ,
        answer2: [2,4,7,5],
        rAnswer2: 5
    },
///////////////////////
    {
        question3:"cuanto es 2+4 ? " ,
        answer3:[2,4,6,1],
        rAnswer3: 6
    }

];

let muestraPreguntas = document.getElementById("preguntas1");
let muestraRespuestas = document.getElementById("respuestas1");

const ponerPregunta1 = () => {
   muestraPreguntas.innerHTML = cuestionary[0].question1;
};

const ponerRespuestas1 = () => {
    muestraRespuestas.innerHTML = cuestionary[0].answer1 ;
}


/*
    let rightAnswer;
    let currentQuestionIndex = 0; 
    let rightAnswers = 0;
    let wrongAnswers = 0 ; 

const printHTMLpregunta = (i) => {
    currentQuestionIndex++;
    let q = cuestionary[i] ;
    let a = q.rAnswer1 ;
    rightAnswer = a ;

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
*/
























