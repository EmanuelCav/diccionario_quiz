import { IQuestion } from "../../interface/Game";
import { ICategory } from "../../interface/User";
import { TextOptions } from "../../types/key.types";
import { StackNavigation } from "../../types/props.types";

import { generateOptions, generateQuestions } from "../../helper/game";

export const generateGameAction = (allQuestions: IQuestion[], navigation: StackNavigation, amountOptions: TextOptions, amountQuestions: number, generateGame: (question: IQuestion) => void, categories: ICategory[]) => {

    let quetionsGame: IQuestion[];

    const questions = generateQuestions(categories, allQuestions, amountQuestions)

    if (amountOptions !== 'Sin opciones') {
        quetionsGame = generateOptions(amountQuestions, allQuestions, questions, amountOptions)
    } else {
        quetionsGame = questions
    }

    for (let i = 0; i < amountQuestions; i++) {
        generateGame(quetionsGame[i])
    }

    navigation.navigate("Playing")

}