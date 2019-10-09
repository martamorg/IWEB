import { combineReducers } from 'redux';
import {CHANGE_QUESTION, QUESTION_ANSWER, SUBMIT} from "./actions";


function score(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            const rights = action.payload.questions.map((question) =>{
                var userAnswer = question.userAnswer ? question.userAnswer : " ";
                return question.answer.toLowerCase() === userAnswer.toLowerCase();
            });
            // recorro el array questions y aplico a cada elemento question el sig meétodo
            // si userAnswer tiene respuesta se queda con ella si no pone espacio vacio
            // compara userAnswer con la respuesta correcta de cada question
            // almacena los 1 y 0 de esa comparacion en un vector al que llamamos rights
            return rights.reduce(function (a,b){ return a+b});
            //suma los elementos del vector rights obteniendo el numero total de aciertos
            // en reduce se indica el array a recorrer y la funcion con la q se le reduce
            // a un solo valor entre paréntesis. equiv a un bucle de sumar valores java.
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return finished = true;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return (action.payload.change === 'Siguiente')  ? (++state) : (--state);
            default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            return state.map((question,i) => {
                return { ...question,
                         userAnswer: action.payload.index === i ?
                         action.payload.answer : question.userAnswer}
                         // hace un bucle. Busca la pregunta con index i y le asigna
                        // si no es index i deja la respuesta que estaba (question.userANswer)
                        // si es index i le asigna el valor introducido (action.payload.answer)
            })
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;