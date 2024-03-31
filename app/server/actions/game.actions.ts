import { IQuestion } from "../../interface/Game";
import { StackNavigation } from "../../types/props.types";
import { TextOptions } from "../../types/key.types";

import { generateOptions, generateQuestions } from "../../helper/game";

export const generateGameAction = (allQuestions: IQuestion[], navigation: StackNavigation, generateGame: (question: IQuestion) => void, amountQuestions: number, option: TextOptions) => {

    const questions = generateQuestions(allQuestions, amountQuestions)

    const quetionsGame = generateOptions(amountQuestions, allQuestions, questions, 6)

    for (let i = 0; i < amountQuestions; i++) {
        generateGame(quetionsGame[i])
    }

    navigation.navigate("Playing", {
        allQuestions,
        option
    })

}