 export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';

export function questionAnswer(index, answer) {
    return { type: QUESTION_ANSWER, payload: { index, answer} };
}

export function changeQuestion(index, change) {
    return { type: CHANGE_QUESTION, payload: { index, change } };
}

export function submit(questions){
    return{ type: "SUBMIT", payload: {questions}};
}
