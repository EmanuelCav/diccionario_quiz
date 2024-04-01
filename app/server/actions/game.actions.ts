import { IQuestion } from "../../interface/Game";
import { StackNavigation } from "../../types/props.types";
import { GameType, TextOptions } from "../../types/key.types";

import { generateOptions, generateQuestions, shuffledOptions } from "../../helper/game";

export const generateGameAction = (allQuestions: IQuestion[], navigation: StackNavigation, generateGame: (question: IQuestion) => void, amountQuestions: number, option: TextOptions, game: GameType) => {

    const questions = generateQuestions(allQuestions, amountQuestions)

    let quetionsGame

    if(game !== 'correction') {
        quetionsGame = generateOptions(amountQuestions, allQuestions, questions, 6)
    } else {
        quetionsGame = shuffledOptions(questions)
    }
    
    for (let i = 0; i < amountQuestions; i++) {
        generateGame(quetionsGame[i])
    }

    navigation.navigate("Playing", {
        allQuestions,
        option,
        game
    })

}