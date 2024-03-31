import { IQuestion } from "../interface/Game";
import { ICategory } from "../interface/User";
import { TextOptions } from "../types/key.types";

export const keyboard: string[][] = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
['Z', 'X', 'C', 'V', 'B', 'N', 'M', '←', 'X!']]

export const generateQuestions = (allQuestions: IQuestion[], amountQuestions: number): IQuestion[] => {
    return shuffle(allQuestions).slice(0, amountQuestions)
}

export const generateOptions = (amountQuestions: number, allQuestions: IQuestion[], questions: IQuestion[], amountOptions: number): IQuestion[] => {

    for (let i = 0; i < amountQuestions; i++) {

        const options: IQuestion[] = shuffle(allQuestions.filter(q => (q.category === questions[i].category) && (q.answer !== questions[i].answer)))

        const optionRandom = Math.floor(Math.random() * amountOptions)

        if (questions[i].options.length > 0) continue

        for (let j = 0; j < amountOptions; j++) {

            if (j === optionRandom) {
                questions[i].options.push(questions[i].answer)
            } else {
                questions[i].options.push(options[j].answer)
            }
        }

    }

    return questions

}

export const verifyValue = (value: string, answer: string): string => {

    let mainValue = value.trim()

    if (mainValue === answer) return mainValue

    if (mainValue.length >= 4) {

        let count = 0

        for (let i = 0; i < answer.length; i++) {
            if(answer[i] === mainValue[i]) {
                count++
            }
        }

        if(count >= (answer.length - Math.floor(answer.length / 4))) {
            return answer
        }
    }

    return mainValue

}

export const helpsOptions = (options: string[], question: IQuestion, amountOptions: number): string[] => {

    const optionsFiltered = shuffle(options.filter(o => o !== question.answer)).slice(0, amountOptions / 2)

    return optionsFiltered

}

export const shuffle = (array: any[]): any[] => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const emptyOptions = (questions: IQuestion[]) => {
    for (let i = 0; i < questions.length; i++) {
        questions[i].options = []
    }
}
