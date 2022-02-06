

// ////VARIABLES



// let muestraPreguntas = document.getElementById("preguntas11");
// let muestraRespuestas = document.getElementById("respuestas3");

// let botonCambio = document.getElementsByClassName("cambioPregunta");
// /// FUNCIONES

// const ponerPregunta1 = () => {
//    muestraPreguntas.innerHTML = cuestionary[0].question1;
// };

// const ponerRespuestas1 = () => {
    //     muestraRespuestas.innerHTML = cuestionary[0].answer1 ;
    // };

// const ponerPregunta2 = () => {
    //     muestraPreguntas.innerHTML = cuestionary[1].question2;
//  };

//  const ponerRespuestas2 = () => {
//      muestraRespuestas.innerHTML = cuestionary[1].answer2 ;
//  };
 


// // const verificar = parametro => {
    
    // //     let ra = document.getElementsByClassName('a');
    // //     let rb = document.getElementsByClassName('b');
    // //     let rc = document.getElementsByClassName('c');
    // //     let rd = document.getElementsByClassName('d');
    
    // //     if (cuestionary.rAnswer1 == "b:4"){
// //         console.log("aqui toy")
// //         console.log("correcto");
// //     } else {
    // //         console.log("ta mal") ;
    // //     } ;
    
    // // }
    
    // // const bien = () => {
// //     console.log("bien")
// // }

// // const mal = () => { 
    // //     console.log("mal")
    // // }
    
    // const cambiaPregunta = () => {
        //     ponerPregunta2();
//     ponerRespuestas2();
// }


// // let resp = document.getElementById("respuestas").innerHTML = cuestionary[0].answer1 ;
// // console.log(resp)


// for (let i = 0 ; i< cuestionary.length ; i++){
    //     ponerPregunta1();
//     ponerRespuestas1();
//     i++ ;


// }

// cambiaPregunta()








































const cuestionary = [
    {
        question:"cuanto es 2+2?",
        answers: [4,5,9,2],
       
    },

    {
        question: "cuanto es 2+3 ? " ,
        answers: [2 ,4 ,7 ,5],
        
    },

    {
        question:"cuanto es 2+4 ? " ,
        answer:[2 ,4 ,6 ,1]
        
    },

    {
        question:"cuanto es 2+6 ? " ,
        answer:[8 ,4 ,6 ,1]
        
    },

    {
        question:"cuanto es 2+4 ? " ,
        answer:[6 ,4 ,2 ,1]
        
    }

]; 




    let rightAnswer;
    let currentQuestionIndex = 0; 
    let rightAnswers = 0;
    let wrongAnswers = 0 ; 

const printHTMLpregunta = (i) => {
    currentQuestionIndex++;
    let q = cuestionary[i] ;
    let a = q.answers ;
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

























